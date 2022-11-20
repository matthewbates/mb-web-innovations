import React from "react";
import {
  IntroContainer,
  IntroLeftWrapper,
  IntroLeftH1,
  IntroLeftP,
  IntroLeftSpan,
  IntroRightWrapper,
  // HeroContainer,
  // TextContainer,
  // TextWrapper,
  // Text,
  // TextH1,
  // TextSpan,
  // TextP,
  // ImgWrapper,
  // HeroImg,
} from "./IntroElements";
import POSTER from "../../assets/poster.jpeg";

export default function Intro() {
  return (
    <IntroContainer>
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
      {/* <IntroRightWrapper
        style={{ backgroundImage: `url(${POSTER})` }}
      ></IntroRightWrapper> */}
    </IntroContainer>
  );
}
