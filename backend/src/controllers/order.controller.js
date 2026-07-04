import {
  createServiceOrder,
  getServiceOrders,
} from "../services/order.service.js";
import ApiResponse from "../utils/ApiResponse.util.js";
import asyncHandler from "../utils/asyncHandler.util.js";

export const createOrder = asyncHandler(async (req, res) => {
  const order = await createServiceOrder(req.body);

  return res
    .status(201)
    .json(new ApiResponse(201, "Order created successfully.", order));
});

export const getOrders = asyncHandler(async (req, res) => {
  const orders = await getServiceOrders(req.query.status);

  return res.status(200).json(
    new ApiResponse(200, "Orders fetched successfully.", {
      count: orders.length,
      orders,
    }),
  );
});
