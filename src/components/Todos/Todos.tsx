import { useState } from "react";
import "./Todos.scss";
import TodosList from "./TodosList";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div className="todos">
      <form>
        <input
          type="text"
          placeholder="Write a todo..."
          className="todos__input"
        />
      </form>

      <TodosList />
    </div>
  );
};

export default Todos;
