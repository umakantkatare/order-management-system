import axiosInstance from "./axios";

/**
 * Get all orders
 */
export const getOrders = async (status = "") => {
  const response = await axiosInstance.get("/orders", {
    params: {
      status,
    },
  });

  return response.data;
};

/**
 * Run scheduler
 */
export const runScheduler = async (secretKey) => {
  const response = await axiosInstance.post(
    "/scheduler/run",
    {},
    {
      headers: {
        "x-secret-key": secretKey,
      },
    },
  );

  return response.data;
};
