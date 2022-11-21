import styled from "styled-components";
import { Link } from "react-scroll";

export const HeaderLinksContainer = styled.div`
  overflow-y: hidden;
`;

export const HeaderLinkScroll = styled(Link)`
  cursor: pointer;
  padding: 1.4rem;
  font-family: "Space Mono";
  position: relative;
  font-size: 14px;
  margin-top: 6px;
  color: #05386b;
  font-weight: bold;
  text-transform: uppercase;

  @media screen and (min-width: 768px) and (max-width: 1000px) {
    padding: 0.8rem;
  }
`;
