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
  color: #f1f2f2;

  &:hover {
    transition: 200ms ease-in-out;
    color: #fff;
  }
`;
