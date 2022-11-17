import React, { useState, useEffect } from "react";
import {
  NavbarContainer,
  ImgWrapper,
  Img,
  NavLinksWrapper,
  NavbarButton,
} from "./NavbarElements";
import { navbarLinks } from "./data";
import logo from "../../assets/favicon.png";
import HeaderNavLinks from "../HeaderNavLinks";
import Burger from "../Burger";
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
      <ImgWrapper>
        <Img src={logo} alt="logo" />
      </ImgWrapper>
      <NavLinksWrapper>
        {navbarLinks.map((item, id) => (
          <HeaderNavLinks key={id} title={item.to} />
        ))}
      </NavLinksWrapper>
      <Burger isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Dropdown isOpen={isOpen} toggleDropdown={toggleDropdown} />
      <NavbarButton>Contact</NavbarButton>
    </NavbarContainer>
  );
}
