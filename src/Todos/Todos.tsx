import { useState } from "react";
import "./Todos.scss";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div className="todos">
      <input type="text" placeholder="Write a " />
    </div>
  );
};

export default Todos;
