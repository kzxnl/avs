import fs from "fs";
import path from "path";

const dataPath = path.resolve("data/data.json");

// GET /api/tasks
export const getTasks = (req, res) => {
  const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
  res.json({
    success: true,
    tasks: data,
  });
};

// POST /api/tasks
export const addTask = (req, res) => {
  const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
  const { title, priority } = req.body;

  const newTask = {
    id: data.length + 1,
    title: title,
    priority: priority,
  };

  data.push(newTask);
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

  res.json({
    success: true,
    message: "Task added",
    data: newTask,
  });
};
