import FavoritesImage from "./FavoritesImage/FavoritesImage";
import "./Favorites.scss";
import FavoriteItem from "./FavoriteItem/FavoriteItem";
import { useState } from "react";
import FavoritesForm, { FormValues } from "./FavoritesForm/FavoritesForm";

export type Favorite = {
  id: number;
  name: string;
  url: string;
  icon: string;
};

const testFav: Favorite[] = [
  {
    id: 1,
    name: "rf 301",
    url: "http://10.0.1.1/login.html",
    icon: "fa-solid fa-wifi",
  },
  {
    id: 2,
    name: "rf 302",
    url: "http://10.0.1.1/login.html",
    icon: "fa-solid fa-wifi",
  },
  {
    id: 3,
    name: "rf 303",
    url: "http://10.0.1.1/login.html",
    icon: "fa-solid fa-wifi",
  },
  {
    id: 4,
    name: "rf 304",
    url: "http://10.0.1.1/login.html",
    icon: "fa-solid fa-wifi",
  },
  {
    id: 5,
    name: "rf 305",
    url: "http://10.0.1.1/login.html",
    icon: "fa-solid fa-wifi",
  },
  {
    id: 6,
    name: "rf 306",
    url: "http://10.0.1.1/login.html",
    icon: "fa-solid fa-wifi",
  },
  {
    id: 7,
    name: "rf 307",
    url: "http://10.0.1.1/login.html",
    icon: "fa-solid fa-wifi",
  },
  {
    id: 8,
    name: "rf 308",
    url: "http://10.0.1.1/login.html",
    icon: "fa-solid fa-wifi",
  },
  {
    id: 9,
    name: "rf 309",
    url: "http://10.0.1.1/login.html",
    icon: "fa-solid fa-wifi",
  },
];

function Favorites() {
  const [favorites, setFavorites] = useState<Favorite[]>(testFav);

  const [editMode, setEditMode] = useState(false);

  let editData: Favorite | null = null;

  const [formVisibility, setFormVisibility] = useState(false);

  const [editId, setEditId] = useState(-1);

  const showAddButton = favorites.length < 10;

  if (editMode) {
    editData = favorites.find((favorite) => favorite.id === editId) as Favorite;
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

  const addFavorite = (formValues: FormValues) => {
    setFavorites((prevFavorites) => {
      const newFavorite: Favorite = {
        id: favorites.length > 0 ? favorites[favorites.length - 1].id + 1 : 1,
        name: formValues.name,
        url: formValues.url,
        icon: formValues.icon,
      };

      return [...prevFavorites, newFavorite];
    });
  };

  const deleteFavorite = (id: number) => {
    setFavorites((prevFavorites) => {
      return prevFavorites.filter((favorite) => favorite.id !== id);
    });
  };

  const editFavoriteHandler = (id: number) => {
    setEditMode(true);
    setEditId(id);

    setFormVisibility(true);
  };

  const editFavorite = (id: number, updatedData: FormValues) => {
    setFavorites((prevFavorites) => {
      return prevFavorites.map((favorite) => {
        if (favorite.id == id) {
          return {
            ...favorite,
            name: updatedData.name,
            url: updatedData.url,
            icon: updatedData.icon,
          };
        }

        return favorite;
      });
    });
  };

  return (
    <div className="favorites">
      {formVisibility && (
        <FavoritesForm
          onClose={closeFormHandler}
          onAdd={addFavorite}
          editMode={editMode}
          editData={editData}
          onEdit={editFavorite}
        />
      )}
      <FavoritesImage></FavoritesImage>
      <div className="favorites__items">
        {favorites.map((favorites) => {
          return (
            <FavoriteItem
              key={favorites.id}
              id={favorites.id}
              name={favorites.name}
              url={favorites.url}
              icon={favorites.icon}
              onDelete={deleteFavorite}
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
