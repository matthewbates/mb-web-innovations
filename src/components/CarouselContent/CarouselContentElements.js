import styled from "styled-components";

export const Container = styled.div`
  background: #090909 !important;
  color: #090909;
  height: 100%;
  padding-top: 2rem;
  padding-bottom: 3rem;
`;

export const Img = styled.img``;

export const Wrapper = styled.div`
  background: lightgray;
  margin-top: -6%;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 8%;
  padding-left: 5%;
  padding-right: 5%;
  border: 1px solid #ddd;
  height: 286px;
  overflow-y: hidden;

  @media screen and (max-width: 768px) {
    width: 80%;
    padding-top: 15%;
  }
`;

export const H3 = styled.h3`
  color: #222;
  font-weight: 100;
  letter-spacing: 0.2px;
  margin-bottom: 4px;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 17px;
`;

export const H4 = styled.h4`
  text-transform: uppercase;
  margin-top: 0;
  padding-top: 0;
  font-weight: 500;
  color: #787878;
  font-size: 14px;
`;

export const P = styled.p`
  font-weight: 100 !important;
  line-height: 29px !important;
  color: #222;
  font-size: 15px;
  font-family: sans-serif;
  padding-top: 5%;
  /* max-height: 67px; */
  overflow-y: hidden;

  &::before {
    content: "“";
    color: #aaa;
    font-size: 26px;
    font-family: monospace;
    font-weight: 100;
  }

  &::after {
    content: "”";
    color: #aaa;
    font-size: 26px;
    font-family: monospace;
    font-weight: 100;
    line-height: 0;
  }
`;
