import { useState } from "react";
import "./App.css";
import axiosInstance from "./api/axios";

function App() {
  const testConnection = async () => {
    try {
      const response = await axiosInstance.get("/orders");

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-10">
      <button
        onClick={testConnection}
        className="rounded bg-blue-600 px-4 py-2 text-white"
      >
        Test Backend Connection
      </button>
    </div>
  );
}

export default App;
