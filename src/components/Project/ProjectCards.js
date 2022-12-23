import React from "react";
import {Card, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Fade from 'react-reveal/Fade';

function ProjectCards(props) {
  return (
    <Fade bottom>
    <Card className="project_card__view" justify="center">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <br/>
        <div className={props.class} justify="center">
        {props.isBlog ? (<Button className="cta-btn">
          {props.msg}
        </Button>) : (<Button href={props.ghLink} className="cta-btn">
          <BsGithub /> &nbsp;
           GitHub
        </Button>)
       
        }
        </div>
        {"\n"}
        {"\n"}
      </Card.Body>
    </Card>
    </Fade>
  );
}
export default ProjectCards;
