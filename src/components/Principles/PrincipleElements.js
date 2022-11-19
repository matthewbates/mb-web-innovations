import styled from "styled-components";

export const Container = styled.div`
  background: #090909;
  color: #fff;
  width: 100vw;
  height: 100%;
`;

export const FlexContainer = styled.div`
  /* display: flex; */
  columns: 2 auto;
  break-inside: avoid;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 3rem;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const FlexItems = styled.div`
  margin-right: 10%;
  margin-left: 10%;
`;

export const H1 = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;

export const H2 = styled.h2``;

export const P = styled.p`
  max-width: 420px;
`;
