import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">LifeLink</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/emergency">Emergency</Nav.Link>
        <Nav.Link as={Link} to="/hospital">Hospitals</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
