import addTodoDB from "../model/todos.js";

export const addTodo = async (req, res) => {
  const todoValue = req.body.todoValue;
  const newTodo = new addTodoDB({ todoValue });
  try {
    await newTodo.save();
    console.log(newTodo);
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
  newTodo.save();
  // addTodoDB
};

export const getTodo = async (req, res) => {
  const id = req.params.id;
  console.log(id);

  try {
    const findTodo = await addTodoDB.findById(id);
    if (!findTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    console.log(findTodo);
    res.status(200).json(findTodo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteTodo = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    await addTodoDB.deleteOne({ _id: id });
    res.status(201).json({ id: id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
