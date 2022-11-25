import gsap from "gsap";
import { navbarLinks } from "./data";
import React, { useState, useEffect } from "react";
import {
  NavbarContainer,
  ImgWrapper,
  Img,
  NavLinksWrapper,
  NavLinks,
} from "./NavbarElements";
import logo from "../../assets/favicon.png";
import HeaderNavLinks from "../HeaderNavLinks";
import Burger from "../Burger";
import Dropdown from "../Dropdown";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const onResize = (e) => {
    return e.currentTarget.innerWidth > 768 ? setIsOpen(false) : null;
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  });

  // close the dropdown after 800ms when a link is clicked
  const closeDropdown = () => {
    setTimeout(() => setIsOpen(false), 800);
  };

  return (
    <NavbarContainer>
      <ImgWrapper>
        <Img className="logo" src={logo} alt="logo" />
      </ImgWrapper>
      <NavLinksWrapper>
        {navbarLinks.map((item, index) => (
          <HeaderNavLinks key={index} title={item.to} />
        ))}
      </NavLinksWrapper>
      <Burger isOpen={isOpen} toggleDropdown={toggleDropdown} />
      <Dropdown
        isOpen={isOpen}
        toggleDropdown={toggleDropdown}
        closeDropdown={closeDropdown}
      />
    </NavbarContainer>
  );
}
