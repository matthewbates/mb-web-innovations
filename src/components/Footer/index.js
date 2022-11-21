import React from "react";
import {
  Box,
  Row,
  H1,
  Column,
  Header,
  NavLinks,
  Container,
} from "./FooterElements";
import Copyright from "../Copyright";

export default function Footer() {
  return (
    <Box>
      <H1>MB Web Innovations</H1>
      <Container>
        <Row>
          <Column>
            <Header>Links</Header>
            <NavLinks to="/">Profile</NavLinks>
            <NavLinks to="/company">Work</NavLinks>
            <NavLinks to="/contact">Contact</NavLinks>
          </Column>
          <Column>
            <Header>Socials</Header>
            <NavLinks href="#">Facebook</NavLinks>
            <NavLinks href="#">Instagram</NavLinks>
            <NavLinks href="#">LinkedIn</NavLinks>
          </Column>
          <Column>
            <Header>Help</Header>
            <NavLinks to="#">Sitemap</NavLinks>
            <NavLinks to="#">Privacy</NavLinks>
            <NavLinks to="#">FAQ</NavLinks>
          </Column>
        </Row>
        <Copyright />
      </Container>
    </Box>
  );
}
