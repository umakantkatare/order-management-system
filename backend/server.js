import app from "./src/app.js";
import connectDB from "./src/config/db.config.js";
import startOrderScheduler from "./src/cron/orderScheduler.js";

const PORT = process.env.PORT || 4000;

const startServer = async () => {
  try {
    await connectDB();

    startOrderScheduler();

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

startServer();
