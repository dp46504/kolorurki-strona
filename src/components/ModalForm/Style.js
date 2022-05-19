import styled from "styled-components";
import { colors } from "../../Style";

export const ModalWrapper = styled.div`
  width: 100vw;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: ${colors.black50};
  z-index: 10000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0 25vw;
  font-family: "Lato";
  text-align: center;
  backdrop-filter: blur(5px);
  color: ${colors.ecrue};
`;

export const Label = styled.label`
  width: 100%;
  font-size: 1.5rem;
  margin-top: 3rem;
`;

export const ActivityType = styled.div`
  width: 100%;
  font-size: 1.5rem;
`;

export const ActivityDate = styled.div`
  width: 100%;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  height: 2rem;
  outline: none;
  border: none;
  background: none;
  text-align: center;
  color: ${colors.ecrue};
  font-size: 1rem;
  border-bottom: 0.1rem solid ${colors.ecrue};
  border-radius: 0.4rem;
  transition: all 250ms;

  &:focus {
    transform: scale(1.05);
    border-bottom: 0.3rem solid ${colors.ecrue25};
  }
`;

export const NameInput = styled(Input)``;

export const SurnameInput = styled(Input)``;

export const TelephoneInput = styled(Input)``;

export const SubmitButton = styled.button`
  border: none;
  width: 100%;
  padding: 1rem;
  background: none;
  color: ${colors.ecrue};
  font-size: 1.5rem;
  margin-top: 2rem;
  border: 0.1rem solid ${colors.ecrue};
  transition: all 250ms;
  cursor: pointer;
  &:hover {
    background: ${colors.ecrue};
    color: ${colors.black};
    transform: scale(1.05);
  }
`;
