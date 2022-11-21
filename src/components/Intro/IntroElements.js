import styled from "styled-components";

export const IntroContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  border-bottom: 0.5px solid gray;

  @media screen and (max-width: 768px) {
    display: grid;
  }
`;

export const IntroLeftWrapper = styled.div`
  justify-content: center;
  background: #090909;
  flex: 60%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    /* height: 50vh; */
  }
`;

export const IntroLeftH1 = styled.h1`
  max-width: 520px;
  font-family: "Poppins";
  margin-left: 10%;
  margin-bottom: 40px;
  color: #fff;
  font-size: 36px;

  @media screen and (max-width: 768px) {
    margin-left: 10%;
    font-size: 2em;
  }
`;

export const IntroLeftSpan = styled.span`
  display: block;
  overflow-y: hidden;
`;

export const IntroLeftP = styled.p`
  font-family: "Poppins";
  margin-left: 10%;
  margin-right: 10%;
  font-size: 18px;
  color: #fff;
  max-width: 420px;

  @media screen and (max-width: 768px) {
    margin-left: 10%;
  }
`;

export const IntroRightWrapper = styled.div`
  flex: 30%;
  /* background-position: center; */
  background-repeat: no-repeat;
  background-size: cover;

  /* @media screen and (max-width: 768px) {
    height: 40vh;
  } */
`;
