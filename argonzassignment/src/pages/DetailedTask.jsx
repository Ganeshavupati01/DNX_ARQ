import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import ProgressBar from '../components/ProgressBar';
import '../styles/ProgressBar.css';

import '../styles/DetailedTask.css';

const assessmentSteps = [
  "Understand the required tools and resources",
  "Learn the basic concepts related to the task",
  "Apply the concepts to complete the given task/project",
  "Present or document the work process and outcome",
  "Get feedback and guidance from mentors"
];

export default function DetailedTask() {
  const location = useLocation();
  const task = location.state?.task;
  const [checkedSteps, setCheckedSteps] = useState([]);
  const [search, setSearch] = useState("");
  const totalSteps = assessmentSteps.length;

  if (!task) {
    return <div style={{ padding: 20 }}>No task data found.</div>;
  }

  // Local progress
  const localTotal = assessmentSteps.length;
  const localCompleted = checkedSteps.length;

  // Server progress
  const taskCompleted = Number(task?.subtasks?.completed ?? 0);
  const taskTotal = Number(task?.subtasks?.total ?? totalSteps);
  const taskProgressPercent =
    taskTotal > 0 ? Math.round((taskCompleted / taskTotal) * 100) : 0;

  // Sync checkboxes with backend
  useEffect(() => {
    setCheckedSteps(Array.from({ length: taskCompleted }, (_, i) => i));
  }, [taskCompleted, taskTotal, totalSteps]);

  // Toggle step
  const handleCheckboxChange = (idx) => {
    setCheckedSteps((prev) => {
      const updated = prev.includes(idx)
        ? prev.filter((i) => i !== idx)
        : [...prev, idx];

      const completedCount = updated.length;
      const payload = { completed: completedCount, total: totalSteps };

      if (task?._id) {
        fetch(`http://localhost:5000/tasks/${task._id}/progress`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })
          .then((res) => res.json().catch(() => null))
          .catch((err) => console.error("Network error updating progress:", err));
      }

      return updated;
    });
  };

  const localProgressPercent = Math.round(
    (checkedSteps.length / totalSteps) * 100
  );

  return (
    <div className="app-shell" style={{ fontFamily: "Inter, Arial, sans-serif" }}>
      <Sidebar />
      <main className="main-area" style={{ padding: 20 }}>
        <Topbar
          pageType="task"
          search={search}
          setSearch={setSearch}
          onCategoryClick={() => {}}
          onSortClick={() => {}}
        />

  <div className="detailed-task-content">
          <div className="main-content">
            <h2 style={{ marginTop: 0 }}>{task.title}</h2>

            <div className="video-section">
              <video
                src={task.videoUrl || "https://www.w3schools.com/html/mov_bbb.mp4"}
                controls
                style={{ width: "100%", borderRadius: 12, background: "#000" }}
              />
            </div>

            
            <div style={{ marginBottom: 18 }}>
              <div className="progress-header">
                <div style={{ fontWeight: 600 }}>Task Progress</div>
                <div style={{ color: "#4b5563", fontWeight: 600 }}>
                  {localProgressPercent}%
                </div>
              </div>
              <ProgressBar completed={localCompleted} total={localTotal} />
              <div className="server-progress">
                Server progress: {taskProgressPercent}% (subtasks {taskCompleted}/{taskTotal})
              </div>
            </div>

            
            <div className="assessment-steps-block">
              <h3>Essence of Assessment</h3>
              <div className="assessment-steps">
                {assessmentSteps.map((step, idx) => {
                  const checked = checkedSteps.includes(idx);
                  return (
                    <label
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        cursor: "pointer",
                        userSelect: "none",
                      }}
                    >
                      <div
                        onClick={() => handleCheckboxChange(idx)}
                        role="checkbox"
                        aria-checked={checked}
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            handleCheckboxChange(idx);
                          }
                        }}
                        style={{
                          width: 34,
                          height: 34,
                          borderRadius: "50%",
                          border: "2px solid #ccc",
                          background: checked ? "#27ae60" : "#fff",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          fontSize: 18,
                          transition: "background .15s, border-color .15s",
                        }}
                      >
                        {checked ? "✓" : null}
                      </div>
                      <div
                        style={{
                          fontSize: 16,
                          color: checked ? "#16a34a" : "#111",
                          fontWeight: checked ? 600 : 400,
                        }}
                      >
                        {step}
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>

          
          <aside className="assignment-sidebar">
            <div style={{ marginBottom: 18 }}>
              <h4 style={{ margin: 0 }}>Assigned Assignments</h4>
              <div style={{ marginTop: 12, fontWeight: 700 }}>{task.title}</div>
              <div style={{ color: "#6b7280" }}>{task.category}</div>
            </div>

            <div style={{ marginBottom: 18 }}>
              <h5 style={{ margin: "10px 0" }}>Student Details</h5>
              <div style={{ marginBottom: 6 }}>Name: Dennis Nizkoi</div>
              <div style={{ marginBottom: 6 }}>Class: MIPA 2</div>
              <div>Number: 10</div>
            </div>

            <div style={{ marginBottom: 12 }}>
              <h5 style={{ margin: "10px 0" }}>File Task</h5>
              <div className="file-meta">Last Modified: 1 July 2022</div>
              <div className="file-drop">
                <div style={{ color: "#6b7280" }}>
                  *drag or browse from device*
                </div>
                <input
                  type="file"
                  style={{ marginTop: 10 }}
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      console.log("selected file", file);
                    }
                  }}
                />
              </div>
              <button className="submit-btn">Submit</button>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
