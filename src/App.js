import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Services from "./components/Services";
import Principles from "./components/Principles";
import Carousel from "./components/Carousel";
import GetStarted from "./components/GetStarted";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Nav } from "react-bootstrap";

export default function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <Services />
      <Principles />
      <GetStarted />
      <Carousel />
      <Contact />
      <Footer />
    </>
  );
}
