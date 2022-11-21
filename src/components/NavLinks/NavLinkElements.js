import styled from "styled-components";
import { Link } from "react-scroll";

export const LinksContainer = styled.li`
  letter-spacing: 3px;
  font-family: "Lato";
  text-decoration: none;
  color: #fff;
  color: white;

  @media screen and (max-width: 768px) {
    margin-top: 1rem;
  }
`;

export const LinkScroll = styled(Link)`
  text-decoration: none;
  color: white;

  &:hover {
    color: #979797;
  }
`;
