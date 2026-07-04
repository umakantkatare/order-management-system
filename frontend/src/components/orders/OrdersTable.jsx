import Loading from "../common/Loading";
import EmptyState from "../common/EmptyState";
import ErrorState from "../common/ErrorState";
import OrderRow from "./OrderRow";

const OrdersTable = ({ orders, loading, error }) => {
  if (loading) return <Loading />;

  if (error) {
    return <ErrorState message={error} />;
  }

  if (!orders || orders.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-max border-collapse text-left">
          <thead className="bg-gray-50/70 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Order ID
              </th>
              <th className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Customer
              </th>
              <th className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Phone
              </th>
              <th className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Product
              </th>
              <th className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Amount
              </th>
              <th className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Payment
              </th>
              <th className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Status
              </th>
              <th className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Created
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100 bg-white">
            {Array.isArray(orders) &&
              orders.map((order) => <OrderRow key={order._id} order={order} />)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersTable;