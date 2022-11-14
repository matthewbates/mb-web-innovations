import styled from "styled-components";
import { Link } from "react-scroll";

export const HeaderLinksContainer = styled.div`
  text-align: center;
`;

export const HeaderLinkScroll = styled(Link)`
  cursor: pointer;
  padding: 1.4rem;
  font-family: "Poppins";
  position: relative;
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
`;
