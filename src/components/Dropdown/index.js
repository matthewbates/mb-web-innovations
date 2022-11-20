import React from "react";
import { DropdownContainer, DropdownUl, NavLink } from "./DropdownElements";

export default function Dropdown({ isOpen, toggleDropdown, closeDropdown }) {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggleDropdown}>
      <DropdownUl>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/reviews">Reviews</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </DropdownUl>
    </DropdownContainer>
  );
}
