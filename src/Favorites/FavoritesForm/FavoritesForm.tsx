import { FormEvent } from "react";
import "./FavoritesForm.scss";

const FavoritesForm = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="favorites-form">
      <div className="favorites-form__control">
        <input type="text" name="name" />
        <label htmlFor="">Name</label>
      </div>
      <div className="favorites-form__control">
        <input type="text" name="link" />
        <label htmlFor="link">Link</label>
      </div>
      <div className="favorites-form__control">
        <input type="text" name="icon" />
        <label htmlFor="icon">Icon</label>
      </div>
      <button type="submit" className="button">
        Add Favorite
      </button>
    </form>
  );
};

export default FavoritesForm;
