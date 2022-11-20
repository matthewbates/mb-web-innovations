import styled from "styled-components";

export const DotsContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  top: 90%;
  justify-content: center;

  .dot {
    cursor: pointer;
    height: 0.3rem;
    width: 2rem;
    margin: 0px 12px;
    background-color: darkgray;
    display: inline-block;
  }

  .active-dot,
  .dot:hover {
    background-color: #fff;
  }
`;

export const DotsWrapper = styled.span`
  .dot {
    cursor: pointer;
    height: 0.5rem;
    width: 0.5rem;
    margin: 0px 8px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    display: inline-block;
  }
`;
