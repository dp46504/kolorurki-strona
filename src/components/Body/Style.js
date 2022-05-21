import styled from "styled-components";
import { breakingPointPhone, colors } from "../../Style";

const CardWidth = "15rem";

export const CardContainer = styled.div`
  height: fit-content;
  width: ${CardWidth};
  min-width: ${CardWidth};
  max-width: ${CardWidth};
  margin: 0.5rem 0.5rem;
  display: grid;
  scroll-snap-align: center;

  grid-template-areas:
    "photo"
    "title"
    "description"
    "description";
`;

export const CardImage = styled.div`
  grid-area: photo;
  width: 100%;
  aspect-ratio: 1;
  background-image: ${(props) => {
    return `url(${props.image})`;
  }};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  margin-bottom: 0.5rem;
  user-drag: none;
`;

export const CardTitle = styled.div`
  grid-area: title;
  align-self: flex-start;
  font-weight: bold;
  font-size: 1.2rem;
  color: ${colors.gray};
  font-family: "Playfair Display";
  margin-bottom: 0.5rem;
`;

export const CardDescription = styled.div`
  grid-area: description;
  align-self: flex-start;
  color: ${colors.gray};
  font-family: "Lato";
  font-size: 0.9em;
  height: 7rem;
  overflow-y: hidden;
  overflow-wrap: break-word;

  &:hover {
    overflow-y: scroll;
  }

  &::-webkit-scrollbar {
    transition: all 250ms;
    width: 0.2rem;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent; /* color of the scroll thumb */
  }

  &::-webkit-scrollbar-thumb {
    background: ${colors.lightGray};
    border-radius: 0.1rem; /* roundness of the scroll thumb */
  }
`;

export const PersonCardDescription = styled.div`
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  font-family: "Lato";
  width: 100%;
  height: 100%;
  background-color: ${colors.ecrue75};
  overflow-y: scroll;
  padding: 1rem;
  transition: all 250ms;

  &::-webkit-scrollbar {
    transition: all 250ms;
    width: 0.2rem;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent; /* color of the scroll thumb */
  }

  &::-webkit-scrollbar-thumb {
    background: ${colors.lightGray};
    border-radius: 0.1rem; /* roundness of the scroll thumb */
  }
`;

const PersonCardWidth = "15rem";

export const PersonCardContainer = styled.div`
  transition: all 250ms;
  color: ${colors.gray};
  width: ${PersonCardWidth};
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  background-image: ${(props) => {
    return `url(${props.image})`;
  }};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  &:hover ${PersonCardDescription} {
    opacity: 1;
  }
`;

export const PersonCardName = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 300;
  font-family: "Lato";
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;
