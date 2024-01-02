import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

function CustomNavbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    // Navigate to the search results page with the search query as a query parameter
    navigate(`/search?query=${searchQuery}`);
  };
  return (
    <Navbar expand="lg" className="sticky-top">
      <Container>
        <Navbar.Brand as={Link} to="/">Moew Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/HomePage">Home</Nav.Link>
            <Nav.Link as={Link} to="/desktop">Desktop</Nav.Link>
            <Nav.Link as={Link} to="/laptop">Laptop</Nav.Link>
            {/* <Nav.Link as={Link} to="/mac">Mac</Nav.Link> */}
            <NavDropdown title="PC Part" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">CPU</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">GPU</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Ram</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Storage</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">MotherBoard</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Power Supply </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Monitor</NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link as={Link} to="/accessories">Accessories</Nav.Link>
            <Nav.Link href="#service">Service</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            
          </Nav>
          <Form onSubmit={handleSearch} className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button variant="outline-success" type="submit">Search</Button>
            </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
