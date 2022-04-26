import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: fit-content;
  border: 1px solid black;
  padding: 1rem 1rem 0.5rem 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
`;

export const MenuItem = styled.div`
  width: fit-content;
  height: fit-content;
  margin: 0 0.5rem;
  padding: 0.2rem;
  display: grid;
  place-items: center;
`;

export const MenuItems = styled.div`
  display: flex;
  margin: 0 auto 0 0;
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
`;
