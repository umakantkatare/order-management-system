import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config({ quiet: true });

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Order Management API is running...",
  });
});

export default app;
