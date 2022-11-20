import styled from "styled-components";

export const Container = styled.div`
  background: #090909;
  color: #fff;
  height: 100%;
  width: 100vw;
  border-bottom: 0.5px solid gray;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 4rem;
  padding-bottom: 4rem;
`;

export const FlexItems = styled.div`
  font-family: "Poppins";
  color: #fff;
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

export const ButtonContainer = styled.div`
  margin-top: 4rem;
`;

export const Button = styled.button`
  /* margin: 0px 15px; */
  padding: 15px;
  border-radius: 20px;
  font-size: 22px;
  font-weight: 500;
  font-family: "Poppins";
  cursor: pointer;

  &:hover {
    transition: 200ms ease-in-out;
    filter: brightness(80%);
  }
`;

export const H1 = styled.h1`
  font-size: 70px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`;

export const P = styled.p`
  font-size: 32px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
