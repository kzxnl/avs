import express from "express";
import { getTasks, addTask } from "../controllers/apiController.js";
import { validateTask } from "../middlewares/validator.js";

const router = express.Router();

// GET all tasks
router.get("/tasks", getTasks);

// POST add task
router.post("/tasks", validateTask, addTask);

export default router;
