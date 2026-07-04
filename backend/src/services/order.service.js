import { createOrder, getOrderById, getOrders } from "./../repositories/order.repository.js";
import { generateOrderId } from "../utils/generateOrderId.util.js";

export const createServiceOrder = async (payload) => {
  const orderId = generateOrderId();

  const existingOrder = await getOrderById(orderId);

  if (existingOrder) {
    throw new ApiError(409, "Order ID already exists.");
  }

  const order = {
    ...payload,
    orderId,
  };

  return await createOrder(order);
};

export const getServiceOrders = async (status) => {
  const filter = {};

  if (status) {
    filter.status = status;
  }

  return await getOrders(filter);
};
