import StatusFilter from "../components/orders/StatusFilter";
import useOrders from "../hooks/useOrders";

const Dashboard = () => {
  const { orders, loading, error, status, setStatus, fetchOrders } =
    useOrders();

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <h1 className="mb-8 text-3xl font-bold">Order Management Dashboard</h1>

        {/* Controls */}
        <div className="mb-6 flex items-center justify-between">
            <StatusFilter
              status={status}
              setStatus={setStatus}
              fetchOrders={fetchOrders}
            />

          <div>Refresh Button</div>
        </div>

        {/* Orders Table */}
        <div>Orders Table</div>
      </div>
    </main>
  );
};

export default Dashboard;
