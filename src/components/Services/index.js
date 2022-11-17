import React from "react";
import {
  ServicesContainer,
  HeaderWrapper,
  CardWrapper,
  Card,
  CardImg,
  CardH2,
  HeaderH2,
} from "./ServiceElements";
import { serviceData } from "./data";

export default function Services() {
  return (
    <ServicesContainer>
      <HeaderWrapper>
        <HeaderH2>Service Spectrum</HeaderH2>
      </HeaderWrapper>
      <CardWrapper>
        {serviceData.map((item, index) => (
          <Card key={index}>
            <CardImg style={item.style} src={item.image} />
            <CardH2>{item.title}</CardH2>
            <p style={{ maxWidth: "320px" }}>{item.text}</p>
          </Card>
        ))}
      </CardWrapper>
    </ServicesContainer>
  );
}
