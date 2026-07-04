import {
  findPlacedOrders,
  findProcessingOrders,
  updateOrderStatus,
  createOrderHistory,
  createSchedulerLog,
} from "../repositories/scheduler.repository.js";

import { ORDER_STATUS } from "../constants/order.constant.js";

export const runSchedulerService = async () => {
  const startedAt = new Date();

  let totalOrdersChecked = 0;
  let totalOrdersUpdated = 0;

  try {
    const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);

    const twentyMinutesAgo = new Date(Date.now() - 20 * 60 * 1000);

    /**
     * ============================
     * PLACED -> PROCESSING
     * ============================
     */

    const placedOrders = await findPlacedOrders(tenMinutesAgo);

    totalOrdersChecked += placedOrders.length;

    for (const order of placedOrders) {
      await updateOrderStatus(order._id, ORDER_STATUS.PROCESSING);

      await createOrderHistory({
        order: order._id,
        previousStatus: ORDER_STATUS.PLACED,
        currentStatus: ORDER_STATUS.PROCESSING,
        changedBy: "SCHEDULER",
      });

      totalOrdersUpdated++;
    }

    /**
     * ======================================
     * PROCESSING -> READY_TO_SHIP
     * ======================================
     */

    const processingOrders = await findProcessingOrders(twentyMinutesAgo);

    totalOrdersChecked += processingOrders.length;

    for (const order of processingOrders) {
      await updateOrderStatus(order._id, ORDER_STATUS.READY_TO_SHIP);

      await createOrderHistory({
        order: order._id,
        previousStatus: ORDER_STATUS.PROCESSING,
        currentStatus: ORDER_STATUS.READY_TO_SHIP,
        changedBy: "SCHEDULER",
      });

      totalOrdersUpdated++;
    }

    /**
     * ============================
     * Save Scheduler Log
     * ============================
     */

    await createSchedulerLog({
      startedAt,
      endedAt: new Date(),
      totalOrdersChecked,
      totalOrdersUpdated,
      executionStatus: "SUCCESS",
      message: `${totalOrdersUpdated} order(s) updated successfully.`,
    });

    return {
      success: true,
      checkedOrders: totalOrdersChecked,
      updatedOrders: totalOrdersUpdated,
    };
  } catch (error) {
    await createSchedulerLog({
      startedAt,
      endedAt: new Date(),
      totalOrdersChecked,
      totalOrdersUpdated,
      executionStatus: "FAILED",
      message: error.message,
    });

    throw error;
  }
};
