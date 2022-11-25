import React from "react";

import {
  Container,
  FlexContainer,
  FlexItems,
  H1,
  P,
  ScrollLink,
  ButtonContainer,
} from "./GetStartedElements";

export default function GetStarted() {
  const scrollToContact = () => {
    window.scrollTo({ top: "0" });
  };

  return (
    <Container>
      <FlexContainer>
        <FlexItems>
          <H1>Ready to get started?</H1>
          <P>You know about me, let's talk about you.</P>
          <ButtonContainer style={{ gap: "40px" }}>
            <ScrollLink to="Contact" smooth={true}>
              Shoot me a message
            </ScrollLink>
          </ButtonContainer>
        </FlexItems>
      </FlexContainer>
    </Container>
  );
}
