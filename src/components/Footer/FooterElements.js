import styled from "styled-components";
import { Link as LinkRoute } from "react-router-dom";

export const Box = styled.div`
  padding: 20px;
  background: #090909;
  border-top: 0.5px solid grey;

  @media (max-width: 768px) {
    padding: 40px;
  }
`;

export const Container = styled.div`
  margin-top: 1.5rem;
  /* margin-bottom: 1.5rem; */
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 40px !important;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 65px;
  margin-right: 66px;
  justify-content: center;

  align-items: center;

  @media screen and (max-width: 768px) {
    /* margin-left: 30px; */
  }
`;

export const Header = styled.div`
  color: #fff;
  font-family: "Poppins";
  line-height: 2rem;
  margin-bottom: 20px;
`;

export const H1 = styled.h1`
  font-size: 38px;
  font-family: "Poppins";
  color: #fff;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 4rem;
`;

export const P = styled.p`
  font-family: "Lato";
  font-weight: 300;
  color: #fff;
  margin-bottom: 10px;
  text-decoration: none;
  position: relative;
  text-transform: uppercase;
  font-size: 14px;
`;

export const NavLinks = styled(LinkRoute)`
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

export const Contact = styled.a`
  font-family: "Lato";
  color: #fff;
  margin-bottom: 20px;
  text-decoration: none;
  line-height: 30px;
  font-weight: 300;
  font-size: 14px;

  &:hover {
    text-decoration: 1px solid underline;
  }
`;
