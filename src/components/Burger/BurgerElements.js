import styled from "styled-components";

export const BurgerContainer = styled.div`
  display: none;
  z-index: 999;
  width: 1.5rem;
  height: 1.5rem;
  /* display: flex; */
  flex-flow: column nowrap;
  justify-content: space-around;
  cursor: pointer;
  overflow-y: hidden;

  @media screen and (max-width: 767px) {
    display: flex;
    color: #fff;
  }

  div {
    width: 1.5rem;
    height: 0.15rem;
    background: ${({ isOpen }) => (isOpen ? "#fff" : "#090909")};
    border-radius: 20px;
    transform-origin: 1px;
    transition: all 0.4s linear;
    &:nth-child(1) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
      transition: 0.1s;
    }
    &:nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
