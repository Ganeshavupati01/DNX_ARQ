import React from "react";
import "../styles/ProgressBar.css";

export default function ProgressBar({ completed, total }) {
  const percent = Math.round((completed / total) * 100);
  return (
    <div className="progress-bar">
      <div className="progress-fill" style={{ width: `${percent}%` }}></div>
      <div
        className="progress-knob"
        style={{ left: `calc(${percent}% - 6px)` }}
      ></div>
    </div>
  );
}
