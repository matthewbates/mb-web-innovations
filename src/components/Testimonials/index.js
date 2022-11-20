import React, { Fragment } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Container, Img, Wrapper, H3, H4, P } from "./TestimonialElements";
import one from "../../assets/javascript.png";
import two from "../../assets/react.png";
import { testimonialData } from "./data";

export default function Testimonials() {
  return (
    <Carousel
      className="renderArrowPrev renderArrowNext"
      showArrows={true}
      //   infiniteLoop={true}
      //   showThumbs={false}
      //   showStatus={false}
      //   autoPlay={true}
      //   interval={2500}
    >
      <Container>
        <Img src={testimonialData[0].image} alt={testimonialData[0].alt} />
        <Wrapper>
          <H3>{testimonialData[0].name}</H3>
          <H4>{testimonialData[0].title}</H4>
          <P>{testimonialData[0].text}</P>
        </Wrapper>
      </Container>
      <Container>
        <Img src={testimonialData[1].image} alt={testimonialData[1].alt} />
        <Wrapper>
          <H3>{testimonialData[1].name}</H3>
          <H4>{testimonialData[1].title}</H4>
          <P>{testimonialData[1].text}</P>
        </Wrapper>
      </Container>
      <Container>
        <Img src={testimonialData[2].image} alt={testimonialData[2].alt} />
        <Wrapper>
          <H3>{testimonialData[2].name}</H3>
          <H4>{testimonialData[2].title}</H4>
          <P>{testimonialData[2].text}</P>
        </Wrapper>
      </Container>
    </Carousel>
  );
}
