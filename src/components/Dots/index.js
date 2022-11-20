import React from "react";
import { DotsContainer, DotsWrapper } from "./DotElements";

export default function Dots({ activeIndex, onClick, sliderImages }) {
  return (
    <DotsContainer>
      {sliderImages.map((item, index) => (
        <DotsWrapper
          key={index}
          className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
          onClick={() => onClick(index)}
        ></DotsWrapper>
      ))}
    </DotsContainer>
  );
}
