import React from "react";
import {
  Container,
  FlexContainer,
  FlexItems,
  ButtonContainer,
  Button,
} from "./GetStartedElements";

export default function GetStarted() {
  return (
    <Container>
      <FlexContainer>
        <FlexItems>
          <h1 style={{ fontSize: "70px" }}>Ready to get started?</h1>
          <p style={{ fontSize: "30px" }}>
            You know about me, let's talk about you.
          </p>
          <ButtonContainer style={{ gap: "40px" }}>
            <Button>Check out my work</Button>
            <Button>Shoot me a message</Button>
          </ButtonContainer>
        </FlexItems>
      </FlexContainer>
    </Container>
  );
}
