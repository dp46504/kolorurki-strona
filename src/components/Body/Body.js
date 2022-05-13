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
            {strings.SECTIONS.ZAJECIA.CARDS.map((info) => {
              return (
                <CardContainer>
                  <CardImage image={info.IMAGE}></CardImage>
                  <CardTitle>{info.TITLE}</CardTitle>
                  <CardDescription>{info.DESCRIPTION}</CardDescription>
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
          {/* Content */}
          <ScheduleOpen></ScheduleOpen>

          {/* Exiting body */}
        </BodyContainer>
        {/* Exiting wide color panel */}
      </WideColorPanel>
      {/* Entering body again */}
      <BodyContainer></BodyContainer>
    </>
  );
}

export default Body;
