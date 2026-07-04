import ApiResponse from "../utils/ApiResponse.util.js";
import asyncHandler from "../utils/asyncHandler.util.js";
import { runSchedulerService } from "../services/scheduler.service.js";

export const runScheduler = asyncHandler(async (req, res) => {
  const result = await runSchedulerService();

  return res
    .status(200)
    .json(new ApiResponse(200, "Scheduler executed successfully.", result));
});
