import styled from "styled-components";
import { breakingPointPhone, colors } from "../../Style";

export const CardContainer = styled.div`
  height: 20rem;
  margin: 1rem 1rem;
  width: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const CardImage = styled.img`
  width: 10rem;
  aspect-ratio: 1;
  margin-bottom: 0.5rem;
  user-drag: none;
`;

export const CardTitle = styled.div`
  align-self: flex-start;
  font-weight: bold;
  font-size: 1.2rem;
  color: ${colors.gray};
  font-family: "Playfair Display";
  margin-bottom: 0.5rem;
`;

export const CardDescription = styled.div`
  align-self: flex-start;
  color: ${colors.gray};
  font-family: "Lato";
  height: 10rem;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
