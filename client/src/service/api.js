import axios from "axios";

const URL = "http://localhost:8000";

export const addTodoApi = async (todo) => {
  try {
    // console.log(todo);
    const response = await axios.post(`${URL}/`, { todoValue: todo });
    // console.log(response.data);
    return response;
  } catch (error) {
    console.log("Error while add todos to the server", error);
  }
};

export const getTodoIdApi = async (id) => {
  try {
    console.log(id);
    const response = await axios.get(`${URL}/todos/${id}`);
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log("Error while get todo using id : ", err);
  }
};

export const deleteTodoApi = async (id) => {
  try {
    return await axios.delete(`${URL}/delete/${id}`);
  } catch (err) {
    console.log("Error while delete todo using id : ", err);
  }
};
