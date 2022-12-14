import styled from "styled-components";
import { Link as LinkRoute } from "react-router-dom";

export const Box = styled.div`
  padding: 20px;
  background: #090909;

  @media (max-width: 768px) {
    padding: 40px;
  }
`;

export const Container = styled.div`
  margin-top: 1.5rem;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  text-align: center;
  justify-content: space-evenly;

  @media screen and (max-width: 820px) {
    gap: 40px !important;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 65px;
  margin-right: 66px;
  align-items: center;

  @media screen and (max-width: 768px) {
    /* margin-left: 30px; */
  }
`;

export const Header = styled.div`
  color: #fff;
  font-family: "Poppins";
  margin-bottom: 20px;
  font-size: 28px;
`;

export const H1 = styled.h1`
  font-size: 38px;
  font-family: "Poppins";
  color: #fff;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 4rem;
  overflow-y: hidden;
`;

export const NavLinks = styled.a`
  font-family: "Lato";
  font-weight: 300;
  color: #fff;
  margin-bottom: 10px;
  text-decoration: none;
  position: relative;
  text-transform: uppercase;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    text-decoration: 1px solid underline;
  }
`;
