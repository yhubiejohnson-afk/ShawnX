import React from "react";
import Navbar from "../components/Navbar";
import TradeCard from "../components/TradeCard";

function Dashboard() {
  return (
    <div>
      <Navbar />
      <h1>Welcome to ShawnX Dashboard</h1>
      <TradeCard />
    </div>
  );
}

export default Dashboard;