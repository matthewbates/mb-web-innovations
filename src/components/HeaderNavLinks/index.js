import React from "react";
import {
  HeaderLinksContainer,
  HeaderLinkScroll,
} from "./HeaderNavLinkElements";

export default function HeaderNavLinks({ title }) {
  return (
    <HeaderLinksContainer>
      <HeaderLinkScroll
        to={title}
        spy={true}
        offset={0}
        smooth={true}
        duration={500}
        activeClass="active"
      >
        {title}
      </HeaderLinkScroll>
    </HeaderLinksContainer>
  );
}
