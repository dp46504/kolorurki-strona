import styled, { createGlobalStyle } from "styled-components";
import { ReactComponent as BackArrow } from "./assets/back-icon.svg";

export const breakingPointPhone = "600px";

export const GlobalStyle = createGlobalStyle`
html, body{
    margin:0;
    padding: 0;
    margin:0 auto;
}


*{
    box-sizing:border-box;

    }
    .noscroll{
      overflow: hidden;
    }
`;

export const colors = {
  gray: "#434343",
  white: "#ffff",
  white50: "#fffa",
  white25: "#fff5",
  white75: "#fffd",
  lightGray: "#bababa",
  ecrue: "#f8f5f2",
  ecrue75: "#f8f5f2dd",
};

export const BodyContainer = styled.div`
  width: clamp(100px, 90%, 1200px);
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const MainTitle = styled.div`
  font-family: "Playfair Display";
  margin: 2rem 0;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  color: ${colors.gray};
  white-space: pre-wrap;
`;
export const MainDescription = styled.div`
  font-family: "Lato";
  text-align: center;
  color: ${colors.gray};
  margin: 1rem 0;
`;

export const SectionTitle = styled.div`
  margin: 4rem 0 1rem 0;
  align-self: flex-start;
  font-weight: bold;
  font-size: 1.5rem;
  color: ${colors.gray};
  font-family: "Playfair Display";
`;

export const Classes = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  background-color: ${colors.ecrue};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-x: scroll;

  @media screen and (max-width: ${breakingPointPhone}) {
    scroll-snap-type: x mandatory;
  }
  &::before {
    position: absolute;
    content: ${`url(${BackArrow})`};
    width: 4rem;
    height: 4rem;
    top: calc(50% - 2rem);
    left: 1rem;
  }

  &::-webkit-scrollbar {
    height: 0.2rem;
  }
  &::-webkit-scrollbar-track {
    background-color: ${colors.ecrue}; /* color of the scroll thumb */
  }

  &::-webkit-scrollbar-thumb {
    background: ${colors.lightGray};
    border-radius: 0.1rem; /* roundness of the scroll thumb */
  }
`;

export const Team = styled.div`
  gap: 1rem;
  padding: 2rem 0;
  position: relative;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  background-color: ${colors.ecrue};
  justify-content: center;
  align-items: center;
`;
