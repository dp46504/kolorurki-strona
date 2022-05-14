import React from "react";
import ReactDOM from "react-dom";
import {
  ModalWrapper,
  ActivityType,
  ActivityDate,
  NameInput,
  SurnameInput,
  TelephoneInput,
  Label,
  SubmitButton,
} from "./Style";

function ModalForm(props) {
  if (!props.isOpen) return null;
  return ReactDOM.createPortal(
    <ModalWrapper>
      <ActivityType>{props.activity.type}</ActivityType>
      <ActivityDate>{`${props.activity.date.getDate()} / ${props.activity.date.getMonth()} / ${props.activity.date.getFullYear()} ${
        props.activity.start
      }:00-${props.activity.end}:00`}</ActivityDate>
      <Label>Imię</Label>
      <NameInput
        onChange={(e) => {
          props.nameSetter(e.target.value);
        }}
      ></NameInput>

      <Label>Nazwisko</Label>
      <SurnameInput
        onChange={(e) => {
          props.surnameSetter(e.target.value);
        }}
      ></SurnameInput>

      <Label>Telefon</Label>
      <TelephoneInput
        onChange={(e) => {
          props.telephoneSetter(e.target.value);
        }}
      ></TelephoneInput>

      <SubmitButton
        onClick={() => {
          //   TODO SEND TO BACKEND INFO

          // Closing Modal
          props.isOpenSetter((lastValue) => !lastValue);
        }}
      >
        Zapisz się
      </SubmitButton>
      <SubmitButton
        onClick={() => {
          props.isOpenSetter((lastValue) => !lastValue);
        }}
      >
        Wróć
      </SubmitButton>
    </ModalWrapper>,
    document.getElementById("modal")
  );
}

export default ModalForm;
