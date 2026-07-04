import formatDate from "../../utils/formatDate";

const OrderRow = ({ order }) => {
  const getStatusStyles = (status) => {
    const s = status?.toLowerCase();
    if (s === "delivered" || s === "completed") {
      return "bg-green-50 text-green-700 border-green-200/60";
    }
    if (s === "pending" || s === "processing") {
      return "bg-amber-50 text-amber-700 border-amber-200/60";
    }
    if (s === "cancelled" || s === "failed") {
      return "bg-rose-50 text-rose-700 border-rose-200/60";
    }
    return "bg-gray-50 text-gray-600 border-gray-200";
  };

  const getPaymentStyles = (status) => {
    const s = status?.toLowerCase();
    if (s === "paid" || s === "success") {
      return "text-green-600 font-medium";
    }
    if (s === "unpaid" || s === "pending") {
      return "text-amber-600 font-medium";
    }
    return "text-gray-500";
  };

  return (
    <tr className="group transition-colors duration-150 hover:bg-gray-50/60">
      {/* Order ID - Bold accent font */}
      <td className="px-6 py-4 text-sm font-medium text-blue-600 whitespace-nowrap">
        #{order.orderId}
      </td>

      {/* Customer Name */}
      <td className="px-6 py-4 text-sm font-semibold text-gray-800 whitespace-nowrap">
        {order.customerName}
      </td>

      {/* Phone */}
      <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
        {order.phone || "—"}
      </td>

      {/* Product Name */}
      <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">
        {order.productName}
      </td>

      {/* Amount - Monospace numbers look fantastic for aligned pricing */}
      <td className="px-6 py-4 text-sm font-semibold text-gray-900 tabular-nums whitespace-nowrap">
        ₹{Number(order.amount).toLocaleString("en-IN")}
      </td>

      {/* Payment Status (Text-only indicator) */}
      <td
        className={`px-6 py-4 text-sm whitespace-nowrap ${getPaymentStyles(order.paymentStatus)}`}
      >
        <span className="inline-flex items-center gap-1.5">
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              order.paymentStatus?.toLowerCase() === "paid"
                ? "bg-green-500"
                : "bg-amber-500"
            }`}
          />
          {order.paymentStatus}
        </span>
      </td>

      {/* Fulfillment Status (Pill Badge) */}
      <td className="px-6 py-4 text-sm whitespace-nowrap">
        <span
          className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium capitalize ${getStatusStyles(order.status)}`}
        >
          {order.status}
        </span>
      </td>

      {/* Created At Date */}
      <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
        {formatDate(order.createdAt)}
      </td>
    </tr>
  );
};

export default OrderRow;
