import "./App.scss";
import Favorites from "./Favorites/Favorites";
import Todos from "./Todos/Todos";
import { FavoritesProvider } from "./context/favorites-context";

function App() {
  return (
    <div className="container">
      <FavoritesProvider>
        <Favorites />
      </FavoritesProvider>

      <Todos />
    </div>
  );
}

export default App;
