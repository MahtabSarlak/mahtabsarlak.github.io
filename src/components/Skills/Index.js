import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";
import Fade from 'react-reveal/Fade';
import {
  AiFillGithub,
  AiFillMail,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Skills() {
  const skills = [{
    name: "Python/Pytorch/Tenserflow",
    value: 90,
},
{
    name: "Java/SpringBoot",
    value: 85,
},
{
    name: "Javascript",
    value: 70,
},
{
    name: "React/Angular",
    value: 70,
},
];
  return (
    <Container fluid className="skill_section" id="skill">
      <Container style={{ paddingBottom: '11rem'}}>
      <Particle />
      <Row className="section__row">
          <Col md={5}>
          <Fade left>
          <h1 className="section__heading">
              Selected <span className="blue"> Skills </span>
            </h1>
            </Fade>
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
            <p className="skill_section__eng">
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
