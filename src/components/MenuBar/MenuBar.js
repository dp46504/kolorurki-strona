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
import classnames from "classnames";
import { breakingPointPhoneWOPx } from "../../Style";
import Logo from "../Logo/Logo";
import { ReactComponent as FacebookIcon } from "../../assets/facebook-icon.svg";
import { ReactComponent as InstagramIcon } from "../../assets/instagram-icon.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu-icon.svg";

function MenuBar(props) {
  const [menuOpened, setMenuOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.innerWidth > breakingPointPhoneWOPx ? false : true
  );

  const menuStyles = classnames({
    "menu-opened": menuOpened,
    "menu-closed": !menuOpened,
  });

  const toggleMenu = () => {
    if (!isMobile) return null;
    if (menuOpened) {
      // Close menu
      setMenuOpened((previous) => !previous);
      document.getElementsByTagName("body")[0].classList.toggle("no-scroll");
    } else {
      // Open menu
      setMenuOpened((previous) => !previous);
      document.getElementsByTagName("body")[0].classList.toggle("no-scroll");
    }
  };

  return (
    <>
      <BurgerMenu onClick={toggleMenu}>
        <MenuIcon></MenuIcon>
      </BurgerMenu>
      <MenuBarOutContainer id="menu" className={menuStyles}>
        <Container>
          <MenuItems>
            {isMobile ? <Logo style={{ marginTop: "0" }}></Logo> : null}
            <a href="#classes" onClick={toggleMenu}>
              <MenuItem>Zajęcia</MenuItem>
            </a>
            <a href="#team" onClick={toggleMenu}>
              <MenuItem>Zespół</MenuItem>
            </a>
            <a href="#schedule" onClick={toggleMenu}>
              <MenuItem>Grafik</MenuItem>
            </a>

            <MenuItem>Cennik</MenuItem>
            <MenuItem>Galeria</MenuItem>

            <a href="#contact" onClick={toggleMenu}>
              <MenuItem>Kontakt</MenuItem>
            </a>

            <a href="#map" onClick={toggleMenu}>
              <MenuItem>Dojazd</MenuItem>
            </a>
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
