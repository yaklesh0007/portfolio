import React from "react";
import { Container, ProgressBar } from "react-bootstrap";
import "./Skills.css";
import BrushIcon from "@mui/icons-material/Brush";
import TerminalIcon from "@mui/icons-material/Terminal";
import TabletMacIcon from "@mui/icons-material/TabletMac";
export default function Skill() {
  return (
    <>
      <Container className="skillspage">
        <h2 className="skillsheading">My Skills</h2>
        <span className="txth2">
          "I like to design and development beautiful website"
        </span>
        <hr />
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="left">
              <div className="row txtrow">
                <div className="col-md-2 skillicon">
                  <BrushIcon className="brushicon" fontSize="large" />
                </div>
                <div className="col-md-10">
                  <h3 className="skillsh3">Design and Development</h3>
                  <p className="txth2">
                    Clean, modern desing and development of product
                  </p>
                </div>
              </div>
              <div className="row txtrow">
                <div className="col-md-2 skillicon">
                  <TerminalIcon className="brushicon" fontSize="large" />
                </div>
                <div className="col-md-10">
                  <h3 className="skillsh3">Technology</h3>
                  <p className="txth2">
                    Combined all the latest technologies to a progressive design
                  </p>
                </div>
              </div>
              <div className="row txtrow">
                <div className="col-md-2 skillicon">
                  <TabletMacIcon className="brushicon" fontSize="large" />
                </div>
                <div className="col-md-10">
                  <h3 className="skillsh3">Responsive</h3>
                  <p className="txth2">
                    Responsive desing makes assesible to the user regardless of
                    their device
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <ProgressBar className="mb-2 pgb">
              <ProgressBar key={1} variant="success" now={75} label={"HTML"} />
              <ProgressBar
                key={2}
                variant="white"
                now={25}
                className="text-primary"
                label={`75%`}
              />
            </ProgressBar>
            <ProgressBar className="mb-2 pgb">
              <ProgressBar key={1} variant="info" now={60} label={"CSS"} />
              <ProgressBar
                key={2}
                variant="white"
                now={40}
                className="text-primary"
                label={`60%`}
              />
            </ProgressBar>
            <ProgressBar className="mb-2 pgb">
              <ProgressBar
                key={1}
                variant="warning"
                now={70}
                label={"Bootstrap"}
              />
              <ProgressBar
                key={2}
                variant="white"
                now={30}
                className="text-primary"
                label={`70%`}
              />
            </ProgressBar>
            <ProgressBar className="mb-2 pgb">
              <ProgressBar key={1} now={80} label={"Javascript"} />
              <ProgressBar
                key={2}
                variant="white"
                now={20}
                className="text-primary"
                label={`20%`}
              />
            </ProgressBar>
            <ProgressBar className="mb-2 pgb">
              <ProgressBar key={1} variant="info" now={90} label={"NodeJs"} />
              <ProgressBar
                key={2}
                variant="white"
                now={10}
                className="text-primary"
                label={`90%`}
              />
            </ProgressBar>
            <ProgressBar className="mb-2 pgb">
              <ProgressBar
                key={1}
                variant="success"
                now={80}
                label={"ExpressJs"}
              />
              <ProgressBar
                key={2}
                variant="white"
                now={20}
                className="text-primary"
                label={`80%`}
              />
            </ProgressBar>
            <ProgressBar className="mb-2 pgb">
              <ProgressBar
                key={1}
                variant="primary"
                now={75}
                label={"MongoDb"}
              />
              <ProgressBar
                key={2}
                variant="white"
                now={25}
                className="text-primary"
                label={`75%`}
              />
            </ProgressBar>
            <ProgressBar className="mb-2 pgb">
              <ProgressBar
                key={1}
                variant="warning"
                now={75}
                label={"ReactJs"}
              />
              <ProgressBar
                key={2}
                variant="white"
                now={25}
                className="text-primary"
                label={`75%`}
              />
            </ProgressBar>
            <ProgressBar className="mb-2 pgb">
              <ProgressBar key={1} variant="success" now={70} label={"Git"} />
              <ProgressBar
                key={2}
                variant="white"
                now={30}
                className="text-primary"
                label={`70%`}
              />
            </ProgressBar>
            <ProgressBar className="mb-2 pgb">
              <ProgressBar key={1} variant="info" now={80} label={"Mysql"} />
              <ProgressBar
                key={2}
                variant="white"
                now={20}
                className="text-primary"
                label={`80%`}
              />
            </ProgressBar>
          </div>
        </div>
      </Container>
    </>
  );
}
