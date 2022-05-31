import React, { useState } from "react";
import {
  Container,
  Divider,
  Line,
  LineLeft,
  LineRight,
  SubTitle,
  Title,
  TitleWDivider,
  LeftArrow,
  RightArrow,
  Content,
} from "./Style";
import { ReactComponent as ArrowIcon } from "../../assets/back-icon.svg";

function Pricing(props) {
  const [bookmark, setBookmark] = useState(0);
  let touchStartX = 0;
  let touchEndX = 0;
  let touchStartY = 0;
  let touchEndY = 0;
  const menuBookmarks = [
    <Content>
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
    </Content>,
    <Content>
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
    </Content>,
    <Content>
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

      <TitleWDivider>2 OSOBY:</TitleWDivider>
      <Line>
        <LineLeft>1 WEJŚCIE</LineLeft>
        <LineRight>&nbsp;- 180 zł</LineRight>
      </Line>
      <Line>
        <LineLeft>4 WEJŚCIA</LineLeft>
        <LineRight>&nbsp;- 650 zł</LineRight>
      </Line>
    </Content>,
    <Content>
      <Title>OPEN</Title>
      <SubTitle>(godzina na rurce bez nadzoru trenera)</SubTitle>

      <TitleWDivider>z aktywnym karnetem pole/exotic/aerial</TitleWDivider>

      <Line>
        <LineLeft>1 WEJŚCIE</LineLeft>
        <LineRight>&nbsp;- 15 zł</LineRight>
      </Line>
      <Line>
        <LineLeft>4 WEJŚCIA</LineLeft>
        <LineRight>&nbsp;- 50 zł</LineRight>
      </Line>
      <Line>
        <LineLeft>NIELIMITOWANY</LineLeft>
        <LineRight>&nbsp;- 120 zł</LineRight>
      </Line>

      <TitleWDivider>bez aktywnego karnetu pole/exotic/aerial</TitleWDivider>
      <Line>
        <LineLeft>1 WEJŚCIE</LineLeft>
        <LineRight>&nbsp;- 25 zł</LineRight>
      </Line>
      <Line>
        <LineLeft>4 WEJŚCIA</LineLeft>
        <LineRight>&nbsp;- 80 zł</LineRight>
      </Line>
      <Line>
        <LineLeft>NIELIMITOWANY</LineLeft>
        <LineRight>&nbsp;- 200 zł</LineRight>
      </Line>
    </Content>,
    <Content>
      <Title>AERIAL HOOP</Title>
      <SubTitle>
        zespół KR wprowadził dwie możliwości uczęszczania na zajęcia Aerial
        Hoop!
      </SubTitle>

      <TitleWDivider>WARIANT 1</TitleWDivider>
      <SubTitle>
        Wykupienie standardowego karnetu miesięcznego, który pozwala Ci
        uczęszczać na zajęcia na kole jeden raz w tygodniu, we wcześniej
        ustalonych dniach i godzinach. Jak wiecie z cennika - koszt takiego
        karnetu to{" "}
        <span style={{ fontWeight: "bold", fontFamily: "Playfair Display" }}>
          150 zł
        </span>{" "}
        i charakteryzuje go fakt, że
        <div style={{ fontWeight: "bold", fontFamily: "Playfair Display" }}>
          MASZ KOŁO WYŁĄCZNIE DLA SIEBIE
        </div>
      </SubTitle>
      <TitleWDivider>WARIANT 1</TitleWDivider>
      <SubTitle>
        Opcja druga jest w pewnym sensie opcją rabatową! Zapłać za zajęcia{" "}
        <span style={{ fontWeight: "bold", fontFamily: "Playfair Display" }}>
          120 zł
        </span>{" "}
        miesięcznie przy tych samych zasadach uczęszczania co powyżej. Musisz
        jednak liczyć się z tym, że w każdej chwili może pojawić się Twój
        "Towarzysz Od Koła", z którym będziesz je współdzielił/a. Jest to
        świetna informacja dla osób, które dopiero zaczynają swoją podniebną
        zabawę - wierzcie... wysiłek jest niemały, więc chwila na odpoczynek
        dzięki pracy w duecie czasami wskazana :D
      </SubTitle>
    </Content>,
    <Content>
      <Title>
        <div style={{ fontWeight: "bold" }}>KARNET VIP W PRZEDSPRZEDAŻY!</div>
        <div style={{ fontWeight: "bold" }}>490zł</div>
      </Title>
      <SubTitle>
        Karnet upoważnia do wstępu na wszystkie prowadzone zajęcia grupowe, bez
        limitu wejść. Karnet ważny jest przez miesiąc. Nie ogranicza Cię nic,
        poza ilością godzin w dobie i Twoim zapałem.
      </SubTitle>
    </Content>,
  ];

  const handleGesture = () => {
    if (touchEndX === touchStartX || touchStartY === touchEndY) {
      return;
    } else {
      if (
        touchEndX < touchStartX &&
        Math.abs(touchEndX - touchStartX) > 50 &&
        Math.abs(touchStartY - touchEndY) < 50
      ) {
        if (bookmark === menuBookmarks.length - 1) return;

        setBookmark((previous) => previous + 1);
      }
      if (
        touchEndX > touchStartX &&
        Math.abs(touchEndX - touchStartX) > 50 &&
        Math.abs(touchStartY - touchEndY) < 50
      ) {
        if (bookmark === 0) return;

        setBookmark((previous) => previous - 1);
      }
    }
  };

  return (
    <>
      <Container
        onTouchStart={(event) => {
          touchStartX = event.changedTouches[0].clientX;
          touchStartY = event.changedTouches[0].clientY;
        }}
        onTouchEnd={(event) => {
          touchEndX = event.changedTouches[0].clientX;
          touchEndY = event.changedTouches[0].clientY;
          handleGesture();
        }}
      >
        {/* Left Arrow */}
        <ArrowIcon
          style={LeftArrow}
          onClick={() => {
            if (bookmark === 0) return;
            setBookmark((previous) => previous - 1);
          }}
        ></ArrowIcon>
        {/* Right Arrow */}
        <ArrowIcon
          style={RightArrow}
          onClick={() => {
            if (bookmark === menuBookmarks.length - 1) return;
            setBookmark((previous) => previous + 1);
          }}
        ></ArrowIcon>
        <Divider
          side={1}
          text={`"${bookmark + 1} / ${menuBookmarks.length}"`}
        ></Divider>
        {menuBookmarks[bookmark]}
        <Divider text={`""`}></Divider>
      </Container>
    </>
  );
}

export default Pricing;
