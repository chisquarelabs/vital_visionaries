import express from "express";

import { createPatientEntry } from "../controllers/patientController";

const router = express.Router();

router.post("/patient", createPatientEntry);

export default router;
