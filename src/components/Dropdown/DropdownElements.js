import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: fixed;
  z-index: ${({ isOpen }) => (isOpen ? 1 : -1)};
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  /* transition: 0.3s ease-in-out; */
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;
