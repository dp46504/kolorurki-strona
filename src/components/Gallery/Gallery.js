import React, { useState, useEffect } from "react";
import { GalleryContainer, Image } from "./Style";
import strings from "../../strings.json";
import Modal from "../Modal/Modal";

function Gallery(props) {
  const [imageUrl, setImageUrl] = useState(null);
  const [isImageOpened, setIsImageOpened] = useState(false);

  useEffect(() => {
    // Adding no-scroll on body uppon opening modal
    if (isImageOpened) {
      document.getElementsByTagName("body")[0].classList.add("no-scroll");
    } else {
      document.getElementsByTagName("body")[0].classList.remove("no-scroll");
    }
  }, [isImageOpened]);

  return (
    <GalleryContainer>
      {strings.SECTIONS.GALERIA.map((imageInfo) => {
        return (
          <Image
            onClick={() => {
              setIsImageOpened((previous) => !previous);
              setImageUrl(imageInfo.IMAGE);
            }}
            image={imageInfo.IMAGE}
          ></Image>
        );
      })}
      {isImageOpened && (
        <Modal setter={setIsImageOpened} imageUrl={imageUrl}></Modal>
      )}
    </GalleryContainer>
  );
}

export default Gallery;
