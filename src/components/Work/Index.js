import React from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";
import WorkCards from "./WorkCards";
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';
import img1 from "../../Assets/work/psp1.jpg";
import img2 from "../../Assets/work/tit.png";
import img3 from "../../Assets/work/nlp.jpeg";
import img4 from "../../Assets/work/sbu.png";
import img5 from "../../Assets/work/parseme.png";

import img6 from "../../Assets/project/car.png";
import {
  AiFillGithub,
  AiFillMail,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const workExperiences = [
  {
    companyLogo: {img6}, // Replace with the actual image path
    companyName: "Pasargad Electronic Payment",
    position: "Software Developer ",
    dateFrom: "May 2023",
    dateTo: "Present",
    description:
      [
        "Developed microservices for an e-wallet project using Spring Boot",
        "Utilized Docker and Kubernetes for the DevOps cycle",
        // "Gathered project requirements, and designed architecture and use case diagrams"
      ]
  },
  {
    companyLogo: { img4 }, // Replace with the actual image path
    companyName: "Shahid Beheshti University",
    position: "Computer Vision Researcher",
    dateFrom: "Feb 2023",
    dateTo: "Feb 2024",
    description:
      [
        "Using sequence generation and KG to generate tags for social media images",
      ],
  },
  {
    companyLogo: { img5 }, // Replace with the actual image path
    companyName: "Paris-Saclay University",
    position: "NLP Researcher",
    dateFrom: "Jan 2022",
    dateTo: "Present",
    description:
      [
        "Join collaboration on Farsi PARSEME (PARSing and Multi-word Expressions) corpus",
      ],
  },
  {
    companyLogo: { img2 }, // Replace with the actual image path
    companyName: "Iran Tourism Information Technology ",
    position: "Software Developer ",
    dateFrom: "April 2020",
    dateTo: "May 2023",
    description:
      [
        "Developed microservices for payment applications using Java and Spring Boot",
        "Designed and developed UI using React.js, Angular, and Redux",
        // "Integrated message brokers and Redis for efficient communication and caching"
      ],
  },
  {
    companyLogo: { img4 }, // Replace with the actual image path
    companyName: "Shahid Beheshti University",
    position: "Machine Learning Mentor",
    dateFrom: "June 2019",
    dateTo: "Aug 2019",
  },
  {
    companyLogo: { img4 }, // Replace with the actual image path
    companyName: "Hermes institute",
    position: "English Teacher",
    dateFrom: "June 2014",
    dateTo: "Feb 2017",
  },
  // Add more job experiences as needed
];

function Work() {
  return (
    <Container fluid className="work_section" id="work">
      <Container>
        <Particle />
        <Row className="section__row">
          <Slide left>
            <h1 className="section__heading">
              My Work Experience
            </h1>
          </Slide>
          <Slide left>
          {"\n"}
          </Slide>
         <Row style={{ justifyContent: "center", paddingBottom: "10px", paddingTop: "3rem" }} gutter={[16, 24]}>
            {workExperiences.map((experience, index) => (
              <Col lg={3} md={4} sm={6} xs={12} className="work_card">
                <WorkCards
                  imgPath={experience.companyLogo}
                  title={experience.companyName}
                  position={experience.position}
                  description={experience.description}
                  dateFrom={experience.dateFrom}
                  dateTo={experience.dateTo}
                  class="work_card__view--btn_position"
                />
              </Col>
            ))}

          </Row>
        </Row>
      </Container>
    </Container>
  );
}
export default Work;
