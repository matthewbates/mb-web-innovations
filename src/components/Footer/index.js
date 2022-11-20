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
          {/* <Column>
            <Header>Socials</Header>
            <NavLinks to="/">Facebook</NavLinks>
            <NavLinks to="/company">Instagram</NavLinks>
            <NavLinks to="/services">LinkedIn</NavLinks>
          </Column> */}
          <Column>
            <Header>Help</Header>
            <NavLinks to="#">Sitemap</NavLinks>
            <NavLinks to="#">Privacy</NavLinks>
            <NavLinks to="#">FAQ</NavLinks>
          </Column>
          <Column>
            <iframe
              src="https://my.atlistmaps.com/map/d9d7792b-6c4b-483d-9775-6ba2a5587911?share=true"
              allow="geolocation"
              width="100%"
              height="250px"
              frameBorder="0"
              scrolling="no"
              allowFullScreen
            ></iframe>
          </Column>
        </Row>
        <Copyright />
      </Container>
    </Box>
  );
}
