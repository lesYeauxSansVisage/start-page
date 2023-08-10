import { FormEvent, useState } from "react";
import "./FavoritesForm.scss";
import { Favorite } from "../Favorites";

type FavoritesFormProps = {
  onClose: () => void;
  onAdd: (favorite: Favorite) => void;
};

const FavoritesForm = ({ onClose, onAdd }: FavoritesFormProps) => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [icon, setIcon] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name.length === 0 || link.length === 0 || icon.length == 0) {
      return;
    }

    const favorite = {
      name: name,
      url: link,
      icon: icon,
    };

    onAdd(favorite);

    onClose();
  };

  const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.trim();
    setName(input);
  };

  const linkChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.trim();
    setLink(input);
  };

  const iconChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setIcon(input);
  };

  const isValid = name.length > 0 && link.length > 0 && icon.length > 0;

  return (
    <form onSubmit={handleSubmit} className="favorites-form">
      <button
        type="button"
        className="button favorites-form__close-button"
        onClick={onClose}
      >
        <i className="fa-solid fa-x"></i>
      </button>
      <div className="favorites-form__control">
        <input
          type="text"
          name="name"
          value={name}
          onChange={nameChangeHandler}
        />
        <label htmlFor="">Name</label>
      </div>
      <div className="favorites-form__control">
        <input
          type="text"
          name="link"
          value={link}
          onChange={linkChangeHandler}
        />
        <label htmlFor="link">Link</label>
      </div>
      <div className="favorites-form__control">
        <input
          type="text"
          name="icon"
          value={icon}
          onChange={iconChangeHandler}
        />
        <label htmlFor="icon">Icon</label>
      </div>
      <button
        type="submit"
        className="button favorites-form__button-submit"
        disabled={!isValid}
      >
        Add Favorite
      </button>
    </form>
  );
};

export default FavoritesForm;
