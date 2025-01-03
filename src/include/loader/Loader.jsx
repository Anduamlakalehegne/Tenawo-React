import React from "react";

export default function Loader() {
  return (
    <div className="loader">
      <div className="indicator">
        <svg width="30px" height="24px">
          <polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
          <polyline id="front" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
        </svg>
      </div>
    </div>
  );
}
