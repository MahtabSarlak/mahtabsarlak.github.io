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
              {/* <div>
                <h1 className="section__heading">
                  LET ME <span className="section__blue"> INTRODUCE </span> MYSELF
                </h1>
                <p className="about__body">
                  I am a Master of Science (M.S.) student in Artificial Intelligence at Shahid Beheshti University, Tehran, Iran, and I completed my B.Sc. in Computer Engineering there with a GPA of 3.93/4.
                  <br /><br />
                  I joined the <b className="section__blue">NLP lab</b> during the third year of my BSc studies, where we worked on compositionality of Persian verbal multiword expressions.
                  <br />
                  Currently, I as a <b className="section__blue">Computer Vision researcher</b>, I am working on my MSc thesis entitled “Personalized Image Tag Refinement by Leveraging Knowledge Graphs(KGs)”.
                  <br /> <br />
                  I bring over three years of expertise as a Java Back-End developer, specializing in crafting payment applications using <b className="section__blue">Spring Boot</b>. Additionally,
                  I have about two years of experience working with <b className="section__blue">React</b> and <b className="section__blue">Angular </b> for Front-End development.
                  This combined skill set allows me to seamlessly integrate robust back-end functionality with compelling front-end interfaces.
                  <br />
                  <br />
                  Regarding research interest, I am genuinely passionate about using NLP and Computer Vision techniques  to enhance multimodal representation learning and revolutionize recommender systems.
                </p>
              </div> */}
              <div>
                <h1 className="section__heading">
                  LET ME <span className="section__blue"> INTRODUCE </span> MYSELF
                </h1>
                <p className="about__body">
                  Hello! I’m a software engineer with over 5 years of experience in back-end development. Here’s a quick overview of my background and expertise:
                </p>
                <div>
                  <h3 className="section__left">Education</h3>
                  <ul className="section__left">
                    <li>
                      <b className="section__blue">Master’s in Artificial Intelligence and Robotics</b>, Shahid Beheshti University
                      <ul>
                        <li>Thesis: Personalized Image Tag Refinement using Knowledge Graphs</li>
                        <li>Researcher at the <em>Image Processing Lab</em>, supervised by Prof. Ebrahimi Moghadam</li>
                      </ul>
                    </li>
                    <li>
                      <b className="section__blue">Bachelor’s in Computer Engineering</b>, Shahid Beheshti University (Top 10% of class)
                      <ul>
                        <li>Thesis: Predicting the Compositionality of Verbal Multiword Expressions in Persian</li>
                        <li>Researcher at the <b className="section__blue">NLP Lab</b>, supervised by Prof. Shamsfard</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="section__left">Professional Experience</h3>
                  <ul className="section__left">
                    <li>Built microservices for e-wallet and payment applications using <b className="section__blue">Java</b> and <b className="section__blue">Spring Boot</b>.</li>
                    <li>Designed dynamic front-end interfaces with <b className="section__blue">React.js</b>, <b className="section__blue">Redux</b>, and <b className="section__blue">Angular</b>.</li>
                    <li>Utilized <b className="section__blue">Docker</b> and <b className="section__blue">Kubernetes</b> for efficient DevOps workflows.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="section__left">Research & Publications</h3>
                  <ul className="section__left">
                    <li>Published a study titled <em>Predicting Compositionality of Verbal Multiword Expressions in Persian</em> in <b className="section__blue">EACL 2023</b>.</li>
                    <li>Presented research titled <em>A Corpus of Persian Sentences Annotated with Verbal Multiword Expressions: Development and Guidelines</em> at the <b className="section__blue">3rd General Meeting of UniDive</b>.</li>
                    <li>Collaborated on the <b className="section__blue">Farsi PARSEME corpus</b> with the PARSEME Team at the University of Paris-Saclay.</li>
                  </ul>
                </div>
                <p className="section__left">
                  I’m passionate about bridging research and practical development to deliver innovative and impactful solutions. Let’s create something extraordinary together!
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
