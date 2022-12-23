import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/project/avatar.png";
import Tilt from "react-parallax-tilt";
import Fade from 'react-reveal/Fade';
import {
  AiFillGithub,
  AiFillMail,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function About() {
  return (
    <Container fluid className="section" id="about">
      <Container>
        <Row>
        <Col md={4} className="myAvtar">
        <Fade left>
            <Tilt>
              <img src={myImg} className="myAvtar__img_fluid" alt="avatar" />
            </Tilt>
            </Fade>
          </Col>
          
          <Col md={8} className=" ">
          <Fade left cascade>
          <div>
            <h1 className="section__heading">
              LET ME <span className="blue"> INTRODUCE </span> MYSELF
            </h1>
            <p className="about__body">
            I am a Master of Science (M.S.) student in Artificial Intelligence at Shahid Beheshti University, Tehran, Iran, and I completed my B.Sc. in Computer Engineering there with a GPA of 3.93/4. 
            <br/  >
            I joined the <b className="blue">NLP lab</b> during the third year of my BSc studies, where we worked on “identification and word embedding of Persian verbal multiword expressions”. 
            <br/>
            Currently, I as a <b className="blue">Computer Vision researcher</b>, I am working on my MSc thesis entitled “Personalized Image Tag Refinement by Leveraging Knowledge Graphs(KGs)”. 
            <br/>
            During the past three years I gained more experience in the industry by working as a <b className="blue">Front-End developer</b>.
            I am interested in developing web applications with Javascript libraries and frameworks like <b className="blue">React</b> and <b className="blue">Angular</b>.              
            <br/>
            <br/>
            Regarding research interest, I am genuinely passionate about using NLP and Computer Vision techniques to address a wide range of theoretical and application issues, such as improving the performance of multimodal representation learning methods, and recommender systems.
            </p>
            </div>
            </Fade>
            </Col>
        </Row>
        
      </Container>
    </Container>
  );
}
export default About;
