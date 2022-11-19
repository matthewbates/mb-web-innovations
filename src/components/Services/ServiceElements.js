import styled from "styled-components";

export const Container = styled.div`
  background: gray;
  height: 100%;
  width: 100vw;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  text-align: center;
  gap: 2rem;
  justify-content: space-evenly;
`;

export const FlexItems = styled.div`
  margin-top: 2rem;
`;

export const Img = styled.img`
  width: 250px;
  height: 250px;
  justify-content: center;
`;

export const H2 = styled.h2`
  max-width: 260px;
  margin-top: 20px;
  font-family: "Poppins";
  justify-content: center;
`;

export const P = styled.p`
  width: 100%;
  max-width: 250px;
  margin-top: 20px;
  margin-bottom: 2rem;
  font-family: "Lato";
  text-align: center;
`;
