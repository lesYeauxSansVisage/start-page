import ReactDOM from "react-dom";
import { useState, useContext } from "react";

import "./Favorites.scss";

import FavoritesImage from "./FavoritesImage/FavoritesImage";
import FavoriteItem from "./FavoriteItem/FavoriteItem";
import FavoritesForm from "./FavoritesForm/FavoritesForm";

import { FavoriteType } from "../../interfaces/FavoriteType";

import FavoritesContext from "../../context/favorites-context";

function Favorites() {
  const favContext = useContext(FavoritesContext);

  const [editMode, setEditMode] = useState(false);

  let editData: FavoriteType | null = null;

  const [formVisibility, setFormVisibility] = useState(false);

  const [editId, setEditId] = useState(-1);

  const showAddButton = favContext.favorites.length < 10;

  if (editMode) {
    editData = favContext?.favorites.find(
      (favorite: FavoriteType) => favorite.id === editId
    ) as FavoriteType;
  }

  const closeFormHandler = () => {
    setFormVisibility(false);

    if (editMode) {
      setEditMode(false);
      setEditId(-1);
    }
  };

  const openFormHandler = () => {
    setFormVisibility(true);
  };

  const editFavoriteHandler = (id: number) => {
    setEditMode(true);
    setEditId(id);

    setFormVisibility(true);
  };

  return (
    <div className="favorites">
      {formVisibility &&
        ReactDOM.createPortal(
          <FavoritesForm
            onClose={closeFormHandler}
            editMode={editMode}
            editData={editData}
          />,
          document.body
        )}
      <FavoritesImage></FavoritesImage>
      <div className="favorites__items">
        {favContext?.favorites.map((favorites: FavoriteType) => {
          return (
            <FavoriteItem
              key={favorites.id}
              id={favorites.id}
              name={favorites.name}
              url={favorites.url}
              icon={favorites.icon}
              onEdit={editFavoriteHandler}
            ></FavoriteItem>
          );
        })}
        {showAddButton && (
          <button
            className="button favorites__add-button"
            onClick={openFormHandler}
          >
            <i className="fa-solid fa-plus"></i>
            <span>Adicionar</span>
          </button>
        )}
      </div>
    </div>
  );
}
export default Favorites;
