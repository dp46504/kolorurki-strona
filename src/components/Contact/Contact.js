import React from "react";
import { Container, Line } from "./Style";
import { SocialMediaLinks } from "../MenuBar/Style";
import { ReactComponent as FacebookIcon } from "../../assets/facebook-icon.svg";
import { ReactComponent as InstagramIcon } from "../../assets/instagram-icon.svg";

function Contact(props) {
  return (
    <Container>
      <Line>
        <p>E-mail</p>

        <a href="mailto:kolorurki@gmail.com">kolorurki@gmail.com</a>
      </Line>
      <Line>
        <p>Telefon</p>
        <a href="tel:690429888">690 429 888</a>
      </Line>
      <Line>
        <p>Jagiellońska 34b Szczecin</p>
        <p>wjazd od ul. 5 Lipca</p>
      </Line>

      <Line>
        <p>Pon-Pt</p>
        <p>09:00 - 22:00</p>
      </Line>
      <Line>
        <p>Sobota</p>
        <p>09:00 - 17:00</p>
      </Line>
      <Line>
        <p>Niedziela</p>
        <p>Zamknięte</p>
      </Line>

      <SocialMediaLinks style={{ alingSelf: "center", margin: "1rem auto" }}>
        <a href="https://www.facebook.com/Ko%C5%82o-rurki-100192172080611">
          <FacebookIcon></FacebookIcon>
        </a>
        <a href="https://www.instagram.com/kolo.rurki/">
          <InstagramIcon></InstagramIcon>
        </a>
      </SocialMediaLinks>
    </Container>
  );
}

export default Contact;
