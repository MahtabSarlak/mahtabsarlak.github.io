import React from "react";
import "../../style.css";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import car from "../../Assets/project/car.png";
import color from "../../Assets/project/color.png";
import ea from "../../Assets/project/ea2.jpg";
import ana from "../../Assets/project/ana.png";
import face from "../../Assets/project/fa.jpg";
import app from "../../Assets/project/app.jpg";
import verb from "../../Assets/project/verb.png";
import seg from "../../Assets/project/seg.jpeg";
import stock from "../../Assets/project/stock.jpeg";
import hashtag2 from "../../Assets/project/hashtag2.jpeg";
import Slide from 'react-reveal/Slide';
import {
  AiFillGithub,
  AiFillMail,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Project() {
  return (
    <Container fluid className="section" id="project">
      <Container style={{ paddingBottom: '11rem'}}>
      <Particle />
      <Row className="section__row">
      <Slide left>
          <h1 className="section__heading">
          My Recent <strong className="section__blue">Projects </strong>
        </h1>
        </Slide>
        <Slide left>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        </Slide>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col lg={3} md={4} sm={6} xs={12} className="project_card">
            <ProjectCard
              imgPath={hashtag2}
              isBlog={true}
              title="Personalized Image Tag Refinement by Leveraging KGs"
              description="Implemented a system that considers KG and user history to generate tags for social media images"
              msg="MSc thesis"
              class="project_card__view--btn_position"
            />
          </Col>

          <Col lg={3} md={4} sm={6} xs={12} className="project_card">
            <ProjectCard
              imgPath={verb}
              isBlog={true}
              title="Identification & Embedding of Persian Verbal MWEs (VMWEs)"
              description="identifying VMWEs
and generating word embedding that capture their semantic meaning"
              msg="Published research paper"
              class="project_card__view--msg_position"
            />
          </Col>
          <Col lg={3} md={4} sm={6} xs={12} className="project_card">
            <ProjectCard
              imgPath={ea}
              isBlog={false}
              title="Emergency assistant"
              description="Developed a website for informing local forces about needed supplies for affected areas
using React, NodeJs, Graphql, and Mongo-DB."
class="project_card__view--btn_position"
              ghLink="https://github.com/MahtabSarlak/InternetEngineering_course_99/tree/master/Emergency-assistant/emergencio-nodejs"         
            />
          </Col>
          <Col lg={3} md={4} sm={6} xs={12} className="project_card">
            <ProjectCard
              imgPath={car}
              isBlog={false}
              title="Counting and classifying Iraninan cars"
              description="Implemented a model based on transfer learning to classify
cars and YOLO object detection
for counting"
              ghLink="https://github.com/MahtabSarlak/Counting-classifying-car-images-using-ViT"  
              class="project_card__view--btn_position"       
            />
          </Col>
          <Col lg={3} md={4} sm={6} xs={12} className="project_card">
            <ProjectCard
              imgPath={seg}
              isBlog={false}
              title="Medical image segmentation"
              description="Segmented medical images using U-NET based models on four datasets."
              ghLink="https://github.com/MahtabSarlak/Medical-Image-Segmentation"    
              class="project_card__view--btn_position"     
            />
          </Col>
          <Col lg={3} md={4} sm={6} xs={12} className="project_card">
            <ProjectCard
              imgPath={color}
              isBlog={false}
              title="Image Colorization"
              description="Solved the image colourization task as a pixel-wise classification problem using different
U-Net-like networks."
              ghLink="https://github.com/MahtabSarlak/DL-spring2022/tree/main/hw1" 
              class="project_card__view--btn_position"        
            />
          </Col>
          <Col lg={3} md={4} sm={6} xs={12} className="project_card">
            <ProjectCard
              imgPath={stock}
              isBlog={false}
              title="Stock Price Prediction"
              description="Predicted stock price by solving a time-series problem using RNN-based networks."
              ghLink="https://github.com/MahtabSarlak/DL-spring2022/tree/main/hw3" 
              class="project_card__view--btn_position"        
            />
          </Col>
          <Col lg={3} md={4} sm={6} xs={12} className="project_card">
            <ProjectCard
              imgPath={ana}
              isBlog={false}
              title="Persian Analogy Evaluation"
              description="Introduced language models for solving SAT-based analogy tests in Persian."
              ghLink="https://github.com/MahtabSarlak/SAT-based-analogy-test-in-Persian"
              class="project_card__view--btn_position"         
            />
          </Col>
          <Col lg={3} md={4} sm={6} xs={12} className="project_card">
            <ProjectCard
              imgPath={face}
              isBlog={false}
              title="Facial expression recognition"
              description="Proposed CNN models to recognize facial expressions."
              class="project_card__view--btn_position"
              ghLink="https://github.com/MahtabSarlak/Facial-Expression-Recognition/blob/master/README.md"         
            />
          </Col>
          <Col lg={3} md={4} sm={6} xs={12} className="project_card">
            <ProjectCard
              imgPath={app}
              isBlog={false}
              title="Play store application score prediction"
              description="Predicted score that is given to an application based on user’s comment."
              class="project_card__view--btn_position"
              ghLink="https://github.com/MahtabSarlak/Data-Mining-2021"         
            />
          </Col>
        </Row>
        </Row>
      </Container>
    </Container>
  );
}
export default Project;
