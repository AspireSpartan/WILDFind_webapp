import React from "react";
import "./ClaimedItemsChart.css";

const ClaimedItemsChart = () => {
  return (
    <div className="claimed-items-chart">
      <div className="rectangle93"></div>

      {/* Progress Bars */}
      <div className="progress-background" style={{ top: "111.11px" }}></div>
      <div className="progress-bar" style={{ width: "203.82px", top: "111.11px" }}>
        <span className="progress-label" style={{ left: "194.63px" }}>50%</span>
      </div>

      <div className="progress-background" style={{ top: "181.11px" }}></div>
      <div className="progress-bar" style={{ width: "139.46px", top: "181.11px" }}>
        <span className="progress-label" style={{ left: "136.39px" }}>39%</span>
      </div>

      <div className="progress-background" style={{ top: "251.11px" }}></div>
      <div className="progress-bar" style={{ width: "321.83px", top: "251.11px" }}>
        <span className="progress-label" style={{ left: "315.70px" }}>70%</span>
      </div>

      <div className="progress-background" style={{ top: "323.33px" }}></div>
      <div className="progress-bar" style={{ width: "154.78px", top: "323.33px" }}>
        <span className="progress-label" style={{ left: "142.52px" }}>45%</span>
      </div>

      <div className="progress-background" style={{ top: "392.22px" }}></div>
      <div className="progress-bar" style={{ width: "237.54px", top: "392.22px" }}>
        <span className="progress-label" style={{ left: "236.01px" }}>49%</span>
      </div>

      <div className="progress-background" style={{ top: "455.56px" }}></div>
      <div className="progress-bar" style={{ width: "367.80px", top: "455.56px" }}>
        <span className="progress-label" style={{ left: "355.54px" }}>88%</span>
      </div>

      <div className="progress-background" style={{ top: "517.78px" }}></div>
      <div className="progress-bar" style={{ width: "390.79px", top: "517.78px" }}>
        <span className="progress-label" style={{ left: "381.59px" }}>90%</span>
      </div>

      {/* Category Labels */}
      <div className="category-label" style={{ top: "82.22px" }}>Electronics</div>
      <div className="category-label" style={{ top: "154.44px" }}>Clothing</div>
      <div className="category-label" style={{ top: "224.44px" }}>Accessories</div>
      <div className="category-label" style={{ top: "295.56px" }}>Bags</div>
      <div className="category-label" style={{ top: "365.56px" }}>Stationery</div>
      <div className="category-label" style={{ top: "428.89px" }}>Personal</div>
      <div className="category-label" style={{ top: "486.67px" }}>Sport Equipment</div>

      {/* Title */}
      <div className="chart-title">Claimed Items / Categories</div>

      {/* Year Indicator */}
      <div className="year-indicator">This Year</div>
    </div>
  );
};

export default ClaimedItemsChart;
