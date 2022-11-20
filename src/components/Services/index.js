import React from "react";

import {
  Container,
  HeaderContainer,
  HeaderH1,
  FlexContainer,
  FlexItems,
  Img,
  H2,
  P,
} from "./ServiceElements";
import { serviceData } from "./data";

export default function Services() {
  return (
    <Container>
      <HeaderContainer>
        <HeaderH1>Service Spectrum</HeaderH1>
      </HeaderContainer>
      <FlexContainer>
        {serviceData.map((item, index) => (
          <FlexItems key={index}>
            <Img src={item.image} />
            <H2>{item.title}</H2>
            <P>{item.text}</P>
          </FlexItems>
        ))}
      </FlexContainer>
    </Container>
  );
}
