import React, { useState, useEffect } from "react";
import { NavbarContainer, NavbarA, NavLinksWrapper } from "./NavbarElements";
import Burger from "../Burger";
import HeaderNavLinks from "../HeaderNavLinks";
import { navbarLinks } from "./data";
import Dropdown from "../Dropdown";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (e) => {
    return e.currentTarget.innerWidth > 768 ? setIsOpen(false) : null;
  };

  useEffect(() => {
    window.addEventListener("resize", toggleDropdown);
    return window.removeEventListener("resize", toggleDropdown);
  });

  return (
    <NavbarContainer>
      <NavLinksWrapper>
        {navbarLinks.map((item, id) => (
          <HeaderNavLinks key={id} title={item.to} />
        ))}
      </NavLinksWrapper>
      <>
        <Burger isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <div
          style={{
            zIndex: isOpen ? 1 : -1,
            top: 0,
            right: 0,
            position: "fixed",
          }}
        >
          <Dropdown isOpen={isOpen} toggleDropdown={toggleDropdown} />
        </div>
      </>
    </NavbarContainer>
  );
}
