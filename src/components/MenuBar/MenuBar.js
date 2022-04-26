import React, { useState } from "react";
import {
  Container,
  MenuItem,
  SocialMediaLinks,
  MenuItems,
  MenuBarOutContainer,
  BurgerMenu,
  CloseMenuButton,
} from "./Style";
import { ReactComponent as FacebookIcon } from "../../assets/facebook-icon.svg";
import { ReactComponent as InstagramIcon } from "../../assets/instagram-icon.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu-icon.svg";
import { ReactComponent as XIcon } from "../../assets/x-icon.svg";

function MenuBar(props) {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => {
    if (menuOpened) {
      // Close menu
      document.getElementById("menu").style.left = "-100vw";
      setMenuOpened((previous) => !previous);
    } else {
      // Open menu
      document.getElementById("menu").style.left = "0";
      setMenuOpened((previous) => !previous);
    }
  };

  return (
    <>
      <BurgerMenu onClick={toggleMenu}>
        <MenuIcon></MenuIcon>
      </BurgerMenu>
      <MenuBarOutContainer id="menu">
        <Container>
          <CloseMenuButton onClick={toggleMenu}>
            <XIcon></XIcon>
          </CloseMenuButton>
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
      </MenuBarOutContainer>
    </>
  );
}

export default MenuBar;
