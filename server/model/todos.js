import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
  todoValue: String,
});

const addTodoDB = mongoose.model("todoList", todoSchema);
export default addTodoDB;
