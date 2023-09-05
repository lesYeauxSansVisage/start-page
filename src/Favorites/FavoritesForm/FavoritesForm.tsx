import { FormEvent, useContext, useEffect, useState } from "react";
import "./FavoritesForm.scss";
import Backdrop from "../../UI/Backdrop";
import { FavoriteType } from "../../interfaces/IFavorite";
import FavoritesContext from "../../context/favorites-context";

type FavoritesFormProps = {
  onClose: () => void;
  editMode: boolean;
  editData: null | FavoriteType;
};

export type FormValues = {
  name: string;
  url: string;
  icon: string;
};

const FavoritesForm = ({ onClose, editMode, editData }: FavoritesFormProps) => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [icon, setIcon] = useState("");

  const favContext = useContext(FavoritesContext);

  const buttonText = editMode ? "Edit Favorite" : "Add Favorite";

  const isValid =
    name.trim().length > 0 && link.trim().length > 0 && icon.trim().length > 0;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      name.trim().length === 0 ||
      link.trim().length === 0 ||
      icon.trim().length == 0
    ) {
      return;
    }

    const formData: FormValues = {
      name: name,
      url: link,
      icon: icon,
    };

    if (editMode && editData) {
      favContext?.editFavorite(editData.id, formData);
    } else {
      favContext?.addFavorite(formData);
    }

    onClose();
  };

  const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setName(input);
  };

  const linkChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setLink(input);
  };

  const iconChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setIcon(input);
  };

  useEffect(() => {
    if (editMode) {
      setName(editData?.name as string);
      setLink(editData?.url as string);
      setIcon(editData?.icon as string);
    }
  }, [editData, editMode]);

  return (
    <Backdrop>
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
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={nameChangeHandler}
          />
          <label htmlFor="name">Name</label>
        </div>
        <div className="favorites-form__control">
          <input
            id="link"
            type="text"
            name="link"
            value={link}
            onChange={linkChangeHandler}
          />
          <label htmlFor="link">Link</label>
        </div>
        <div className="favorites-form__control">
          <input
            id="icon"
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
          {buttonText}
        </button>
      </form>
    </Backdrop>
  );
};

export default FavoritesForm;
