import "./Backdrop.scss";

type BackdropProps = {
  show: boolean;
};

const Backdrop = ({ show }: BackdropProps) => {
  return show && <div className="backdrop"></div>;
};
export default Backdrop;
