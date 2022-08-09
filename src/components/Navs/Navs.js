import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navs.css';
import logo from './../../assets/logo.png';

function Navs() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo } alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="links">Home</Nav.Link>
            <Nav.Link className="links">About US</Nav.Link>
            <Nav.Link className="links">Explore Foods</Nav.Link>
            <Nav.Link className="links">Reviews</Nav.Link>
            <Nav.Link className="links">FAQ</Nav.Link>
          </Nav>
          <Nav>
            <Nav className="number"> 1800 789 123</Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navs;