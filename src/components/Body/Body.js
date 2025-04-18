import React, { useEffect } from "react";
import {
  MainDescription,
  MainTitle,
  Classes,
  BodyContainer,
  SectionTitle,
  Team,
  Schedule,
  colors,
  WideColorPanel,
  PopupStyled,
} from "../../Style";
import {
  CardContainer,
  CardImage,
  CardDescription,
  CardTitle,
  PersonCardDescription,
  PersonCardContainer,
  PersonCardName,
} from "./Style";
import strings from "../../strings.json";
import ScheduleOpen from "../ScheduleOpen/ScheduleOpen";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import Pricing from "../Pricing/Pricing";
import Gallery from "../Gallery/Gallery";
import Contact from "../Contact/Contact";

function Body(props) {
  // Drag to scroll on Slider Sections
  useEffect(() => {
    let classesSection = document.getElementById("classes_section");
    let pos = { left: 0, x: 0 };

    const mouseDownHandler = (e) => {
      pos.left = classesSection.scrollLeft;
      pos.x = e.clientX;

      classesSection.style.userSelect = "none";
      classesSection.style.cursor = "grabbing";

      document.addEventListener("mousemove", mouseMoveHandler);
      document.addEventListener("mouseup", mouseUpHandler);
    };
    const mouseMoveHandler = (e) => {
      classesSection.scrollLeft = pos.left - (e.clientX - pos.x);
    };
    const mouseUpHandler = (e) => {
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseup", mouseUpHandler);

      classesSection.style.cursor = "grab";
      classesSection.style.removeProperty("user-select");
    };
    classesSection.addEventListener("mousedown", mouseDownHandler);
    classesSection.scrollLeft = 0;
  }, []);

  const getShortenText = (id, text, n_words) => {
    let wordArray = text.split(" ");
    if (n_words > wordArray.length) n_words = wordArray.length;
    let newTextArray = wordArray.slice(0, n_words);
    let newText = newTextArray.reduce((accum, active) => {
      return accum + " " + active;
    });
    let container = document.createElement("div");

    let textElement = document.createElement("div");
    textElement.textContent = newText;

    let button = document.createElement("button");
    button.value = "więcej...";
    button.addEventListener("click", () => {
      let parent = document.getElementById(id);
      parent.innerHTML = "";
      parent.innerHTML = text;
    });

    return [textElement, button];
  };

  return (
    <>
      <BodyContainer>
        <MainTitle>{strings.MAIN_TITLE}</MainTitle>
        <MainDescription>{strings.MAIN_DESCRIPTION}</MainDescription>
        <SectionTitle id="classes">Zajęcia</SectionTitle>

        {/* Escape body to put wide panel */}
      </BodyContainer>
      {/* Putting wide color panel */}
      <WideColorPanel>
        {/* Entering body again */}
        <BodyContainer>
          {/* Content */}
          <Classes id="classes_section">
            {strings.SECTIONS.ZAJECIA.CARDS.map((info, index) => {
              const id = `class_card_${info.index}`;
              return (
                <CardContainer>
                  <CardImage image={info.IMAGE}></CardImage>
                  <CardTitle>{info.TITLE}</CardTitle>
                  <CardDescription id={id}>{info.DESCRIPTION}</CardDescription>
                </CardContainer>
              );
            })}
          </Classes>
          {/* Exiting body */}
        </BodyContainer>
        {/* Exiting wide color panel */}
      </WideColorPanel>
      {/* Entering body again */}
      <BodyContainer>
        <SectionTitle id="team">Zespół</SectionTitle>

        <Team>
          {strings.SECTIONS.ZESPOL.map((info) => {
            return (
              <PersonCardContainer image={info.IMAGE}>
                <PersonCardDescription>
                  <PersonCardName>{info.NAME}</PersonCardName>
                  {info.DESCRIPTION}
                </PersonCardDescription>
              </PersonCardContainer>
            );
          })}
        </Team>

        <SectionTitle id="schedule">Grafik</SectionTitle>

        {/* Escape body to put wide panel */}
      </BodyContainer>
      {/* Putting wide color panel */}
      <WideColorPanel>
        {/* Entering body again */}
        <BodyContainer>
          {/* Content */}
          <Schedule>
            <iframe
              title="schedule"
              src={`https://wod.guru/grafik/kolorurki?bgColor=${
                colors.ecrue.split("#")[1]
              }`}
              width="100%"
              height="1000px"
              frameborder="0"
            ></iframe>
          </Schedule>

          {/* Exiting body */}
        </BodyContainer>
        {/* Exiting wide color panel */}
      </WideColorPanel>
      {/* Entering body again */}
      <BodyContainer>
        <SectionTitle id="scheduleOpen">Grafik - Sala Open</SectionTitle>

        {/* Escape body to put wide panel */}
      </BodyContainer>
      {/* Putting wide color panel */}
      <WideColorPanel>
        {/* Entering body again */}
        <BodyContainer>
          {/* OpenSchedule */}
          <ScheduleOpen></ScheduleOpen>

          {/* Pricing */}
          <SectionTitle id="price">Cennik</SectionTitle>
          <Pricing></Pricing>

          {/* Exiting body */}
        </BodyContainer>
        {/* Exiting wide color panel */}
      </WideColorPanel>
      {/* Entering body again */}
      <BodyContainer>
        {/* Contact */}
        <SectionTitle id="gallery">Galeria</SectionTitle>
        <Gallery></Gallery>
        {/* Contact */}
        <SectionTitle id="contact">Kontakt</SectionTitle>
        <Contact></Contact>

        {/* Map */}
        <SectionTitle id="map">Gdzie nas znaleźć</SectionTitle>

        <MapContainer
          center={[53.43452379512689, 14.531040722933511]}
          zoom={17}
          dragging={false}
          touchZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[53.43452379512689, 14.531040722933511]}>
            <PopupStyled>
              <center>Koło rurki</center>
              <br />

              <center>Jagiellońska 34B, 70-382 Szczecin</center>
              <a href="https://goo.gl/maps/kRatPWg4SDSqZL7D8">
                <button id="googleRouteButton">Wyznacz trasę</button>
              </a>
            </PopupStyled>
          </Marker>
        </MapContainer>
      </BodyContainer>
    </>
  );
}

export default Body;
