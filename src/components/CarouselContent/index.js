import React from "react";
import {
  CarouselContentSection,
  CarouselContentContainer,
  CarouselContentImg,
  CarouselContentText,
} from "./CarouselContentElements";
import slides from "../sliderImages";

export default function CarouselContent({ activeIndex }) {
  return (
    <CarouselContentSection>
      {slides.map((item, index) => (
        <CarouselContentContainer
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <CarouselContentText>{item.text}</CarouselContentText>
          <CarouselContentImg src={item.image} alt="image" />
        </CarouselContentContainer>
      ))}
    </CarouselContentSection>
  );
}
