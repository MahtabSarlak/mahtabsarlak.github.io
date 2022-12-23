import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import img1 from "../../Assets/certificate/mb.png";
import img2 from "../../Assets/certificate/nlp.png";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import {
  AiFillGithub,
  AiFillMail,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Certificate() {
  return (
    <Container fluid className="certificate_section" id="certificate">
    <Container>
    <Particle/>
      <Row >
        <Col md={8} style={{paddingBottom: '3rem'}}>
        <Bounce left>
        <h1 className="section__heading">
              Certificate
            </h1>
            </Bounce>
            </Col>
            <Col md={12}>
      <Carousel>
      <Carousel.Item>
        <img
          className="certificate_section__slide_img"
          src={img2}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="certificate_section__slide_img"
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
