import { useState } from "react";
import "./Todos.scss";

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

      <ul className="todos__list"></ul>
    </div>
  );
};

export default Todos;
