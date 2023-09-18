import { TodoType } from "../../interfaces/TodoType";
import TodoItem from "./TodoItem";
import "./TodosList.scss";

type TodosListProps = {
  todos: TodoType[];
};

const TodosList = (props: TodosListProps) => {
  return (
    <ul className="todos-list">
      {props.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodosList;
