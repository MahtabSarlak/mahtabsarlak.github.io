import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import About from "../About/Index";
import Resume from "../Resume/Index";
import pdf from "../../Assets/../Assets/Soumyajit_Behera-BIT_MESRA.pdf";
import Skills from "../Skills/Index";
import Project from "../Project/Index";
import Type from "./Type";
import {
  AiOutlineDownload,
} from "react-icons/ai";
import ResumeNew from "../Resume/Index";
import Certificate from "../certificate/Index";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={8} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Mahtab Sarlak</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={4} style={{ paddingBottom: 0 }}>
              <img
                src="https://media.giphy.com/media/f6hnhHkks8bk4jwjh3/giphy.gif"
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Resume />
      <About />
      <Skills />
      <Certificate />
      <Project />
    </section>
  );
}

export default Home;
