import mongoose from "mongoose";
import { ORDER_STATUS } from "../constants/order.constant.js";

const orderStatusHistorySchema = new mongoose.Schema(
  {
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },

    previousStatus: {
      type: String,
      enum: Object.values(ORDER_STATUS),
      required: true,
    },

    currentStatus: {
      type: String,
      enum: Object.values(ORDER_STATUS),
      required: true,
    },

    changedBy: {
      type: String,
      enum: ["SCHEDULER", "ADMIN"],
      default: "SCHEDULER",
    },

    changedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  },
);

const OrderStatusHistory = mongoose.model(
  "OrderStatusHistory",
  orderStatusHistorySchema,
);
export default OrderStatusHistory;
