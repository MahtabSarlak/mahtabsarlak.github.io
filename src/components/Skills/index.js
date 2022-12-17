import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";


function Index() {
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
    <Container fluid className="skill-section" id="about">
      <Container>
        <Row>
            <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                    Selected <span className="blue"> Skills </span>
                </h1>
            </Col>
        </Row>
            <Row className="sec_sp">
                <Col lg="7">
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
</Col>
</Row>
      </Container>
    </Container>
  );
}
export default Index;
