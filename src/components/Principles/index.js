import React from "react";
import {
  Container,
  HeaderWrapper,
  FlexContainer,
  FlexColumn,
  FlexItems,
  H1,
  H2,
  P,
} from "./PrincipleElements";
import { principlesData } from "./data";

export default function Principles() {
  return (
    <Container>
      <HeaderWrapper>
        <H1>Principles</H1>
      </HeaderWrapper>
      <FlexContainer>
        {principlesData.map((item, index) => (
          <FlexItems key={index}>
            <H2>{item.title}</H2>
            <P>{item.text}</P>
          </FlexItems>
        ))}
      </FlexContainer>
    </Container>
  );
}
