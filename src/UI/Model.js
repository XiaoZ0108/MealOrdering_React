import classes from "./Model.module.css";
import ReactDom from "react-dom";
import React from "react";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.hideCart}></div>;
};
const Overlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Model = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop hideCart={props.hideCart} />,
        document.getElementById("overlays")
      )}
      {ReactDom.createPortal(
        <Overlay>{props.children}</Overlay>,
        document.getElementById("overlays")
      )}
    </React.Fragment>
  );
};

export default Model;
