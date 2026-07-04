import { Router } from "express";
import { createOrder, getOrders } from "../controllers/order.controller.js";
import validate from "../middlewares/validation.middleware.js";
import { createOrderSchema } from "../validations/order.validation.js";

const router = Router();

router.post("/", validate(createOrderSchema), createOrder);

router.get("/", getOrders);

export default router;
