import styled from "styled-components";
import { Link } from "react-scroll";

export const HeaderLinksContainer = styled.div`
  overflow-y: hidden;
`;

export const HeaderLinkScroll = styled(Link)`
  cursor: pointer;
  padding: 1.4rem;
  font-family: "Poppins";
  position: relative;
  font-size: 15px;
  margin-top: 6px;
  color: #090909;
  text-decoration: none;

  &:hover {
    transition: 200ms ease-in-out;
    font-weight: bold;
    color: #090909;
  }

  @media screen and (min-width: 768px) and (max-width: 1000px) {
    padding: 0.8rem;
  }
`;
