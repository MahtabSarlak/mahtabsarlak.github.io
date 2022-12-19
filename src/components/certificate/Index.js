import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import img1 from "../../Assets/mb.png";
import img2 from "../../Assets/nlp.png";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";
import {
  AiFillGithub,
  AiFillMail,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Certificate() {
  return (
    <Container fluid className="certificate-section" id="certificate">
    <Container>
    <Particle/>
      <Row >
        <Col md={8} style={{paddingBottom: '3rem'}}>
            <h1 style={{ fontSize: "2.6em"  }}>
              Certificate
            </h1>
            </Col>
            <Col md={12}>
      <Carousel>
      <Carousel.Item>
        <img
          className="slide_img"
          src={img2}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slide_img"
          src={img1}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
</Col>
</Row>
      </Container>
      </Container>
  );
}
export default Certificate;
