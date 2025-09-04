import React from "react";

export default function HelpCenter() {
  return (
    <div className="help-center">
      <div className="help-top">
        <div className="help-dot">?</div>
      </div>

      <div className="help-body">
        <h3>Help Center</h3>
        <p>Having trouble in learning. Please contact us for more questions.</p>
        <button
          className="btn-primary clickable"
          onClick={() => alert("Go To Help Center")}
        >
          Go To Help Center
        </button>
      </div>
    </div>
  );
}
