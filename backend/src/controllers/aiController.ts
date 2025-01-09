import { Request, Response } from "express";
import OpenAI from "openai";
import AppDataSource from "../utils/dbConnection";

import pkg from "pg";

const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  host: "rubixcube-rds.chwmo8ksmmlm.eu-west-2.rds.amazonaws.com",
  database: "vital",
  password: "TcsvC8wPtcePyy0ke32t",
  port: 5432,
});


const openAIKey = process.env.OPEN_API_KEY
const openai = new OpenAI({
  apiKey: openAIKey
});

async function fetchPatientData(patientId: any) {
  try {
    const result = await pool.query(
      "SELECT * FROM patients WHERE patient_id = $1",
      [patientId]
    );
    if (result.rows.length === 0) {
      return null;
    }
    const patientData = result.rows[0];
    const prompt = Object.entries(patientData)
      .map(([key, value]) => `${key}: ${value}`)
      .join(", ");
    return prompt;
  } catch (error: any) {
    console.error("Error fetching data from database:", error.message);
    throw new Error("Database query failed");
  }
}

async function generateSummary(prompt: any) {
  if (!prompt) {
    throw new Error("Prompt is undefined or empty.");
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "Analyse the data as a physician screening the dementia patient.",
        },
        { role: "system", content: "" },
        {
          role: "user",
          content: `Summarize the following patient data: ${prompt}`,
        },
      ],
      max_tokens: 150,
    });

    let summary = response.choices?.[0]?.message?.content?.trim();
    if (!summary || summary === undefined) {
      console.error("Content is null or undefined.");
    }

    summary = summary
      ?.replace(/\\n/g, " ")
      .replace(/\\'/g, "'")
      .replace(/\\"/g, '"')
      .replace(/\\\\/g, "\\")
      .replace(/\s+/g, " ")
      .replace(/^./, (str:any) => str.toUpperCase());

    summary = summary?.replace(/\b(cancer|stroke|cardiac)\b/gi, (match:any) => {
      return `<span style="color: red; font-weight: bold;">${match}</span>`;
    });

    return summary;
  } catch (error: any) {
    console.error("Error generating summary:", error.message);
    throw new Error("Failed to generate summary");
  }
}

// app.get("/questions", async (req:any, res:any) => {
const getSummary = async (req: any, res: any) => {
  try {
    const { patientId } = req.query;
    if (!patientId) {
      return res
        .status(400)
        .json({ error: "patientId is required as a query parameter" });
    }

    const prompt = await fetchPatientData(patientId);
    if (!prompt) {
      return res.status(404).json({ error: "Patient not found" });
    }

    console.log("PROMPT:", prompt);

    const summary = await generateSummary(prompt);

    res.json({ summary });
  } catch (error: any) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Server error occurred" });
  }
};

export { getSummary };
