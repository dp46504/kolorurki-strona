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
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0.2rem;
  }
  &::-webkit-scrollbar-track {
    background-color: ${colors.ecrue}; /* color of the scroll thumb */
  }

  &::-webkit-scrollbar-thumb {
    background: ${colors.lightGray};
    border-radius: 0.1rem; /* roundness of the scroll thumb */
  }
`;
