import { Router } from "express";
import { runScheduler } from "../controllers/scheduler.controller.js";
import schedulerAuth from "../middlewares/schedulerAuth.middleware.js";

const router = Router();

router.post("/run", schedulerAuth, runScheduler);

export default router;
