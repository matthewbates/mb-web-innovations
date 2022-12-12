import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container, Img, Wrapper, H3, H4, P } from "./CarouselContentElements";
import { testimonials } from "../sliderImages";

export default function CarouselContent({ activeIndex, nextSlide }) {
  return (
    <Container>
      <Carousel
        activeIndex={activeIndex}
        onSelect={nextSlide}
        controls={false}
        interval={6500}
        variant="dark"
      >
        {testimonials.map((item, index) => (
          <Carousel.Item
            key={index}
            style={{
              textAlign: "center",
            }}
          >
            <Img
              style={{ width: "139px", borderRadius: "50%" }}
              src={item.image}
            />
            <Wrapper>
              <H3>{item.name}</H3>
              <H4>{item.title}</H4>
              <P>{item.text}</P>
            </Wrapper>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}
