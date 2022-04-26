import styled from "styled-components";

const breakingPointPhone = "500px";

export const BurgerMenu = styled.div`
  position: fixed;
  top: 0.8rem;
  left: 0.8rem;
  aspect-ratio: 1;
  display: none;
  z-index: 99;
  & * {
    width: 2rem;
    aspect-ratio: 1;
    display: grid;
    place-items: center;
  }
  @media screen and (max-width: ${breakingPointPhone}) {
    display: block;
  }
`;

export const CloseMenuButton = styled.div`
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  aspect-ratio: 1;
  display: none;
  z-index: 100;
  & * {
    width: 1.5rem;
    aspect-ratio: 1;
    display: grid;
    place-items: center;
  }
  @media screen and (max-width: ${breakingPointPhone}) {
    display: block;
  }
`;

export const MenuBarOutContainer = styled.div`
  position: fixed;
  z-index: 100;
  width: 100%;
  display: grid;
  place-items: center;
  transition: all 250ms;
  @media screen and (max-width: ${breakingPointPhone}) {
    width: 65%;
    height: 100%;
    left: -100vw;
  }
`;

export const Container = styled.div`
  width: clamp(500px, 80%, 1000px);
  height: fit-content;

  padding: 1rem 1rem 0.5rem 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  @media screen and (max-width: ${breakingPointPhone}) {
    flex-direction: column;
    padding: 0;
    width: fit-content;
    height: 90%;
  }
`;

export const MenuItem = styled.div`
  width: fit-content;
  height: fit-content;
  margin: 0 0.5rem;
  padding: 0.2rem;
  display: grid;
  place-items: center;
  @media screen and (max-width: ${breakingPointPhone}) {
    margin: 2rem auto;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export const MenuItems = styled.div`
  display: flex;
  margin: 0 auto 0 0;
  @media screen and (max-width: ${breakingPointPhone}) {
    flex-direction: column;
    margin: auto;
  }
`;

export const SocialMediaLinks = styled.div`
  display: flex;
  margin: 0 0 0 auto;
  & * {
    width: 1.3rem;
    aspect-ratio: 1;
    margin: 0 0.5rem;
    display: grid;
    place-items: center;
  }
  @media screen and (max-width: ${breakingPointPhone}) {
    margin: auto;
  }
`;
