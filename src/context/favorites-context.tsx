import { createContext, useState, useEffect } from "react";
import { FavoriteType } from "../interfaces/IFavorite";

import { FormValues } from "../Favorites/FavoritesForm/FavoritesForm";
import React from "react";

type Props = React.PropsWithChildren;

type FavoritesContextType = {
  favorites: FavoriteType[];
  addFavorite: (formValues: FormValues) => void;
  deleteFavorite: (id: number) => void;
  editFavorite: (id: number, updatedData: FormValues) => void;
};

export const FavoritesContext = createContext<FavoritesContextType | null>(
  null
);

export const FavoritesProvider = (props: Props) => {
  useEffect(() => {
    if (localStorage.getItem("favorites")) {
      console.log("you have some saved favorites");

      const savedFavorites = JSON.parse(
        localStorage.getItem("favorites")!
      ) as FavoriteType[];

      setFavorites(
        savedFavorites.map((favorite) => {
          return { ...favorite, id: Number(favorite.id) };
        })
      );
    }
  }, []);

  const [favorites, setFavorites] = useState<FavoriteType[]>([]);

  useEffect(() => {
    if (favorites.length > 0) {
      localStorage.setItem("favorites", JSON.stringify(favorites));

      console.log("I ran");
    } else {
      localStorage.removeItem("favorites");
    }
  }, [favorites]);

  const addFavorite = (formValues: FormValues) => {
    setFavorites((prevFavorites) => {
      const newFavorite: FavoriteType = {
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
    <FavoritesContext.Provider
      value={{
        favorites: favorites,
        deleteFavorite: deleteFavorite,
        addFavorite: addFavorite,
        editFavorite: editFavorite,
      }}
    >
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;