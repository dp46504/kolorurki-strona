import React from "react";
import { Container, MenuItem, SocialMediaLinks, MenuItems } from "./Style";
import { ReactComponent as FacebookIcon } from "../../assets/facebook-icon.svg";
import { ReactComponent as InstagramIcon } from "../../assets/instagram-icon.svg";

function MenuBar(props) {
  return (
    <Container>
      <MenuItems>
        <MenuItem>Zajęcia</MenuItem>
        <MenuItem>Zespół</MenuItem>
        <MenuItem>Grafik</MenuItem>
        <MenuItem>Cennik</MenuItem>
        <MenuItem>Galeria</MenuItem>
        <MenuItem>Kontakt</MenuItem>
      </MenuItems>
      <SocialMediaLinks>
        <FacebookIcon></FacebookIcon>
        <InstagramIcon></InstagramIcon>
      </SocialMediaLinks>
    </Container>
  );
}

export default MenuBar;
