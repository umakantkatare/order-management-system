import Loading from "../common/Loading";
import EmptyState from "../common/EmptyState";
import ErrorState from "../common/ErrorState";
import OrderRow from "./OrderRow";

const OrdersTable = ({ orders, loading, error }) => {
  if (loading) return <Loading />;

  if (error) {
    return <ErrorState message={error} />;
  }

  if (orders.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="overflow-x-auto rounded-lg bg-white shadow">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-left">Order ID</th>

            <th className="px-4 py-3 text-left">Customer</th>

            <th className="px-4 py-3 text-left">Phone</th>

            <th className="px-4 py-3 text-left">Product</th>

            <th className="px-4 py-3 text-left">Amount</th>

            <th className="px-4 py-3 text-left">Payment</th>

            <th className="px-4 py-3 text-left">Status</th>

            <th className="px-4 py-3 text-left">Created</th>
          </tr>
        </thead>

        <tbody>
          {Array.isArray(orders) &&
            orders.map((order) => <OrderRow key={order._id} order={order} />)}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
