import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import orderRoutes from "./routes/order.route.js";
import errorHandler from "./middlewares/error.middleware.js";

dotenv.config({ quiet: true });

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/orders", orderRoutes);

app.use(errorHandler);
export default app;
