import React from "react";
import "./AdminDashboard.css";
import DashboardCard from "../adminCards/DashboardCard";
import StatusTrends from "../StatusTrends/StatusTrends";
import ClaimedItemsCategory from "../ClaimedItemsChart/ClaimedItemsCategory";
import AdminLog from "../AdminLog/AdminLog";


const AdminDashboard = () => {
  const cardData = [
    {
      label: "Unclaimed Items",
      count: "20",
      gradient: "linear-gradient(223deg, #702121 0%, #D63F3F 100%)",
      iconSrc: "https://placehold.co/84x53", // Placeholder for the first icon
    },
    {
      label: "Reported Items",
      count: "12",
      gradient: "linear-gradient(223deg, #A84D1E 0%, #F5A623 100%)", // Adjusted gradient for orange
      iconSrc: "https://placehold.co/84x53", // Placeholder for the second icon
    },
    {
      label: "Items Returned",
      count: "8%",
      gradient: "linear-gradient(223deg, #F5A623 0%, #FFD700 100%)", // Adjusted gradient for yellow-orange
      iconSrc: "https://placehold.co/84x53", // Placeholder for the third icon
    },
    {
      label: "Pending Request",
      count: "5",
      gradient: "linear-gradient(223deg, #4B1A1A 0%, #A52A2A 100%)", // Adjusted gradient for darker red
      iconSrc: "https://placehold.co/84x53", // Placeholder for the fourth icon
    },
  ];
  
  return (
    <div className="admin-dashboard-container">
      <div className="dashboard-card">
        {cardData.map((card, index) => (
          <DashboardCard
            key={index}
            label={card.label}
            count={card.count}
            gradient={card.gradient}
            iconSrc={card.iconSrc}
          /> 
        ))} {/* This DashboardCard is only rendered in the AdminDashboard's page and by passing the props to it */}
      </div>
      <div className="charts-section">
        <StatusTrends /> {/* This StatusTrends is only rendered in the AdminDashboard's page */}
        <ClaimedItemsCategory /> {/* This ClaimedItemsCategory is only rendered in the AdminDashboard's page */}
      </div>
      <AdminLog /> {/* This AdminLog is only rendered in the AdminDashboard's page */}
    </div>
  );
};

export default AdminDashboard;