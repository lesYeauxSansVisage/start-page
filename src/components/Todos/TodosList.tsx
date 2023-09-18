import TodoItem from "./TodoItem";
import "./TodosList.scss";

const TodosList = () => {
  return (
    <ul className="todos-list">
      <TodoItem />
    </ul>
  );
};
export default TodosList;
