import FavoritesImage from "./FavoritesImage/FavoritesImage";
import "./Favorites.scss";
import FavoriteItem from "./FavoriteItem/FavoriteItem";
import { useState } from "react";

export type Favorite = {
  name: string;
  url: string;
  icon: string;
};

const testFav = {
  name: "rf 301k",
  url: "http://10.0.1.1/login.html",
  icon: "fa-solid fa-wifi",
};

function Favorites() {
  const [favorites, setFavorites] = useState<Favorite[]>([]);


  return (
    <div className="favorites">
      <FavoritesImage></FavoritesImage>
      <div className="favorites__items">
        {favorites.map((favorites) => {
          return (
            <FavoriteItem
              name={favorites.name}
              link={favorites.url}
              icon={favorites.icon}
            ></FavoriteItem>
          );
        })}
        <FavoriteItem
          name="adicionar"
          link="http://10.0.1.1/login.html"
          icon="fa-solid fa-plus"
        ></FavoriteItem>
      </div>
    </div>
  );
}
export default Favorites;
