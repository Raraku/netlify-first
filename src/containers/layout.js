import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
  Jumbotron,
  Row,
  Carousel
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { all } from "q";
import image from "../logo192.png";
import image2 from "../logo.svg";
import Home from "./home";

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Navbar fixed="top" className="chosentheme" expand="lg" variant="dark">
          <NavbarBrand href="/">My Portfolio</NavbarBrand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="mr-auto">
              <Nav.Link>Home</Nav.Link>
              <NavDropdown title="Featured Features">
                <NavDropdown.Item href="#"></NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>Products</Nav.Link>
              <Nav.Link>Chat-room</Nav.Link>
              <Nav.Link>Tables</Nav.Link>
              <Nav.Link>Customer Testimonials</Nav.Link>
              <Nav.Link>Contact Me</Nav.Link>
              <Nav.Link>About</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="justify-right">Login</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-light">
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <Container>
          <Home />
        </Container>
        <Navbar fluid className="chosentheme" variant="dark">
          <NavbarBrand href="/">
            <img src={image} height="50rem" />
          </NavbarBrand>
        </Navbar>
      </div>
    );
  }
}
