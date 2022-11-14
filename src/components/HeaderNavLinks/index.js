import React from "react";
import {
  HeaderLinksContainer,
  HeaderLinkScroll,
} from "./HeaderNavLinkElements";

export default function HeaderNavLinks({ title, classes }) {
  return (
    <HeaderLinksContainer>
      <HeaderLinkScroll
        to={title}
        spy={true}
        duration={500}
        offset={0}
        smooth={true}
        className={classes}
        activeClass="active"
      >
        {title}
      </HeaderLinkScroll>
    </HeaderLinksContainer>
  );
}
