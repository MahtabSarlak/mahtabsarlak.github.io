import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import Fade from 'react-reveal/Fade';
import { FaLinkedinIn, FaChevronUp } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
    <Row justify="center">
          <Col md={12} className="footer__social">
          <a rel="noreferrer" href="#home" class="footer__back_to_top"> 
          <FaChevronUp/> 
          </a>
          <Fade cascade>
          <h1 className="section__heading">FIND ME ON</h1>
            <ul className="footer__social__links">
              <li className="footer__social__li">
                <a
                  href="https://github.com/MahtabSarlak"
                  target="_blank"
                  rel="noreferrer"
                  className="footer__social__icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="footer__social__li">
                <a
                  href="sarlak3@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className=" footer__social__icons"
                >
                  <AiFillMail />
                </a>
              </li>
              <li className="footer__social__li">
                <a
                  href="https://www.linkedin.com/in/mahtab-sarlak-10b275161"
                  target="_blank"
                  rel="noreferrer"
                  className="footer__social__icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
            </Fade>
          </Col>
        </Row>
      <Row>
          <p className="footer__text">© Copyright  
          <a className="footer__link" target="_blank" href="https://github.com/MahtabSarlak">
          &nbsp; Mahtab Sarlak</a> | 2022</p>
      </Row>
    </Container>
  );
}

export default Footer;
