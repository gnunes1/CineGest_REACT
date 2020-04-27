import React from "react";

import { Nav, Form, FormControl, Button, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MoviesListRoute, Welcome } from "../../routes";

import "./navbar.css";

const CGNavbar = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand>
      <Link to={Welcome}>CineGest</Link>
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link>
        <Link to={MoviesListRoute} />
      </Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
);

export default CGNavbar;
