import styled from "styled-components";
import { colors } from "../../Style";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.black50};
  display: grid;
  place-items: center;
  z-index: 3000;
`;

export const Image = styled.img`
  width: 70%;
`;
