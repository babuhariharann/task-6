import { useState } from "react";
import ListTodo from "./ListTodo";
import { addTodoApi } from "../service/api.js";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const onValueChange = (e) => {
    setTodo(e.target.value);
  };

  const addTodoTask = async () => {
    const response = await addTodoApi(todo);
    const newData = response.data;
    setTodos([...todos, newData]);
    console.log(newData);
    console.log(todos);
    setTodo("");
  };

  const handleTodoDelete = (id) => {
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="todo"
          value={todo}
          onChange={onValueChange}
        />
        <button onClick={addTodoTask}>Add Todo</button>
        {todos.length ? (
          <ListTodo todos={todos} onDeleteTodo={handleTodoDelete} />
        ) : (
          <p>No todo at this moment</p>
        )}
      </div>
    </>
  );
};

export default AddTodo;
