import React, { useEffect } from "react";
import {
  MainDescription,
  MainTitle,
  Classes,
  BodyContainer,
  SectionTitle,
} from "../../Style";
import { CardContainer, CardImage, CardDescription, CardTitle } from "./Style";
import Image from "../../assets/image.jpeg";

function Body(props) {
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
        <MainTitle>
          Wierzymy, że to ludzie tworzą miejsce.<br></br>Projektuj pasję razem z
          nami!
        </MainTitle>
        <MainDescription>
          orem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          metus dolor, vehicula sit amet interdum in, mattis nec nulla.
          Curabitur facilisis consectetur neque, efficitur tempus odio eleifend
          ut. Phasellus convallis neque vel nisi semper, ut venenatis ex mattis.
          Curabitur quam tellus, condimentum sed libero vel, imperdiet dignissim
          nisl. Aliquam eu massa consequat nisl pulvinar aliquet et vel mauris.
          Nunc massa orci, venenatis vitae risus eget, eleifend commodo odio.
          Mauris posuere nisi non tellus pulvinar sagittis. Praesent vel dui
          ullamcorper lacus aliquam ultricies. Vivamus pretium pellentesque enim
          at dictum. Vestibulum tincidunt sapien lobortis massa dignissim
          pharetra. Aenean egestas odio vitae sapien finibus, vulputate bibendum
          nisl posuere. Suspendisse potenti. Phasellus quis turpis maximus elit
          egestas consectetur. Phasellus venenatis nisl arcu, ac ullamcorper
          eros fringilla eget.
        </MainDescription>
        <SectionTitle>Zajęcia</SectionTitle>
        <Classes id="classes_section">
          <CardContainer>
            <CardImage src={Image}></CardImage>
            <CardTitle>Pole dance</CardTitle>
            <CardDescription>
              Lorem ipsum lorem ipsum lorem ipsumLorem ipsum lorem ipsum lorem
              ipsumLorem ipsum lorem ipsum lorem ipsumLorem ipsum lorem ipsum
              lorem ipsum
            </CardDescription>
          </CardContainer>
          <CardContainer>
            <CardImage src={Image}></CardImage>
            <CardTitle>Pole dance</CardTitle>
            <CardDescription>
              Lorem ipsum lorem ipsum lorem ipsumLorem ipsum lorem ipsum lorem
              ipsumLorem ipsum lorem ipsum lorem ipsumLorem ipsum lorem ipsum
              lorem ipsum
            </CardDescription>
          </CardContainer>
          <CardContainer>
            <CardImage src={Image}></CardImage>
            <CardTitle>Pole dance</CardTitle>
            <CardDescription>
              Lorem ipsum lorem ipsum lorem ipsumLorem ipsum lorem ipsum lorem
              ipsumLorem ipsum lorem ipsum lorem ipsumLorem ipsum lorem ipsum
              lorem ipsum
            </CardDescription>
          </CardContainer>
          <CardContainer>
            <CardImage src={Image}></CardImage>
            <CardTitle>Pole dance</CardTitle>
            <CardDescription>
              Lorem ipsum lorem ipsum lorem ipsumLorem ipsum lorem ipsum lorem
              ipsumLorem ipsum lorem ipsum lorem ipsumLorem ipsum lorem ipsum
              lorem ipsum
            </CardDescription>
          </CardContainer>
          <CardContainer>
            <CardImage src={Image}></CardImage>
            <CardTitle>Pole dance</CardTitle>
            <CardDescription>
              Lorem ipsum lorem ipsum lorem ipsumLorem ipsum lorem ipsum lorem
              ipsumLorem ipsum lorem ipsum lorem ipsumLorem ipsum lorem ipsum
              lorem ipsum
            </CardDescription>
          </CardContainer>
          <CardContainer>
            <CardImage src={Image}></CardImage>
            <CardTitle>Pole dance</CardTitle>
            <CardDescription>
              Lorem ipsum lorem ipsum lorem ipsumLorem ipsum lorem ipsum lorem
              ipsumLorem ipsum lorem ipsum lorem ipsumLorem ipsum lorem ipsum
              lorem ipsum
            </CardDescription>
          </CardContainer>
          <CardContainer>
            <CardImage src={Image}></CardImage>
            <CardTitle>Pole dance</CardTitle>
            <CardDescription>
              Lorem ipsum lorem ipsum lorem ipsumLorem ipsum lorem ipsum lorem
              ipsumLorem ipsum lorem ipsum lorem ipsumLorem ipsum lorem ipsum
              lorem ipsum
            </CardDescription>
          </CardContainer>
        </Classes>
      </BodyContainer>
    </>
  );
}

export default Body;
