import { Box, Container } from "@mui/material";
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import mypic from "../../images/mypic.jpg";
import "./About.css";

export default function About() {
  const [Data,setData]=useState([{'name':'FullStack development'},{'name':'Web Development'},{'name':'Database Design and development'},{'name':'Mobile Application'}])
  return (
    <div className="about">
      <Container>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <Box className="myimage">
              <img src={mypic} alt="aklesh yadav" />
            </Box>
          </div>
          <div className="col-md-6 col-sm-6">
            <Card className="text-center">
              
                <Card.Title className="">Hi, I'm <span id="firstname">Aklesh</span><span id="lastname">yadav</span>.</Card.Title>
                <Card.Text className="">
                      Profund to <span id="api">API development </span> as well as <span id="web">web development </span>                
                </Card.Text>
                {
                  Data.map(info=>
                    <Card.Text id="showtext">{info.name}</Card.Text>
                  )
                }
                
                <Card.Text><Link to='/contact' className="btn btn-success mt-4 mb-4" display="block">Hire me</Link></Card.Text>
              
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
