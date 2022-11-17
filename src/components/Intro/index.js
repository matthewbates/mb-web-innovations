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
        <IntroLeftH1>
          Better design,
          <IntroLeftSpan>better experiences.</IntroLeftSpan>
        </IntroLeftH1>
        <IntroLeftP>
          As a developer and UI/UX web designer, I understand the perfect user
          interface should look good and work even better. In short, I create
          bolder online experiences.
        </IntroLeftP>
      </IntroLeftWrapper>
      <IntroRightWrapper
        style={{ backgroundImage: `url(${POSTER})` }}
      ></IntroRightWrapper>
    </IntroContainer>

    // <HeroContainer>
    //   <TextContainer>
    //     <TextWrapper>
    //       <Text>
    //         <TextH1>
    //           Better design.
    //           <TextSpan style={{ display: "block" }}>
    //             Better experiences.
    //           </TextSpan>
    //         </TextH1>
    //         <TextP>
    // As a designer and developer, I understand the perfect user
    // interface should look good and work even better. Alongside my
    // clients, I uncover problems and solve them. In short, I create
    // bolder online experiences.
    //         </TextP>
    //       </Text>
    //     </TextWrapper>
    //   </TextContainer>
    //   <ImgWrapper>
    //     <HeroImg src={poster} alt="image" />
    //   </ImgWrapper>
    // </HeroContainer>
  );
}
