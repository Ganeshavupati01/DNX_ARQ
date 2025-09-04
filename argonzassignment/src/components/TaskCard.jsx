import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import AvatarGroup from "./AvatarGroup";
import "../styles/TaskCard.css";

export default function TaskCard({ task }) {
  const { image, title, category, subtasks, timeLabel, participants } = task;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/tasks/${task.id}`, { state: { task } });
  };

  return (
    <div className="task-card" onClick={handleClick} style={{ cursor: "pointer" }}>
      <div className="task-image">
        <img src={image} alt={title} />
      </div>
      <h3 className="task-title">{title}</h3>
      <div className="task-category">{category}</div>

      <div className="task-progress">
        Progress <span>{Math.round((subtasks.completed / subtasks.total) * 100)}%</span>
      </div>
      <ProgressBar completed={subtasks.completed} total={subtasks.total} />

      <div className="task-footer">
        <div className="task-time">
          <span className="clock-icon">⏰</span> {timeLabel}
        </div>
        <AvatarGroup avatars={participants} />
      </div>
    </div>
  );
}
