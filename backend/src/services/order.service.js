import { createOrder, getOrders } from "./../repositories/order.repository.js";
import { generateOrderId } from "../utils/generateOrderId.util.js";

export const createServiceOrder = async (payload) => {
  const order = {
    ...payload,
    orderId: generateOrderId(),
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
