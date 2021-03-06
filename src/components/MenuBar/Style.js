import styled from "styled-components";
import { breakingPointPhone, colors } from "../../Style";

// BURGER MENU ====================================
export const BurgerMenu = styled.div`
  position: fixed;
  opacity: 0.5;
  top: 0.8rem;
  left: 0.8rem;
  aspect-ratio: 1;
  display: none;
  z-index: 1002;
  & * {
    width: 1.8rem;
    aspect-ratio: 1;
    display: grid;
    place-items: center;
    fill: ${colors.gray};
  }
  @media screen and (max-width: ${breakingPointPhone}) {
    display: block;
  }
`;

// END BURGER MENU ================================

export const MenuBarOutContainer = styled.div`
  /* Moving if on phone (burgermenu) */
  position: fixed;
  top: 0;
  left: 0;
  height: fit-content;
  z-index: 1001;
  width: 100%;
  display: grid;
  place-items: center;
  font-family: "Lato", sans-serif;
  font-weight: 300;
  color: ${colors.gray};
  background-color: ${colors.white75};
  @media screen and (max-width: ${breakingPointPhone}) {
    background-color: ${colors.white50};
    transition: all 250ms;
    width: 100vw;
    height: 100%;
    left: -100vw;
    top: 0;
    backdrop-filter: blur(10px);
    margin-bottom: 1rem;
  }
`;

// Inside container
export const Container = styled.div`
  width: clamp(500px, 90%, 1200px);
  height: fit-content;

  padding: 1rem 1rem 1rem 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  @media screen and (max-width: ${breakingPointPhone}) {
    flex-direction: column;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: scroll;
  }
`;

// MenuItem
export const MenuItem = styled.div`
  width: fit-content;
  height: fit-content;
  margin: 0 0.5rem;
  padding: 0.2rem;
  display: grid;
  place-items: center;

  @media screen and (max-width: ${breakingPointPhone}) {
    margin: 1rem auto;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

// Minicontainer for MenuItems
export const MenuItems = styled.div`
  display: flex;
  margin: 0 auto 0 0;
  @media screen and (max-width: ${breakingPointPhone}) {
    flex-direction: column;
    margin: auto;
  }
`;

// Minicontainer for social media icons
export const SocialMediaLinks = styled.div`
  display: flex;
  margin: 0 0 0 auto;
  & * {
    width: 1.3rem;
    aspect-ratio: 1;
    margin: 0 0.5rem;
    display: grid;
    place-items: center;
    fill: ${colors.gray};
  }
  @media screen and (max-width: ${breakingPointPhone}) {
    margin: auto;
  }
`;
