import Order from "../models/order.model.js";

export const createOrder = async (payload) => {
  return await Order.create(payload);
};

export const getOrders = async (filter = {}) => {
  return await Order.find(filter).sort({ createdAt: -1 });
};

export const getOrderById = async (orderId) => {
  return await Order.findOne({ orderId });
};
