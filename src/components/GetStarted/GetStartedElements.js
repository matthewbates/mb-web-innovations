import styled from "styled-components";
import { Link } from "react-scroll";

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

export const ScrollLink = styled(Link)`
  color: #fff;
  margin-top: 4rem;
  text-decoration: none;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #05386b;
    transform-origin: bottom right;
    transition: transform 0.3s ease-out;
    transform: scaleX(0);
    transform-origin: bottom left;
  }

  &:hover {
    color: #fff;
  }

  &:hover::after {
    transform: scaleX(1);
    color: #fff;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 4rem;
`;

export const H1 = styled.h1`
  font-size: 60px;
  overflow-y: hidden;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`;

export const P = styled.p`
  font-size: 24px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
