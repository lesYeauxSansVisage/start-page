import "./TodoItem.scss";

const TodoItem = () => {
  return (
    <li className="todo">
      <span className="todo__text">Remember to not remember anything</span>
      <button className="todo__delete-button">
        <i className="fa-solid fa-eraser"></i>
      </button>
    </li>
  );
};
export default TodoItem;
