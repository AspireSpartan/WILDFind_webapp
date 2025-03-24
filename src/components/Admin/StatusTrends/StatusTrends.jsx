import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./StatusTrends.css";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StatusTrends = () => {
  // Data for the chart
  const labels = [
    "12/01",
    "12/02",
    "12/03",
    "12/04",
    "12/05",
    "12/06",
    "12/07",
    "12/08",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Claimed",
        data: [48, 38, 38, 25, 42, 30, 48, 23], // Values from the image
        backgroundColor: "#680303", // Dark red
        borderRadius: 10,
        barThickness: 18, // Match the width of bars in your design
      },
      {
        label: "Pending",
        data: [32, 42, 25, 25, 42, 35, 18, 42],
        backgroundColor: "#D6A30B", // Yellow
        borderRadius: 10,
        barThickness: 18,
      },
      {
        label: "Denied",
        data: [40, 20, 45, 28, 20, 20, 25, 22],
        backgroundColor: "#EB8F0F", // Orange
        borderRadius: 10,
        barThickness: 18,
      },
    ],
  };

  // Chart options to customize appearance
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        align: "end",
        labels: {
          boxWidth: 35.98,
          boxHeight: 7.38,
          padding: 20,
          font: {
            family: "Poppins",
            size: 12,
            weight: "400",
          },
          color: "#616060",
          usePointStyle: false,
        },
      },
      title: {
        display: true,
        text: "Status Trends",
        align: "start",
        font: {
          family: "Lato",
          size: 30,
          weight: "700",
        },
        color: "#424242",
        padding: {
          top: 10,
          bottom: 10,
        },
      },
      subtitle: {
        display: true,
        text: "Dec. 01, 2024 - Dec 08, 2024",
        align: "start",
        font: {
          family: "Poppins",
          size: 14,
          weight: "500",
        },
        color: "#534D4D",
        padding: {
          top: 0,
          bottom: 20,
        },
        position: "top",
      },
      tooltip: {
        backgroundColor: "#424242",
        titleFont: {
          family: "Poppins",
          size: 14,
          weight: "600",
        },
        bodyFont: {
          family: "Poppins",
          size: 12,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide vertical grid lines
        },
        ticks: {
          font: {
            family: "Poppins",
            size: 16,
            weight: "600",
          },
          color: "#616060",
        },
      },
      y: {
        beginAtZero: true,
        max: 50,
        ticks: {
          stepSize: 10,
          font: {
            family: "Poppins",
            size: 14,
            weight: "600",
          },
          color: "#424242",
        },
        grid: {
          color: "#7B7474",
          borderDash: [2, 2],
        },
      },
    },
  };

  return (
    <div className="status-trends-container">
      <div className="chart-wrapper">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default StatusTrends;