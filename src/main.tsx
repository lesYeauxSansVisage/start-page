import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { FavoritesProvider } from "./context/favorites-context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <FavoritesProvider>
    <App />
  </FavoritesProvider>
);
