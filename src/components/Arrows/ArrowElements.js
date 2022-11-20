import styled from "styled-components";

export const ArrowsContainer = styled.div``;

export const ArrowsPrev = styled.span`
  color: #fff;
  cursor: pointer;
  position: absolute;
  top: 50%;
  padding: 1rem;
  margin-top: -3rem;
  margin-left: 5%;
  font-size: 30px;
  font-weight: bold;

  &:hover {
    border-radius: 4px;
    transition: 200ms ease-in;
    background: rgba(0, 0, 0, 0.2);
  }
`;

export const ArrowsNext = styled.span`
  color: #fff;
  cursor: pointer;
  position: absolute;
  top: 50%;
  padding: 1rem;
  margin-top: -3rem;
  margin-right: 5%;
  font-size: 30px;
  font-weight: bold;
  right: 0;

  &:hover {
    border-radius: 4px;
    transition: 200ms ease-in-out;
    background: rgba(0, 0, 0, 0.2);
  }
`;
