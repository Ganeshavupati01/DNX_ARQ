import React from "react";
import { Routes, Route } from "react-router-dom";
import MentorsPage from "./pages/MentorsPage";
import TaskPage from "./pages/TaskPage";
import DetailedTask from "./pages/DetailedTask";

export default function App() {
  return (
    <Routes>
      <Route path="/mentors" element={<MentorsPage />} />
      <Route path="/" element={<TaskPage />} />
  <Route path="/tasks/:id" element={<DetailedTask />} />
    </Routes>
  );
}
