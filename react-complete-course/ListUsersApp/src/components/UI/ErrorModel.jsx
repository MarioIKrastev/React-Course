import React from "react";
import ReactDom from "react-dom";

import Card from "./Card";
import Button from "./Button ";
import styles from "./ErrorModel.module.css";

const BackDrop = () => {
  return <div className={styles.backdrop} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onConfirmError}>Дообре</Button>
      </footer>
    </Card>
  );
};

const ErrorModel = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <BackDrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirmError={props.onConfirmError}
        />,

        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModel;
