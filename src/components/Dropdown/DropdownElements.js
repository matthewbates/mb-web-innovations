import styled from "styled-components";
import { Link } from "react-scroll";

export const DropdownContainer = styled.div`
  position: fixed;
  z-index: ${({ isOpen }) => (isOpen ? 1 : -1)};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #0d0d0d;
  align-items: center;
  display: grid;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
`;

export const DropdownUl = styled.ul`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  font-size: 18px;
  margin-right: 3rem;
`;

export const NavLink = styled(Link)`
  letter-spacing: 3px;
  font-family: "Lato";
  text-decoration: none;
  color: #fff;
`;
