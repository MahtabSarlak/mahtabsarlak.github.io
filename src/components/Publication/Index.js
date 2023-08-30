import React from "react";
import "../../style.css";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import PubCard from "./PubCards";
import Particle from "../Particle";
import car from "../../Assets/project/car.png";
import color from "../../Assets/project/color.png";
import Fade from 'react-reveal/Fade';
import ea from "../../Assets/project/ea2.jpg";
import ana from "../../Assets/project/ana.png";
import face from "../../Assets/project/fa.jpg";
import app from "../../Assets/project/app.jpg";
import verb from "../../Assets/project/verb.png";
import seg from "../../Assets/project/seg.jpeg";
import stock from "../../Assets/project/stock.jpeg";
import hashtag2 from "../../Assets/project/hashtag2.jpeg";
import myImg from "../../Assets/project/pub.jpg";
import Slide from 'react-reveal/Slide';
import {
  AiFillGithub,
  AiFillMail,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Publication() {
  return (
    <Container fluid className="pub_section" id="publication">
      <Container style={{ paddingBottom: '11rem'}}>
      <Particle />
      <Row className="section__row">
      <Slide left>
          <h1 className="section__heading">
          My  <strong className="section__blue">Publication </strong>
        </h1>
        </Slide>
        <Slide left>
        </Slide>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }} gutter={[16, 24]}>
            <Col lg={4} md={4} sm={12} xs={12} className="pub_card">
            <PubCard
              imgPath={hashtag2}
              isBlog={false}
              title="Predicting Compositionality of Verbal Multiword Expressions in Persian"
              description="Proceedings of the 19th Workshop on Multiword Expressions (MWE 2023) "
              msg="Mahtab Sarlak, Yalda Yarandi, and Mehrnoush Shamsfard"
              class="pub_card__view--btn_position"
              ghLink="https://aclanthology.org/2023.mwe-1.5/"  
            />
          </Col>
            <Col md={8} sm={12} xs={12} className="pub_card">
        <Fade left>
            <Tilt>
              <img src={myImg} className="pub_card__view__img" alt="verb img" style={{Width:"100%"}} />
            </Tilt>
            </Fade>
          </Col>
          </Row>
      </Row>
      </Container>
    </Container>
   
  );
}
export default Publication;
