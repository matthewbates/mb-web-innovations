import React from "react";
import Intro from "../../components/Intro";
import Services from "../../components/Services";
import Principles from "../../components/Principles";
import Carousel from "../../components/Carousel";
import GetStarted from "../../components/GetStarted";

export default function Home() {
  return (
    <>
      <Intro />
      <Services />
      <Principles />
      <Carousel />
      <GetStarted />
    </>
  );
}
