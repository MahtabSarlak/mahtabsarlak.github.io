import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import {
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Contact() {
  return (
    <Container fluid className="contact_section" id="contact">
    <Container>
    <Particle/>
      <Row justify="center">
        <Col style={{paddingBottom: '3rem'}}>
        <Bounce left>
        <h1 className="section__heading">
              Contact
            </h1>
            </Bounce>
            <Fade >
            <p>
            
            Have a project to discuss?
            <br/>
            Don't hesitate to send an Email to me.
        </p>
        </Fade>
        </Col>
        </Row>
        <Row>
        <Col  >
        <Button
            href={"mailto:sarlak3@gmail.com"}
            style={{ maxWidth: "250px" }}
            className='contact_section__btn'
          >
            <AiFillMail />
            &nbsp; Email me!
          </Button>
          </Col>
</Row>
      </Container>
      </Container>
  );
}
export default Contact;
