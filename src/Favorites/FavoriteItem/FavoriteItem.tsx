import { useState } from "react";
import "./FavoriteItem.scss";
import FavoriteActions from "./FavoriteActions";

type FavoriteItemProps = {
  id: number;
  name: string;
  icon: string;
  url: string;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
};

function FavoriteItem({
  id,
  name,
  icon,
  url,
  onDelete,
  onEdit,
}: FavoriteItemProps) {
  const [openActions, setOpenActions] = useState(false);

  const openActionsHandler = () => {
    setOpenActions(true);
  };

  const editHandler = () => {
    onEdit(id);
  };

  const closeActionsHandler = () => {
    setOpenActions(false);
  };

  const deleteHandler = () => {
    onDelete(id);
  };

  return (
    <div className="favorite__item">
      {openActions && (
        <FavoriteActions
          onEdit={editHandler}
          onClose={closeActionsHandler}
          onDelete={deleteHandler}
        />
      )}
      <button className="item__button" onClick={openActionsHandler}>
        <i className="fa-solid fa-ellipsis-vertical"></i>
      </button>
      <a className="item__link" href={url}>
        <i className={icon + " item__icon"}></i>
        <span className="item__name">{name}</span>
      </a>
    </div>
  );
}
export default FavoriteItem;
