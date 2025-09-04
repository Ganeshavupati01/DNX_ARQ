import React, { useRef } from "react";
import TaskCard from "./TaskCard";
import "../styles/NewTask.css";

export default function NewTask({ tasks }) {
  const scrollRef = useRef(null);
  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.clientWidth;
    scrollRef.current.scrollBy({
      left: dir === "right" ? width * 0.8 : -width * 0.8,
      behavior: "smooth",
    });
  };
  return (
    <div className="task-section">
      <div className="task-section-header">
        <h2>New Task</h2>
        <div className="arrow-buttons">
          <button type="button" aria-label="Scroll Left" onClick={() => scroll("left")}>‹</button>
          <button type="button" aria-label="Scroll Right" onClick={() => scroll("right")}>›</button>
        </div>
      </div>
      <div className="task-carousel" ref={scrollRef}>
        {(Array.isArray(tasks) ? tasks : []).map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
