import React from "react";
import { Card, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Fade from 'react-reveal/Fade';

function WorkCards(props) {
  const renderDescription = () => {
    if (Array.isArray(props.description)) {
      return (
        <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
          {props.description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    } else {
      // Fallback if description is not an array
      return <p>{props.description}</p>;
    }
  };
  console.log(props.imgPath)  
  return (
    
    <Fade bottom>
      <Card className="work_card__view">
        {/* Company Logo */}
        {/* <Card.Img variant="top" src={props.imgPath} alt="company-logo" className="work_card__view__img" /> */}
        
        <Card.Body>
          {/* Company Name */}
          <Card.Title>{props.title}</Card.Title>
          
          {/* Position and Dates */}
          <p className="text-muted">
            <strong>{props.position}</strong>
          </p>
          <p className="text-muted">
            {props.dateFrom} - {props.dateTo}
          </p>
          
          <Card.Text style={{ textAlign: "justify" }}>
            {renderDescription()}
          </Card.Text>
        </Card.Body>
      </Card>
    </Fade>
  );
}
export default WorkCards;
