import { Router } from "express";
import { runScheduler } from "../controllers/scheduler.controller.js";

const router = Router();

router.post("/run", runScheduler);

export default router;
