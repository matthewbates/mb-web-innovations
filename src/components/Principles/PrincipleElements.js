import styled from "styled-components";

export const Container = styled.div`
  background: #090909;
  color: #fff;
  width: 100vw;
  height: 100%;
  border-bottom: 0.5px solid grey;
`;

export const HeaderWrapper = styled.div`
  margin-bottom: 2rem;
`;

export const FlexContainer = styled.div`
  columns: 2 auto;
  flex-direction: row;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: center;
  }
`;

export const FlexItems = styled.div`
  margin-left: 5%;
  margin-right: 10%;
  padding: 2.5rem;

  @media screen and (max-width: 768px) {
    padding: 0;
    margin-right: 10%;
  }
`;

export const H1 = styled.h1`
  text-align: center;
  font-family: "Poppins";
  padding-top: 2rem;
  font-size: 32px;
`;

export const H2 = styled.h2`
  padding-bottom: 1.5rem;
  font-size: 24px;
  font-family: "Poppins";
  color: #fff;
`;

export const P = styled.p`
  font-size: 19px;
  font-family: "Lato";
  text-align: justify;
  color: #979797;
`;
