import { RefreshCw } from "lucide-react";
const RefreshButton = ({ fetchOrders, loading }) => {
  return (
    <button
      type="button"
      onClick={() => fetchOrders()}
      disabled={loading}
      className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
    >
      <RefreshCw size={14} /> Refresh
    </button>
  );
};

export default RefreshButton;
