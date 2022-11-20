import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  display: flex;
  height: 100px;
  z-index: 999;
  background: #f1f2f2;
  border-bottom: 0.5px solid grey;
  align-items: center;
  /* justify-content: space-between; */
  /* justify-content: flex-start; */
  gap: 2rem;
`;

export const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-family: "Space Mono";
  gap: 10px;
  margin-left: 2rem;
  text-transform: uppercase;
`;

export const Img = styled.img`
  height: 60px;
  width: 60px;
`;

export const NavLinksWrapper = styled.div`
  display: flex;
  margin-right: 2rem;
  color: black;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLinks = styled(Link)`
  font-family: "Poppins";
  color: #090909;
  text-decoration: none;
  position: relative;
  text-transform: uppercase;
  font-size: 18px;
  cursor: pointer;
  padding: 0 2rem;
  font-weight: bold;

  &:hover {
    text-decoration: 1px solid #090990 underline;
  }
`;
