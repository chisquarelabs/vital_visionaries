import express from "express";

import { getSummary } from "../controllers/aiController";

const router = express.Router();

router.post("/summary", getSummary);

export default router;
