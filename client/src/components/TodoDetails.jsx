const TodoDetails = ({ todo }) => {
  return (
    <div>
      <h2>Todo Details</h2>
      <p>ID: {todo._id}</p>
      <p>Value: {todo.todoValue}</p>
      {/* Render other details of the todo */}
    </div>
  );
};

export default TodoDetails;
