import { FormEvent, useEffect, useState } from "react";
import "./FavoritesForm.scss";
import { Favorite } from "../Favorites";

type FavoritesFormProps = {
  onClose: () => void;
  onAdd: (formValues: FormValues) => void;
  editMode: boolean;
  editData: null | Favorite;
};

export type FormValues = {
  name: string;
  url: string;
  icon: string;
};

const FavoritesForm = ({
  onClose,
  onAdd,
  editMode,
  editData,
}: FavoritesFormProps) => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [icon, setIcon] = useState("");

  let buttonText = editMode ? "Edit Favorite" : "Add Favorite";

  const isValid = name.length > 0 && link.length > 0 && icon.length > 0;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name.length === 0 || link.length === 0 || icon.length == 0) {
      return;
    }

    const formData: FormValues = {
      name: name,
      url: link,
      icon: icon,
    };

    if (editMode) {
      console.log("Form was submitted with edit mode on!");
    } else {
      console.log("Form was submitted with normal mode (add)");

      onAdd(formData);
    }

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

  useEffect(() => {
    if (editMode) {
      setName(editData?.name as string);
      setLink(editData?.url as string);
      setIcon(editData?.icon as string);
    }
  }, []);

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
        {buttonText}
      </button>
    </form>
  );
};

export default FavoritesForm;
