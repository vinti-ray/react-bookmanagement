import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar bg="light" expand="md">
      <Navbar.Brand href="/">My Blog</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item>
            <Link to="/" className="nav-link">Home</Link>
          </Nav.Item>
          {/* <Nav.Item>
            <Link to="/about" className="nav-link">About</Link>
          </Nav.Item> */}
          {/* <Nav.Item>
            <Link to="/contact" className="nav-link">Contact</Link>
          </Nav.Item> */}
          <Nav.Item>
            <Link to="/createbook" className="nav-link">Create you own book</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/registration" className="nav-link">Sign Up</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/login" className="nav-link">Sign In</Link>
          </Nav.Item>
    
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
