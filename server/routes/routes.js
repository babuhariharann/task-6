import express from "express";

import {
  addTodo,
  getTodo,
  deleteTodo,
} from "../controller.js/todo-controller.js";

const router = express.Router();

router.post("/", addTodo);
router.get("/todos/:id", getTodo);
router.delete("/delete/:id", deleteTodo);

export default router;
