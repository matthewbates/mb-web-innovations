import "./App.css";
import "bulma/css/bulma.css";
import React from "react";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

export default function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <Services />
    </>
  );
}
