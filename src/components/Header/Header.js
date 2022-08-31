import React from "react";
import "./Header.css";

import { Navbar, Container, Nav } from "react-bootstrap";
import ArticleIcon from "@mui/icons-material/Article";
export default function Header() {
  return (
    <div className="header">
      <Navbar  bg="dark" expand="lg" variant="dark" className='sticky-top'>
        <Container>
          <Navbar.Brand className="brand">
            <ArticleIcon />
            <span id="brandname"> Portfolio </span>{" "}
          </Navbar.Brand>{" "}
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="navs">
              <Nav.Link className="link" href="/">
                {" "}
                About Me{" "}
              </Nav.Link>{" "}
              <Nav.Link className="link" href='resume.pdf' download="resume.pdf">
                {" "}
                Resume{" "}
              </Nav.Link>{" "}
              <Nav.Link className="link" href="projects">
                {" "}
                Projects{" "}
              </Nav.Link>{" "}
              <Nav.Link className="link" href="skills">
                {" "}
                Skills{" "}
              </Nav.Link>{" "}
              <Nav.Link className="link" href="testimonials">
                {" "}
                Testimonials{" "}
              </Nav.Link>{" "}
              <Nav.Link className="link" href="contact">
                {" "}
                Contact Me{" "}
              </Nav.Link>{" "}
            </Nav>{" "}
          </Navbar.Collapse>{" "}
        </Container>{" "}
      </Navbar>{" "}
    </div>
  );
}
