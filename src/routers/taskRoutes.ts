import { Hono } from "hono";
import {
  createTask,
  getTasksByMail,
  updateTask,
  deleteTask,
} from "../controllers/taskController";

const taskRoutes = new Hono();

taskRoutes.post("/", createTask);
taskRoutes.get("/:mail", getTasksByMail);
taskRoutes.put("/:id", updateTask);
taskRoutes.delete("/:id", deleteTask);

export default taskRoutes;