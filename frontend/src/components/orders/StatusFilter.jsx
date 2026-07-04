import { ORDER_STATUS } from "../../constants/orderStatus";

const StatusFilter = ({ status, setStatus, fetchOrders }) => {
  const handleChange = (event) => {
    const selectedStatus = event.target.value;

    setStatus(selectedStatus);

    fetchOrders(selectedStatus);
  };

  return (
    <select
      value={status}
      onChange={handleChange}
      className="rounded-md border border-gray-300 bg-white px-4 py-2 outline-none focus:border-blue-500"
    >
      <option value="">All Orders</option>

      <option value={ORDER_STATUS.PLACED}>Placed</option>

      <option value={ORDER_STATUS.PROCESSING}>Processing</option>

      <option value={ORDER_STATUS.READY_TO_SHIP}>Ready To Ship</option>
    </select>
  );
};

export default StatusFilter;
