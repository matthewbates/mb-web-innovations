import styled from "styled-components";

export const Container = styled.div`
  background: #090909;
  height: 100%;
  width: 100vw;
  border-bottom: 0.5px solid grey;
`;

export const HeaderContainer = styled.div`
  text-align: center;
  padding-top: 2rem;
`;

export const HeaderH1 = styled.h1`
  font-family: "Poppins";
  color: #fff;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  text-align: center;
  gap: 2rem;
  justify-content: space-evenly;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const FlexItems = styled.div`
  /* margin-top: 2rem; */
  /* margin-bottom: 2rem; */
  color: #fff;
`;

export const Img = styled.img`
  width: 250px;
  height: 250px;
  justify-content: center;
`;

export const H2 = styled.h2`
  max-width: 260px;
  font-size: 24px;
  font-family: "Poppins";
  justify-content: center;
  overflow-y: hidden;
`;

export const P = styled.p`
  width: 100%;
  line-height: 1.5rem;
  max-width: 250px;
  margin-top: 20px;
  margin-bottom: 2rem;
  font-family: "Lato";
  text-align: justify;
  font-size: 19px;
`;
