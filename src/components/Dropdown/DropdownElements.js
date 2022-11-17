import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: fixed;
  z-index: ${({ isOpen }) => (isOpen ? 1 : -1)};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
`;
