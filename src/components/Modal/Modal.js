import React from "react";
import ReactDOM from "react-dom";
import { Container, Image } from "./Style";

function Modal(props) {
  return ReactDOM.createPortal(
    <Container
      onClick={() => {
        props.setter(false);
      }}
    >
      <Image src={props.imageUrl}></Image>
    </Container>,
    document.getElementById("modal")
  );
}

export default Modal;
