import React, { useState, useEffect } from "react";
import { CarouselContainer, H1 } from "./CarouselElements";
import CarouselContent from "../CarouselContent";
import Arrows from "../Arrows";
import Dots from "../Dots";
import sliderImages from "../sliderImages";

const slideLength = sliderImages.length - 1;

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === slideLength ? 0 : activeIndex + 1);
    }, 5500);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const prevSlide = () => {
    setActiveIndex(activeIndex < 1 ? slideLength : activeIndex - 1);
  };

  // if activeIndex is strictly equal to slideLength (end of slides), set index to 0, which is the first slide
  const nextSlide = () => {
    setActiveIndex(activeIndex === slideLength ? 0 : activeIndex + 1);
  };

  return (
    <CarouselContainer>
      <H1>Clients and colleagues talking</H1>
      <CarouselContent activeIndex={activeIndex} sliderImage={sliderImages} />
      <Arrows prevSlide={prevSlide} nextSlide={nextSlide} />
      <Dots
        activeIndex={activeIndex}
        sliderImages={sliderImages}
        onClick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </CarouselContainer>
  );
}
