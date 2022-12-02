import styled from "styled-components";
import { Link } from "react-scroll";

export const DropdownContainer = styled.div`
  position: fixed;
  /* z-index: ${({ isOpen }) => (isOpen ? 1 : -1)}; */
  width: 100%;
  /* height: 100%; */
  height: 30%;
  top: 0;
  left: 0;
  background: #0d0d0d;
  align-items: center;
  display: grid;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  overflow-y: hidden;
  transition: 300ms ease-in-out;
  border-bottom: 1px solid #f1f2f2;
`;

export const DropdownUl = styled.ul`
  text-align: center;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  font-size: 18px;
  margin-right: 3rem;
`;

export const NavLink = styled(Link)`
  font-family: "Lato";
  text-decoration: none;
  color: #f1f2f2;
  cursor: pointer;
`;
