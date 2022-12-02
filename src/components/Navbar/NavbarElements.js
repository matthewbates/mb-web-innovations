import styled from "styled-components";
import { Link } from "react-scroll";

export const NavbarContainer = styled.div`
  display: flex;
  position: fixed;
  height: 100px;
  width: 100%;
  z-index: 999;
  background: #f1f2f2;
  border-bottom: 0.5px solid grey;
  align-items: center;
  justify-content: space-between;
  /* justify-content: flex-start; */
  gap: 2rem;
`;

export const ContactLink = styled(Link)`
  margin-right: 2rem;
  text-decoration: none;
  color: #090909;
  padding: 8px;
  border-radius: 20px;
  font-family: "Poppins";
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: none;
  }

  &:hover {
    background: #090909;
    color: #fff;
    transition: 200ms ease-in-out;
  }
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
  height: 35px;
  width: 35px;
`;

export const NavLinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-right: 2rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
