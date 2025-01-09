import { Request, Response } from "express";

import AppDataSource from "../utils/dbConnection";
import { Patient } from "../entities/patient.entity";

// @desc Create a new patient entry with their answers and scores
// @route POST /api/patient
const createPatientEntry = async (req: Request, res: Response) => {
  try {
    let newPatientEntry = req.body;

    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Patient)
      .values(newPatientEntry)
      .execute();

    res.status(201).json({ message: "Patient Entry Created" });
  } catch (error) {
    console.error("Error creating patient entry:", error);
    res.status(500).json({ error: "Failed to create patient entry" });
  }
};

export { createPatientEntry };
