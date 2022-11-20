import React from "react";
import {
  HeaderLinksContainer,
  HeaderLinkScroll,
  HeaderLinkRoute,
  NavLink,
} from "./HeaderNavLinkElements";

export default function HeaderNavLinks({ title, to, classes }) {
  return (
    <HeaderLinksContainer>
      <HeaderLinkRoute to={to}>{title}</HeaderLinkRoute>
    </HeaderLinksContainer>
    // <HeaderLinksContainer>
    //   <HeaderLinkScroll
    //     to={title}
    //     spy={true}
    //     duration={500}
    //     offset={0}
    //     smooth={true}
    //     className={classes}
    //     activeClass="active"
    //   >
    //     {title}
    //   </HeaderLinkScroll>
    // </HeaderLinksContainer>
  );
}
