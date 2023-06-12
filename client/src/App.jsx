import { Routes, Route } from "react-router-dom";

import AddTodo from "./components/AddTodo";
import PageNotFound from "./components/PageNotFound";
import TodoDetails from "./components/TodoDetails";

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<AddTodo />} />
          <Route path="/todos/:id" element={<TodoDetails />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
