import "./Backdrop.scss";

type BackdropProps = {
  onClick: () => void;
};

const Backdrop = (props: BackdropProps) => {
  const clickHandler = () => {
    props.onClick();
  };

  return <div className="backdrop" onClick={clickHandler}></div>;
};
export default Backdrop;
