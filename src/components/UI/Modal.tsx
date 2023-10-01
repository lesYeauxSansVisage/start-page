import { ReactNode } from "react";
import "./Modal.scss";

type BackdropProps = {
  onClick: () => void;
};

const Backdrop = (props: BackdropProps) => {
  const clickHandler = () => {
    props.onClick();
  };

  return <div className="backdrop" onClick={clickHandler}></div>;
};

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
};

const Modal = (props: ModalProps) => {
  return (
    <>
      <Backdrop onClick={props.onClose} />
      {props.children}
    </>
  );
};

export default Modal;
