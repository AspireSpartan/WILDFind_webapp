import React from "react";
import "./AdminLog.css";

const AdminLog = () => {
  const logs = [
    {
      dateTime: "12/15/2024, 10:00 AM - 3:00 PM",
      adminName: "Jaspher Lawrence Siloy",
      action: "Reported an item",
      details: "Item: Tumbler",
    },
    {
      dateTime: "12/15/2024, 10:00 AM - 3:00 PM",
      adminName: "Vincent Obeso",
      action: "Reported an item",
      details: "Item: Cellphone",
    },
    {
      dateTime: "12/15/2024, 10:00 AM - 3:00 PM",
      adminName: "Leslie Claire Faustino",
      action: "Denied a request",
      details: "No Proof",
    },
    {
      dateTime: "12/15/2024, 10:00 AM - 3:00 PM",
      adminName: "Loisandra Saeceda",
      action: "Approve a request",
      details: "Released",
    },
  ];

  // Function to determine the button class based on the action
  const getActionClass = (action) => {
    switch (action) {
      case "Reported an item":
        return "action-reported";
      case "Denied a request":
        return "action-denied";
      case "Approve a request":
        return "action-approved";
      default:
        return "";
    }
  };

  return (
    <div className="admin-log-container">
      <h2>Admin Log</h2>
      <div className="table-wrapper">
        <table className="admin-log-table">
          <thead>
            <tr>
              <th>Date and Time</th>
              <th>Admin Name</th>
              <th>Action</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => (
              <tr key={index}>
                <td>{log.dateTime}</td>
                <td>{log.adminName}</td>
                <td>
                  <span className={`action-button ${getActionClass(log.action)}`}>
                    {log.action}
                  </span>
                </td>
                <td>{log.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminLog;