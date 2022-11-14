import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  /* udate this to space-between when I add an href logo to home */
  justify-content: flex-start;
  height: 100px;
  z-index: 999;
  background: #05386b;
`;

export const NavbarA = styled.h2`
  text-decoration: none;
  cursor: pointer;
`;

export const NavLinksWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-right: 2rem;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
