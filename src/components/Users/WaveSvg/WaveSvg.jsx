import React from "react";
import "./WaveSvg.css"; // Import the CSS file

const WaveSvg = () => {
  return (
    <div data-svg-wrapper data-layer="Component 1" className="wave-svg">
      <svg
        width="1920"
        height="238"
        viewBox="0 0 1920 238"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1560.5 0C918 430 2638 0 2177 195C2118.46 195 -317.499 1268.36 -147 145.363C-147 87.3727 168.998 261.829 486.498 49.3286C194.998 364.329 897.999 96.1375 1560.5 0Z"
          fill="url(#paint0_linear)"
          fillOpacity="0.5"
        />
        <path
          d="M1589.05 35C946.548 465 2666.55 35 2205.55 230C2147.01 230 -288.951 1303.36 -118.452 180.363C-118.452 122.373 197.546 296.829 515.046 84.3286C223.546 399.329 926.547 131.138 1589.05 35Z"
          fill="url(#paint1_linear)"
          fillOpacity="0.75"
        />
        <path
          d="M1601.05 66C958.548 496 2678.55 66 2217.55 261C2159.01 261 -276.951 1334.36 -106.452 211.363C-106.452 153.373 209.546 327.829 527.046 115.329C235.546 430.329 938.547 162.138 1601.05 66Z"
          fill="url(#paint2_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="-155.548"
            y1="328.838"
            x2="2256.6"
            y2="328.838"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF7E0D" />
            <stop offset="1" stopColor="#900B09" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="-127"
            y1="363.838"
            x2="2285.14"
            y2="363.838"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF7E0D" />
            <stop offset="1" stopColor="#900B09" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="-115"
            y1="394.838"
            x2="2297.14"
            y2="394.838"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF7E0D" />
            <stop offset="1" stopColor="#900B09" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default WaveSvg;
