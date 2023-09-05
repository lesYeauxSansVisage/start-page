import { PropsWithChildren } from "react";
import "./Backdrop.scss";

const Backdrop = (props: PropsWithChildren) => {
  return <div className="backdrop">{props.children}</div>;
};
export default Backdrop;
