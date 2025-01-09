import express from "express";

import { createPatientEntry,getAllPatients } from "../controllers/patientController";

const router = express.Router();

router.post("/patient", createPatientEntry);
router.get("/getall",getAllPatients)

export default router;
