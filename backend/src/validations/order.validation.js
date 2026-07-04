import Joi from "joi";
import { ORDER_STATUS, PAYMENT_STATUS } from "../constants/order.constant.js";

export const createOrderSchema = Joi.object({
  customerName: Joi.string().trim().min(3).max(100).required(),

  phone: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required(),

  productName: Joi.string().trim().required(),

  amount: Joi.number().positive().required(),

  paymentStatus: Joi.string()
    .valid(...Object.values(PAYMENT_STATUS))
    .optional(),

  status: Joi.string()
    .valid(...Object.values(ORDER_STATUS))
    .optional(),
});