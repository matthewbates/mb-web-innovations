import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  height: 100px;
  z-index: 999;
  background: #f1f2f2;
  border-bottom: 0.5px solid grey;
  align-items: center;
  /* justify-content: space-between; */
  justify-content: flex-start;
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

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
