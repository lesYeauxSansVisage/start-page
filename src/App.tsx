import "./App.scss";
import Favorites from "./components/Favorites/Favorites";
import { FavoritesProvider } from "./context/favorites-context";

function App() {
  return (
    <div className="container">
      <FavoritesProvider>
        <Favorites />
      </FavoritesProvider>
    </div>
  );
}

export default App;
