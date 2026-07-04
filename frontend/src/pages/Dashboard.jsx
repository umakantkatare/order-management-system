import useOrders from "../hooks/useOrders";

const Dashboard = () => {
  const {
    orders,
    loading,
    error,
    status,
    setStatus,
    fetchOrders,
  } = useOrders();

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <h1 className="mb-8 text-3xl font-bold">
          Order Management Dashboard
        </h1>

        {/* Controls */}
        <div className="mb-6 flex items-center justify-between">
          <div>Status Filter</div>

          <div>Refresh Button</div>
        </div>

        {/* Orders Table */}
        <div>Orders Table</div>
      </div>
    </main>
  );
};

export default Dashboard;