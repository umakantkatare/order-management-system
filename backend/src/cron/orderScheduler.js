import cron from "node-cron";
import { runSchedulerService } from "../services/scheduler.service.js";

const startOrderScheduler = () => {
  cron.schedule("*/5 * * * *", async () => {
    console.log("Running Order Scheduler...");

    try {
      const result = await runSchedulerService();

      console.log("Scheduler Result:", result);
    } catch (error) {
      console.error("Scheduler Failed:", error.message);
    }
  });

  console.log("Order Scheduler Started");
};

export default startOrderScheduler;
