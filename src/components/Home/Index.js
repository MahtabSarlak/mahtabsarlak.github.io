import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import About from "../About/Index";
import Resume from "../Resume/Index";
import Skills from "../Skills/Index";
import Project from "../Project/Index";
import Contact from "../Contact/Index"
import Type from "./Type";
import {
  AiOutlineDownload,
} from "react-icons/ai";
import ResumeNew from "../Resume/Index";
import Certificate from "../certificate/Index";

function Home() {
  return (
    <section>
      <Container fluid className="home_section" id="home">
        <Particle />
        <Container className="home_section__content">
          <Row>
            <Col md={8} className="home_section__header">
              <h1 className="home_section__header__heading">
                Hi There!{" "}
                <span className="home_section__header__wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="home_section__header__heading_name">
                I'M
                <strong className="home_section__header__main_name"> Mahtab Sarlak</strong>
              </h1>

              <div className="home_section__header__type">
                <Type />
              </div>
            </Col>
            <Col md={4} style={{ paddingBottom: 0 }}>
              <img
                src="https://media.giphy.com/media/f6hnhHkks8bk4jwjh3/giphy.gif"
                alt="home pic"
                className="home_section__header__img_fluid"
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
      <Contact />
    </section>
  );
}

export default Home;
