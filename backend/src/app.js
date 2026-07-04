import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import errorHandler from "./middlewares/error.middleware.js";
import orderRoutes from "./routes/order.route.js";
import schedulerRoutes from "./routes/scheduler.routes.js";

dotenv.config({ quiet: true });

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", process.env.CLIENT_URL],
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "x-secret-key"],
  }),
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/orders", orderRoutes);
app.use("/api/v1/scheduler", schedulerRoutes);

app.use(errorHandler);
export default app;
