import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import RecentCarousel from "../components/RecentCarousel";
import MentorCard from "../components/MentorCard";
import HelpCenter from "../components/HelpCenter";

export default function MentorsPage() {
  const [mentors, setMentors] = useState([]); 
  const [search, setSearch] = useState("");
  const [followState, setFollowState] = useState({}); // id: true/false
  const [sort, setSort] = useState("popular");

  // ✅ fetch mentors from backend API
  useEffect(() => {
    fetch("http://localhost:5000/mentors")
      .then((res) => res.json())
      .then((data) => setMentors(data))
      .catch((err) => console.error("Error fetching mentors:", err));
  }, []);

  const onFollowToggle = (id) => {
    setFollowState((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const onCategoryClick = () =>
    alert("Category filter clicked (implement as needed)");
  const onSortClick = () =>
    setSort((s) => (s === "popular" ? "rating" : "popular"));

  // ✅ filtering + sorting
 const filtered = mentors
  .filter((m) => {
    const name = m?.name?.toLowerCase() || "";
    const role = m?.role?.toLowerCase() || "";
    return name.includes(search.toLowerCase()) || role.includes(search.toLowerCase());
  })
  .sort((a, b) =>
    sort === "popular" ? b.tasks - a.tasks : b.rating - a.rating
  );


  return (
    <div className="app-shell">
      <Sidebar />
      <main className="main-area">
        <Topbar
          pageType="mentors"
          search={search}
          setSearch={setSearch}
          onCategoryClick={onCategoryClick}
          onSortClick={onSortClick}
        />

        <div className="content">
          <RecentCarousel
            mentors={mentors}
            followState={followState}
            onFollowToggle={onFollowToggle}
          />

          <section className="mentors-grid-section">
            <h2 className="section-title">Mentors</h2>

            <div className="mentors-grid">
              {filtered.map((m) => (
                <MentorCard
                  key={m.id}
                  mentor={m}
                  onFollowToggle={onFollowToggle}
                  isFollowed={!!followState[m.id]}
                />
              ))}
            </div>
          </section>

          <HelpCenter />
        </div>
      </main>
    </div>
  );
}
