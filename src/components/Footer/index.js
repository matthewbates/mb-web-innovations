import React from "react";
import { Box, Row, H1, Column, NavLinks, Container } from "./FooterElements";
import Copyright from "../Copyright";

export default function Footer() {
  return (
    <Box>
      <H1>MB Web Innovations</H1>
      <Container>
        <Row>
          <Column>
            <NavLinks to="/">Profile</NavLinks>
            <NavLinks to="/company">Work</NavLinks>
            <NavLinks to="/services">Reviews</NavLinks>
            <NavLinks to="/gallery">About</NavLinks>
          </Column>
          <Column>
            <NavLinks to="/">Facebook</NavLinks>
            <NavLinks to="/company">Instagram</NavLinks>
            <NavLinks to="/services">LinkedIn</NavLinks>
          </Column>
          <Column>
            <NavLinks to="#">Sitemap</NavLinks>
            <NavLinks to="#">Privacy</NavLinks>
            <NavLinks to="#">FAQ</NavLinks>
          </Column>
          <Column>
            <iframe
              src="https://my.atlistmaps.com/map/d9d7792b-6c4b-483d-9775-6ba2a5587911?share=true"
              allow="geolocation"
              width="120%"
              height="250px"
              frameborder="0"
              scrolling="no"
              allowfullscreen
            ></iframe>
          </Column>
        </Row>
        <Copyright />
      </Container>
    </Box>
  );
}
