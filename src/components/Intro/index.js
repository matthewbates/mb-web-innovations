import React from "react";
import {
  IntroContainer,
  IntroLeftWrapper,
  IntroLeftH1,
  IntroLeftP,
  IntroLeftSpan,
} from "./IntroElements";

export default function Intro() {
  return (
    <IntroContainer id="home">
      <IntroLeftWrapper>
        <IntroLeftH1 color="red">
          Better design,
          <IntroLeftSpan>better experiences.</IntroLeftSpan>
        </IntroLeftH1>
        <IntroLeftP>
          As a developer and UI/UX web designer, I understand the perfect user
          interface should look good and work even better.
        </IntroLeftP>
      </IntroLeftWrapper>
    </IntroContainer>
  );
}
