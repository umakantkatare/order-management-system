import { useEffect, useState } from "react";
import { getOrders } from "../api/orderApi";

const useOrders = () => {
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchOrders = async (selectedStatus = status) => {
    try {
      setLoading(true);
      setError("");

      const response = await getOrders(selectedStatus);

      setOrders(response.data.orders);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch orders.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return {
    orders,
    loading,
    error,
    status,
    setStatus,
    fetchOrders,
  };
};

export default useOrders;
