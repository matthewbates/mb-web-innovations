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
  border: 1px solid #f1f2f2;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  padding: 15px;
  font-weight: 900;
  font-size: 14px;
  letter-spacing: 5px;
  transition: transform 0.25s;
  margin-top: 1rem;
  background: transparent;
  color: #f1f2f2;
  font-family: "Poppins";

  &:hover {
    box-shadow: none;
    transition: 200ms ease-in;
    background: #f1f2f2;
    color: #090909;
  }
`;

export const H1 = styled.h1`
  font-size: 70px;
  overflow-y: hidden;

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
