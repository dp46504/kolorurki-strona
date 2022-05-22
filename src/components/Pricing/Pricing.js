import React from "react";
import {
  Container,
  Divider,
  Line,
  LineLeft,
  LineRight,
  SubTitle,
  Title,
  TitleWDivider,
} from "./Style";

function Pricing(props) {
  return (
    <>
      <Container>
        <Title>
          <div>KARNET</div>
          <div>POLE/ EXOTIC/ AERIAL</div>
        </Title>

        <Line>
          <LineLeft>1 WEJŚCIE</LineLeft>
          <LineRight>&nbsp;- 50 zł</LineRight>
        </Line>
        <Line>
          <LineLeft>4 WEJŚCIA</LineLeft>
          <LineRight>&nbsp;- 150 zł</LineRight>
        </Line>
        <Line>
          <LineLeft>8 WEJŚĆ</LineLeft>
          <LineRight>&nbsp;- 260 zł</LineRight>
        </Line>
        <Line>
          <LineLeft>12 WEJŚĆ</LineLeft>
          <LineRight>&nbsp;- 370 zł</LineRight>
        </Line>

        <Divider></Divider>

        <Title>
          <div>KARNET</div>
          <div>ROZCIĄGANIE/WZMACNIANIE/JOGA</div>
        </Title>
        <SubTitle>(z aktywnym karnetem pole/exotic/aerial)</SubTitle>

        <Line>
          <LineLeft>1 WEJŚCIE</LineLeft>
          <LineRight>&nbsp;- 25 zł</LineRight>
        </Line>
        <Line>
          <LineLeft>4 WEJŚCIA</LineLeft>
          <LineRight>&nbsp;- 80 zł</LineRight>
        </Line>
        <Line>
          <LineLeft>8 WEJŚĆ</LineLeft>
          <LineRight>&nbsp;- 140 zł</LineRight>
        </Line>
        <Line>
          <LineLeft>12 WEJŚĆ</LineLeft>
          <LineRight>&nbsp;- 200 zł</LineRight>
        </Line>

        <Divider></Divider>
        <Title>
          <div>KARNET</div>
          <div>ROZCIĄGANIE/WZMACNIANIE/JOGA</div>
        </Title>
        <SubTitle>(bez aktywnego karnetu pole/exotic/aerial)</SubTitle>

        <Line>
          <LineLeft>1 WEJŚCIE</LineLeft>
          <LineRight>&nbsp;- 35 zł</LineRight>
        </Line>
        <Line>
          <LineLeft>4 WEJŚCIA</LineLeft>
          <LineRight>&nbsp;- 120 zł</LineRight>
        </Line>
        <Line>
          <LineLeft>8 WEJŚĆ</LineLeft>
          <LineRight>&nbsp;- 200 zł</LineRight>
        </Line>
        <Line>
          <LineLeft>12 WEJŚĆ</LineLeft>
          <LineRight>&nbsp;- 280 zł</LineRight>
        </Line>

        <Divider></Divider>

        <Title>
          <div>TRENINGI INDYWIDUALNE</div>
        </Title>

        <TitleWDivider>1 OSOBA:</TitleWDivider>
        <Line>
          <LineLeft>1 WEJŚCIE</LineLeft>
          <LineRight>&nbsp;- 120 zł</LineRight>
        </Line>
        <Line>
          <LineLeft>4 WEJŚCIA</LineLeft>
          <LineRight>&nbsp;- 400 zł</LineRight>
        </Line>

        <TitleWDivider>2 OSOBA:</TitleWDivider>
        <Line>
          <LineLeft>1 WEJŚCIE</LineLeft>
          <LineRight>&nbsp;- 180 zł</LineRight>
        </Line>
        <Line>
          <LineLeft>4 WEJŚCIA</LineLeft>
          <LineRight>&nbsp;- 650 zł</LineRight>
        </Line>
      </Container>
    </>
  );
}

export default Pricing;
