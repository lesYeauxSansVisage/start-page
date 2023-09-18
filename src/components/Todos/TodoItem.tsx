import { TodoType } from "../../interfaces/TodoType";
import "./TodoItem.scss";

type TodoItemProps = {
  todo: TodoType;
};

const TodoItem = (props: TodoItemProps) => {
  const deleteHandler = () => {
    console.log("You clicked on the todo with the id: " + props.todo.id);
  };

  return (
    <li className="todo">
      <span className="todo__text">{props.todo.text}</span>
      <button className="todo__delete-button" onClick={deleteHandler}>
        <i className="fa-solid fa-eraser"></i>
      </button>
    </li>
  );
};
export default TodoItem;
