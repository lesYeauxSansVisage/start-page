import "./App.scss";
import Favorites from "./Favorites/Favorites";
import { FavoritesProvider } from "./context/favorites-context";

function App() {
  return (
    <div className="container">
      <FavoritesProvider>
        <Favorites></Favorites>
      </FavoritesProvider>
    </div>
  );
}

export default App;
