import React from "react";
import MentorCard from "./MentorCard";

export default function RecentCarousel({
  mentors,
  followState,
  onFollowToggle,
}) {
  // simple horizontal scroll container with small layout
  const recent = mentors.slice(0, 4);

  return (
    <section className="recent-section">
      <h2 className="section-title">Recent Mentors</h2>

      <div className="recent-scroll">
        {recent.map((m) => (
          <div key={m.id} className="recent-tile">
            <MentorCard
              mentor={m}
              showBio={false}
              onFollowToggle={onFollowToggle}
              isFollowed={!!followState[m.id]}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
