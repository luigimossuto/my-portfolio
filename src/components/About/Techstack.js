import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVite, SiBootstrap, SiWordpress } from "react-icons/si";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiHtml5,
  DiCss3,
} from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons pt-icon pb-icon">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons pt-icon">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons pt-icon">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons vite">
        <SiVite />
      </Col>
      <Col xs={4} md={2} className="tech-icons vite">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons vite">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons vite">
        <SiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons vite">
        <SiWordpress />
      </Col>
    </Row>
  );
}

export default Techstack;
