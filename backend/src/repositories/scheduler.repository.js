import Order from "../models/order.model.js";
import OrderStatusHistory from "../models/orderStatusHistory.model.js";
import SchedulerLog from "../models/schedulerLog.model.js";
import { ORDER_STATUS } from "../constants/order.constant.js";

/**
 * Find all orders with PLACED status
 */
export const findPlacedOrders = async (beforeDate) => {
  return await Order.find({
    status: ORDER_STATUS.PLACED,
    updatedAt: {
      $lte: beforeDate,
    },
  });
};

/**
 * Find all orders with PROCESSING status
 */
export const findProcessingOrders = async (beforeDate) => {
  return await Order.find({
    status: ORDER_STATUS.PROCESSING,
    updatedAt: {
      $lte: beforeDate,
    },
  });
};

/**
 * Update order status
 */
export const updateOrderStatus = async (orderId, status) => {
  return await Order.findByIdAndUpdate(
    orderId,
    {
      status,
    },
    {
      new: true,
    },
  );
};

/**
 * Create order status history
 */
export const createOrderHistory = async (payload) => {
  return await OrderStatusHistory.create(payload);
};

/**
 * Create scheduler execution log
 */
export const createSchedulerLog = async (payload) => {
  return await SchedulerLog.create(payload);
};

 "implement placed to processing scheduler"
