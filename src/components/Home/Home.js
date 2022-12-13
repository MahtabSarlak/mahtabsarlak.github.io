import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Home2 from "./Home2";
import pdf from "../../Assets/../Assets/Soumyajit_Behera-BIT_MESRA.pdf";
import Skills from "./Skills";
import Type from "./Type";
import {
  AiOutlineDownload,
} from "react-icons/ai";
import ResumeNew from "../Resume/ResumeNew";

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

            <Col md={4} style={{ paddingBottom: 20 }}>
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
      <ResumeNew />
      <Home2 />
      <Skills />
      
    </section>
  );
}

export default Home;
