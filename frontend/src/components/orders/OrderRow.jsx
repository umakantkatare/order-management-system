import formatDate from "../../utils/formatDate";

const OrderRow = ({ order }) => {
  return (
    <tr className="border-b">
      <td className="px-4 py-3">{order.orderId}</td>

      <td className="px-4 py-3">{order.customerName}</td>

      <td className="px-4 py-3">{order.phone}</td>

      <td className="px-4 py-3">{order.productName}</td>

      <td className="px-4 py-3">₹{order.amount}</td>

      <td className="px-4 py-3">{order.paymentStatus}</td>

      <td className="px-4 py-3">{order.status}</td>

      <td className="px-4 py-3">{formatDate(order.createdAt)}</td>
    </tr>
  );
};

export default OrderRow;
