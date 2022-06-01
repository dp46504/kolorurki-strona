import styled from "styled-components";
import { breakingPointPhone, colors } from "../../Style";

export const GalleryContainer = styled.div`
  width: 100%;
  display: grid;
  height: fit-content;

  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr;
  grid-gap: 1rem;
  @media screen and (max-width: ${breakingPointPhone}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 0.6rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 1;
  background-image: ${(props) => {
    return `url(${props.image})`;
  }};
  background-color: white;
  background-position: center center;
  background-size: cover;
  transition: all 250ms;

  &:hover,
  &:active {
    transform: scale(1.05);
    @media screen and (max-width: ${breakingPointPhone}) {
      transform: none;
    }
  }
`;
