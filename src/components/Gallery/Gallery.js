import React from "react";
import { GalleryContainer, Image } from "./Style";
import strings from "../../strings.json";

function Gallery(props) {
  return (
    <GalleryContainer>
      {strings.SECTIONS.GALERIA.map((imageInfo) => {
        return <Image image={imageInfo.IMAGE}></Image>;
      })}
    </GalleryContainer>
  );
}

export default Gallery;
