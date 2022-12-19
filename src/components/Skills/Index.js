import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";
import {
  AiFillGithub,
  AiFillMail,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Skills() {
  const skills = [{
    name: "Python",
    value: 90,
},
{
    name: "Djano",
    value: 85,
},
{
    name: "Javascript",
    value: 80,
},
{
    name: "React",
    value: 60,
},
{
    name: "Jquery",
    value: 85,
},
];
  return (
    <Container fluid className="skill-section" id="skill">
      <Container style={{ paddingBottom: '11rem'}}>
      <Particle />
      <Row className="sec_sp">
          <Col md={5} className="home-about-description">
            <h1 style={{ fontSize: "2.6em"  }}>
              Selected <span className="blue"> Skills </span>
            </h1>
            </Col>
            <Col md={7}>
          {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
            <br/>
            <p className="skill-sec2">
            <h4>English Language Proficiency (IELTS)</h4>
            <b>Overall (8)
            </b>
            <ul>
            <li>Listening (9.0)</li>
            <li>Reading (9.0)</li>
            <li>Writing (6.5)</li>
            <li>Speaking (6.5)</li>
            </ul>
            </p>
</Col>
</Row>
      </Container>
    </Container>
  );
}
export default Skills;
