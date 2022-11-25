import gsap from "gsap";
import { navbarLinks } from "./data";
import React, { useState, useEffect } from "react";
import {
  NavbarContainer,
  ContactLink,
  ImgWrapper,
  Img,
  NavLinksWrapper,
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

  // close the dropdown after 800ms when a link is clicked
  const closeDropdown = () => {
    setTimeout(() => setIsOpen(false), 800);
  };

  // if the page > 768px, close the dropdown
  const onResize = (e) => {
    return e.currentTarget.innerWidth > 768 ? setIsOpen(false) : null;
  };

  // logic to add/remove onResize function
  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  });

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
      <ContactLink to="Contact" smooth={true} duration={700}>
        Contact
      </ContactLink>
      <Burger isOpen={isOpen} toggleDropdown={toggleDropdown} />
      <Dropdown
        isOpen={isOpen}
        toggleDropdown={toggleDropdown}
        closeDropdown={closeDropdown}
      />
    </NavbarContainer>
  );
}
