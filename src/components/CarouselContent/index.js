import React, { Fragment } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container, Img, Wrapper, H3, H4, P } from "./CarouselContentElements";
import slides from "../sliderImages";

export default function CarouselContent({ activeIndex }) {
  return (
    <Container>
      <Carousel controls={false} interval={5500}>
        {slides.map((item, index) => (
          <Carousel.Item
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
