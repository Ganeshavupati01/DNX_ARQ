import React from "react";

function Avatar({ src, name }) {
  if (src) return <img src={src} className="avatar-img" alt={name} />;
  // fallback initials
  const initials = (name || "U")
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return <div className="avatar-fallback">{initials}</div>;
}

export default function MentorCard({
  mentor,
  showBio = true,
  onFollowToggle,
  isFollowed,
}) {
  return (
    <div className="mentor-card">
      <div className="mentor-card-top">
        <div className="mentor-left">
          <Avatar src={mentor.avatar} name={mentor.name} />
          <div className="mentor-meta">
            <div className="mentor-name">{mentor.name}</div>
            <div className="mentor-role">{mentor.role}</div>
          </div>
        </div>

        <div className="mentor-actions">
          <button
            className="follow-link clickable"
            onClick={() => onFollowToggle(mentor.id)}
          >
            {isFollowed ? "Followed" : "+ Follow"}
          </button>
        </div>
      </div>

      {showBio && <p className="mentor-bio">{mentor.bio}</p>}

      <div className="mentor-stats">
        <div className="stat">
          <span className="material-icons">task_alt</span>
          <span>{mentor.tasks} Task</span>
        </div>
        <div className="stat">
          <span className="material-icons star">star</span>
          <span>
            {mentor.rating.toFixed(1)} ({mentor.reviews} Reviews)
          </span>
        </div>
      </div>
    </div>
  );
}
