import React from "react";
import { DropdownContainer, DropdownUl, NavLink } from "./DropdownElements";
import NavLinks from "../NavLinks";

export default function Dropdown({ isOpen, closeDropdown }) {
  return (
    <DropdownContainer isOpen={isOpen}>
      <DropdownUl>
        <NavLinks closeDropdown={closeDropdown} title={"Home"} />
        <NavLinks closeDropdown={closeDropdown} title={"Services"} />
        <NavLinks closeDropdown={closeDropdown} title={"Principles"} />
        <NavLinks closeDropdown={closeDropdown} title={"Testimonials"} />
        <NavLinks closeDropdown={closeDropdown} title={"Contact"} />
      </DropdownUl>
    </DropdownContainer>
  );
}
