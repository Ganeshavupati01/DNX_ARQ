import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error("❌ MongoDB Error:", err));

const TaskSchema = new mongoose.Schema({}, { strict: false });
const MentorSchema = new mongoose.Schema({}, { strict: false });

const Task = mongoose.model("Task", TaskSchema, "tasks");
const Mentor = mongoose.model("Mentor", MentorSchema, "mentors");

app.get("/tasks", async (req, res) => {
  try {
  const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    console.error("Error fetching tasks:", err);
    res.status(500).json({ error: err.message });
  }
});

app.get("/mentors", async (req, res) => {
  try {
  const mentors = await Mentor.find();
    res.json(mentors);
  } catch (err) {
    console.error("Error fetching mentors:", err);
    res.status(500).json({ error: err.message });
  }
});

app.put('/tasks/:id/progress', async (req, res) => {
  try {
    const { completed, total } = req.body;
    const updated = await Task.findByIdAndUpdate(
      req.params.id,
      { $set: { 'subtasks.completed': completed, 'subtasks.total': total } },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    console.error('Error updating progress:', err);
    res.status(500).json({ error: err.message });
  }
});

app.get("/", (req, res) => {
  res.send("Backend API is running.");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
