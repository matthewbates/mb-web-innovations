import styled from "styled-components";

export const CarouselContainer = styled.div`
  height: 100%;
  max-width: 100%;
  position: relative;
  overflow: hidden;
  background: #090909;
  border-bottom: 0.5px solid gray;

  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

export const H1 = styled.h1`
  text-align: center;
  /* margin-bottom: 2rem; */
  font-family: "Poppins";
  color: #fff;
  margin-top: 2rem;
  overflow-y: hidden;
  font-weight: 300;
`;
