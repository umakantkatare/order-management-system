import { useState } from "react";
import "./App.css";
import axiosInstance from "./api/axios";
import { getOrders } from "./api/orderApi";

function App() {
  const test = async () => {
    const data = await getOrders();

    console.log(data);
  };

  return (
    <div className="p-10">
      <button
        onClick={test}
        className="rounded bg-blue-600 px-4 py-2 text-white"
      >
        Test Backend Connection
      </button>
    </div>
  );
}

export default App;
