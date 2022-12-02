import styled from "styled-components";

export const IntroContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  /* border-bottom: 0.5px solid gray; */
  position: relative;

  @media screen and (max-width: 768px) {
    display: grid;
  }
`;

export const Img = styled.img`
  height: 100vh;
  object-fit: cover;
`;

export const Wrapper = styled.div`
  color: #fff;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const IntroLeftWrapper = styled.div`
  justify-content: center;
  background: #090909;
  display: flex;
  /* flex-direction: column; */

  @media screen and (max-width: 768px) {
    /* height: 50vh; */
  }
`;

export const IntroLeftH1 = styled.h1`
  color: #fff;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 46px;
  line-height: 60px;

  @media screen and (max-width: 768px) {
    font-size: 28px;
    line-height: 40px;
  }

  @media screen and (max-width: 420px) {
    margin-left: auto;
    margin-right: auto;
    font-size: 24px;
    max-width: 420px;
  }
`;

export const IntroLeftSpan = styled.span`
  display: block;
  overflow-y: hidden;
`;

export const IntroLeftP = styled.p`
  position: absolute;
  font-family: "Poppins";
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
  color: #fff;

  @media screen and (max-width: 768px) {
    margin-left: 10%;
  }
`;
