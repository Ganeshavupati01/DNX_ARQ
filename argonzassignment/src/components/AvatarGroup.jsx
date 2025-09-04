import React from "react";
import "../styles/AvatarGroup.css";

export default function AvatarGroup({ avatars = [] }) {
  return (
    <div className="avatar-group">
      {avatars.slice(0, 5).map((a, i) => (
        <img key={i} src={a} alt={`avatar-${i}`} className="avatar" />
      ))}
      {avatars.length > 5 && (
        <div className="avatar extra">+{avatars.length - 5}</div>
      )}
    </div>
  );
}
