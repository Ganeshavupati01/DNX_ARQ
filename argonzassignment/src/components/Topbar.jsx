import React, { useState } from "react";
import Sidebar from "./Sidebar";

export default function Topbar({
  search,
  setSearch,
  onCategoryClick,
  onSortClick,
  pageType = "mentors",
}) {
  const isMentors = pageType === "mentors";
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);
  return (
    <>
      <header className="topbar">
        <div className="topbar-left">
          <h1 className="page-title">{isMentors ? "Explore Mentors" : "Explore Task"}</h1>
          <div className="search-wrapper">
            <div className="hamburger" onClick={handleSidebar}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <input
              className="search-input"
              placeholder={isMentors ? "Search Mentors" : "Search Task"}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <span className="material-icons search-icon">search</span>
          </div>
        </div>

        <div className="topbar-right">
          <button className="chip clickable" onClick={onCategoryClick}>
            <span className="material-icons">grid_view</span> Category
          </button>
          <button className="chip clickable" onClick={onSortClick}>
            <span className="material-icons">tune</span> Sort By : Popular
          </button>

          <div className="profile">
            <img src="/assets/avatar1.jpg" alt="profile" />
          </div>
        </div>
      </header>
      {/* Sidebar overlay for mobile */}
      {sidebarOpen && (
        <div className="sidebar-mobile-overlay" onClick={closeSidebar}>
          <div className="sidebar-mobile" onClick={e => e.stopPropagation()}>
            <Sidebar />
          </div>
        </div>
      )}
    </>
  );
}
