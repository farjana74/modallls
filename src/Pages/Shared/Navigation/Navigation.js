import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from "../../../images/techsist logo 1.png"

const Navigation = () => {
  return (

    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Techsist</Nav.Link>
          <Nav.Link href="#pricing">Services</Nav.Link>


        </Nav>
      </Container>
    </Navbar>

  );
};

export default Navigation;