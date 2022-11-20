import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderLinksContainer = styled.div`
  text-align: center;
`;

export const HeaderLinkRoute = styled(Link)`
  cursor: pointer;
  /* padding: 1.4rem; */
  font-family: "Poppins";
  position: relative;
  font-size: 16px;
  color: #090909;
  font-weight: bold;
  /* text-transform: uppercase; */
  padding: 0 2rem;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  text-decoration: none;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #000;
    transform-origin: bottom right;
    transition: transform 0.3s ease-out;
    transform: scaleX(0);
    transform-origin: bottom left;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

export const NavLink = styled(Link)``;
