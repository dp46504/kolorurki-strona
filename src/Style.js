import styled, { createGlobalStyle } from "styled-components";
import { ReactComponent as BackArrow } from "./assets/back-icon.svg";
import { Popup } from "react-leaflet";

export const breakingPointPhone = "600px";
export const breakingPointPhoneWOPx = breakingPointPhone.split("px")[0];
export const colors = {
  gray: "#434343",
  white: "#ffff",
  white50: "#fffa",
  white25: "#fff5",
  white75: "#fffd",
  lightGray: "#bababa",
  lighterGray: "#dcdcdc",
  black50: "#000a",
  black: "#000",
  ecrue: "#f8f5f2",
  ecrue75: "#f8f5f2dd",
  darkEcrue: "#d6d3d0",
};

export const GlobalStyle = createGlobalStyle`
html, body{
    margin:0;
    padding: 0;
    margin:0 auto;
    scroll-behavior:smooth ;
}

// Map width and height
.leaflet-container{
  width:100%;
  aspect-ratio:1.8;
  box-shadow:0 0 20px ${colors.lightGray};
  z-index:2;
  @media screen and (max-width: ${breakingPointPhone}) {
    width:100vw;
    aspect-ratio:1;
  }
}

a{
  text-decoration: none;
  &:any-link{
    color: ${colors.gray};
  }
}
*{
    box-sizing:border-box;

    }
    .noscroll{
      overflow: hidden;
    }
`;

export const PopupStyled = styled(Popup)`
  border-radius: 20px;

  & .leaflet-popup-content-wrapper {
    border-radius: 0;
  }

  & #googleRouteButton {
    border: none;
    width: 100%;
    padding: 1rem;
    background: ${colors.ecrue};
    border: 2px solid ${colors.lighterGray};
    box-shadow: 5px 5px 5px ${colors.lighterGray};
    color: ${colors.black50};
    transition: all 250ms;
    margin-top: 1rem;

    & a {
      width: 100%;
      height: 100%;
    }

    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const BodyContainer = styled.div`
  width: clamp(100px, 90%, 1200px);
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
export const MainPicture = styled.div`
  width: 100%;
  height: calc(100vh - 15.5rem);
  background: ${(props) => {
    return `linear-gradient(
    to top, transparent, ${colors.white}
  ), url(${props.image})`;
  }};
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const MainTitle = styled.div`
  font-family: "Playfair Display";
  margin: 2rem 0;
  font-size: 1.7rem;
  font-weight: bold;
  text-align: center;
  color: ${colors.gray};
  white-space: pre-wrap;
`;
export const MainDescription = styled.div`
  font-family: "Lato";
  text-align: center;
  width: 75%;
  line-height: 180%;
  color: ${colors.gray};
  margin: 0 0 1rem 0;
`;

export const SectionTitle = styled.div`
  scroll-margin-top: 4rem;
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
  justify-content: center;
  align-items: center;
`;

export const Schedule = styled.div`
  gap: 1rem;
  padding: 2rem 0;
  position: relative;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: ${breakingPointPhone}) {
    width: 100vw;
  }
`;

export const ScheduleOpen = styled.div`
  gap: 1rem;
  padding: 2rem 0;
  position: relative;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: ${colors.ecrue};
`;

export const WideColorPanel = styled.div`
  width: 100%;
  height: fit-content;
  background-color: ${colors.ecrue};
`;
