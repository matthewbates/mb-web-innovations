import styled from "styled-components";
import POSTER from "../../assets/poster.jpeg";

export const IntroContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;

  @media screen and (max-width: 768px) {
    display: grid;
  }
`;

export const IntroLeftWrapper = styled.div`
  justify-content: center;
  background: #a9afb5;
  flex: 60%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    height: 60vh;
  }
`;

export const IntroLeftH1 = styled.h1`
  max-width: 520px;
  font-family: "Poppins";
  margin-left: 10%;
  margin-bottom: 40px;
  color: ${(props) => props.color};

  @media screen and (max-width: 768px) {
    margin-left: 5%;
    font-size: 2em;
  }
`;

export const IntroLeftSpan = styled.span`
  display: block;
`;

export const IntroLeftP = styled.p`
  font-family: "Lato";
  margin-left: 10%;
  margin-right: 10%;
  font-size: 28px;

  @media screen and (max-width: 768px) {
    margin-left: 5%;
  }
`;

export const IntroRightWrapper = styled.div`
  flex: 40%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 768px) {
    height: 40vh;
  }
`;
