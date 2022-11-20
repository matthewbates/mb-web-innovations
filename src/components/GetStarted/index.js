import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  FlexContainer,
  FlexItems,
  H1,
  P,
  ButtonContainer,
  Button,
} from "./GetStartedElements";

export default function GetStarted() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/contact`;
    navigate(path);
  };

  return (
    <Container>
      <FlexContainer>
        <FlexItems>
          <H1>Ready to get started?</H1>
          <P>You know about me, let's talk about you.</P>
          <ButtonContainer style={{ gap: "40px" }}>
            <Button onClick={routeChange}>Shoot me a message</Button>
          </ButtonContainer>
        </FlexItems>
      </FlexContainer>
    </Container>
  );
}
