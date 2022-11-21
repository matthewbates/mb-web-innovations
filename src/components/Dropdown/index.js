import React from "react";
import { DropdownContainer, DropdownUl, NavLink } from "./DropdownElements";
import NavLinks from "../NavLinks";

export default function Dropdown({ isOpen, toggleDropdown, closeDropdown }) {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggleDropdown}>
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
