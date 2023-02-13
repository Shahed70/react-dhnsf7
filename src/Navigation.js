import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar bg="dark" className="text-light" expand="lg">
      <Container>
        <Navbar.Brand className="text-light"  href="/">YOUR DOCTORS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto  text-uppercase">
            <Nav.Link className="text-light"  as={NavLink} exact to="/" activeClassName="active">
              Home
            </Nav.Link>
            <Nav.Link className="text-light"  as={NavLink} exact to="/about" activeClassName="active">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
