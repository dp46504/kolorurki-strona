import React, { useState } from "react";
import {
  Container,
  MenuItem,
  SocialMediaLinks,
  MenuItems,
  MenuBarOutContainer,
  BurgerMenu,
  BlurLayer,
} from "./Style";
import { breakingPointPhone } from "../../Style";
import Logo from "../Logo/Logo";
import { ReactComponent as FacebookIcon } from "../../assets/facebook-icon.svg";
import { ReactComponent as InstagramIcon } from "../../assets/instagram-icon.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu-icon.svg";

function MenuBar(props) {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => {
    if (window.innerWidth > breakingPointPhone.split("px")[0]) {
      return null;
    }
    if (menuOpened) {
      // Close menu
      document.getElementById("menu").style.left = "-100vw";
      setMenuOpened((previous) => !previous);
      document.getElementsByTagName("body")[0].classList.toggle("noscroll");
    } else {
      // Open menu
      document.getElementById("menu").style.left = "0";
      setMenuOpened((previous) => !previous);
      document.getElementsByTagName("body")[0].classList.toggle("noscroll");
    }
  };

  return (
    <>
      {/* <BlurLayer showed={menuOpened}></BlurLayer> */}
      <BurgerMenu onClick={toggleMenu}>
        <MenuIcon></MenuIcon>
      </BurgerMenu>
      <MenuBarOutContainer id="menu">
        <Container>
          <MenuItems>
            {window.innerWidth <= breakingPointPhone.split("px")[0] ? (
              <Logo style={{ marginTop: "0" }}></Logo>
            ) : null}
            <a href="#classes" onClick={toggleMenu}>
              <MenuItem>Zajęcia</MenuItem>
            </a>
            <a href="#team" onClick={toggleMenu}>
              <MenuItem>Zespół</MenuItem>
            </a>
            <MenuItem>Grafik</MenuItem>
            <MenuItem>Cennik</MenuItem>
            <MenuItem>Galeria</MenuItem>
            <MenuItem>Kontakt</MenuItem>
          </MenuItems>
          <SocialMediaLinks>
            <a href="https://www.facebook.com/Ko%C5%82o-rurki-100192172080611">
              <FacebookIcon></FacebookIcon>
            </a>
            <a href="https://www.instagram.com/kolo.rurki/">
              <InstagramIcon></InstagramIcon>
            </a>
          </SocialMediaLinks>
        </Container>
      </MenuBarOutContainer>
    </>
  );
}

export default MenuBar;
