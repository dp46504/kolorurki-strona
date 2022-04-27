import styled from "styled-components";
import { colors } from "../../Style";

export const LogoBox = styled.div`
  position: relative;
  display: block;
  margin: 0 auto;
  margin-top: 3rem;
  width: 25rem;
  aspect-ratio: 2;
  font-size: 0.5rem;
  font-family: "Lato";
`;

export const LogoBall = styled.div`
  position: absolute;
  top: 6.6em;
  left: 5em;
  width: 14em;
  height: 14em;
  border-radius: 50%;
  background-color: #ca837e;
`;

export const LogoLine = styled.div`
  width: 100%;
  position: absolute;
  height: 0.2em;
  background-color: ${colors.gray};
  left: 0;
  top: 11em;
`;

export const LogoUpperText = styled.div`
  position: absolute;
  font-size: 4.5em;
  color: ${colors.gray};
  top: 1.3em;
  left: 4.7em;
  font-family: "Playfair Display";
`;

export const LogoBottomText = styled.div`
  position: absolute;
  font-size: 2em;
  color: ${colors.gray};
  font-weight: 300;

  top: 6em;
  left: 11em;
`;
