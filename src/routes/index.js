import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Welcome to Task Manager API",
    routes: ["/api/tasks (GET)", "/api/tasks (POST)"]
  });
});

export default router;
