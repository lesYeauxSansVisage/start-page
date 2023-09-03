import "./FavoriteActions.scss";

type FavoriteActionsProps = {
  onEdit: () => void;
  onClose: () => void;
  onDelete: () => void;
};

const FavoriteActions = ({
  onEdit,
  onClose,
  onDelete,
}: FavoriteActionsProps) => {
  const editFavoriteHandler = () => {
    onEdit();
    onClose();
  };

  const deleteFavoriteHandler = () => {
    onDelete();
    onClose();
  };

  return (
    <div className="favorite__actions">
      <button
        className="favorite__edit-button button"
        onClick={editFavoriteHandler}
      >
        Edit
      </button>
      <button
        className="favorite__delete-button button"
        onClick={deleteFavoriteHandler}
      >
        Delete
      </button>
      <button className="favorite__cancel-button button" onClick={onClose}>
        Cancel
      </button>
    </div>
  );
};
export default FavoriteActions;
