import { useEffect, useState } from "react";
import { getTodoIdApi, deleteTodoApi } from "../service/api.js";

const ListTodo = ({ todos, onDeleteTodo }) => {
  const [selectedTodo, setSelectedTodo] = useState(null);

  const getTodo = async (id) => {
    try {
      const response = await getTodoIdApi(id);
      const todo = response;
      console.log(todo);
      console.log("Retrieved Todo:", todo);
      setSelectedTodo(todo);
    } catch (error) {
      console.error("Error getting todo:", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await deleteTodoApi(id);
      if (selectedTodo && selectedTodo._id === id) {
        setSelectedTodo(null);
      }
      // Filter out the deleted todo from the todos array
      const updatedTodos = todos.filter((todo) => todo._id !== id);
      onDeleteTodo(id, updatedTodos);
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const renderTodoDetails = () => {
    if (selectedTodo) {
      return (
        <div>
          <h1>Todo Details</h1>
          <p>Id: {selectedTodo._id}</p>
          <p>Todo: {selectedTodo.todoValue}</p>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Todo Details</h1>
          <p>No todo selected</p>
        </div>
      );
    }
  };

  return (
    <div>
      {renderTodoDetails()}
      {todos.map((item) => (
        <div key={item._id}>
          <p>{item.todoValue}</p>
          <div>
            <button onClick={() => getTodo(item._id)}>Get Todo</button>
            <button onClick={() => deleteTodo(item._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListTodo;
