import { useState } from "react";
import "./Todos.scss";
import TodosList from "./TodosList";
import { TodoType } from "../../interfaces/TodoType";

const DUMMY_TODOS: TodoType[] = [
  { id: 1, text: "Make chores", completed: true, priority: "low" },
  { id: 2, text: "Read book", completed: false, priority: "medium" },
  { id: 3, text: "Make bed", completed: true, priority: "high" },
  { id: 4, text: "Wash dishes", completed: false, priority: "low" },
  { id: 5, text: "Clean houses", completed: false, priority: "high" },
];

const Todos = () => {
  const [todos, setTodos] = useState<TodoType[]>(DUMMY_TODOS);

  return (
    <div className="todos">
      <form>
        <input
          type="text"
          placeholder="Write a todo..."
          className="todos__input"
        />
      </form>

      <TodosList todos={todos} />
    </div>
  );
};

export default Todos;
