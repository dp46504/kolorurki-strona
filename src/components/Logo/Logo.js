import React from "react";
import {
  LogoBox,
  LogoBall,
  LogoLine,
  LogoUpperText,
  LogoBottomText,
} from "./Style";

function Logo(props) {
  return (
    <LogoBox>
      <LogoBall></LogoBall>
      <LogoLine></LogoLine>
      <LogoUpperText>koło rurki</LogoUpperText>
      <LogoBottomText>
        pole dance aerial dance<br></br>and more
      </LogoBottomText>
    </LogoBox>
  );
}

export default Logo;
