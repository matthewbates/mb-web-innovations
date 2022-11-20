import React from "react";
import { BurgerContainer } from "./BurgerElements";

export default function Burger({ isOpen, toggleDropdown }) {
  return (
    <BurgerContainer
      isOpen={isOpen}
      onClick={toggleDropdown}
      style={{ position: "absolute", top: "2.2rem", right: "30px" }}
    >
      <div />
      <div />
      <div />
    </BurgerContainer>
  );
}
