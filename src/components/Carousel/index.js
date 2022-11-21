import React, { useState, useEffect } from "react";
import { CarouselContainer, H1 } from "./CarouselElements";
import CarouselContent from "../CarouselContent";
import sliderImages from "../sliderImages";

// set the
const slideLength = sliderImages.length - 1;

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // if the current index is the last slide, go back to the first slide. Else, increment by 1 every 5.5 seconds
      setActiveIndex(activeIndex === slideLength ? 0 : activeIndex + 1);
    }, 5500);
    return () => clearInterval(interval);
  }, [activeIndex]);

  // if current index < 1 (first slide), go to the last slide. Else, decrement by 1
  const prevSlide = () => {
    setActiveIndex(activeIndex < 1 ? slideLength : activeIndex - 1);
  };

  // if current index is the last slide, go to the first slide. Else, increment by 1
  const nextSlide = () => {
    setActiveIndex(activeIndex === slideLength ? 0 : activeIndex + 1);
  };

  return (
    <CarouselContainer id="Testimonials">
      <H1>Clients and colleagues talking</H1>
      <CarouselContent
        activeIndex={activeIndex}
        sliderImage={sliderImages}
        prevSlide={prevSlide}
        nextSlide={nextSlide}
      />
    </CarouselContainer>
  );
}
