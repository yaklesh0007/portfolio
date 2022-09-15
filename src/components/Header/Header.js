import React, { useState } from "react";
import "./Header.css";
import { Navbar, Container, Nav, Card } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import icongap from "../../images/icongap.png";
import mypic from "../../images/mypic.jpg"
import ArticleIcon from "@mui/icons-material/Article";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Avatar from '@mui/material/Avatar';
export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="header">
      <Navbar bg="dark" expand="lg" variant="dark" className="sticky-top">
        <Container>
          <Navbar.Brand className="brand">
            <img src={icongap} alt="icon"  />
            <span id="brandname"> Aklesh Yadav </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="navs">
              <Nav.Link className="link" href="/">
                About Me
              </Nav.Link>
              <Nav.Link
                className="link"
                href="resume.pdf"
                download="resume.pdf"
              >
                Resume
              </Nav.Link>
              <Nav.Link className="link" href="projects">
                Projects
              </Nav.Link>
              <Nav.Link className="link" href="skills">
                Skills
              </Nav.Link>
              <Nav.Link className="link" href="testimonials">
                Testimonials
              </Nav.Link>
              <Nav.Link className="link" href="contact">
                Contact Me
              </Nav.Link>
              <Nav.Link className="link" href="#">
                <ArticleIcon onClick={handleShow} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title >Aklesh Yadav</Offcanvas.Title>
        </Offcanvas.Header>
        
        <Offcanvas.Body>
        <Card className="imgcircle">
          <img src={mypic} alt="aklesh yadav" />
          <div className="flex-box">
          <Avatar sx={{ m: 1, bgcolor: 'aliceblue' }}>
              <GitHubIcon  sx={{color:'green'}}/>
            </Avatar>
            <Avatar sx={{ m: 1, bgcolor: 'aliceblue' }}>
              <FacebookIcon sx={{color:'blue'}}/>
            </Avatar>
            <Avatar sx={{ m: 1, bgcolor: 'aliceblue', }}>
              <LinkedInIcon  sx={{color:'navy'}}/>
            </Avatar>
            <Avatar sx={{ m: 1, bgcolor: 'aliceblue', }}>
              <InstagramIcon sx={{color:'pink'}}/>
            </Avatar>
          </div>
          <hr />
          <p>Phone: 9817403494</p>
          <p>Email: <span >yaklesh0007@gmail.com</span></p>
          </Card>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
