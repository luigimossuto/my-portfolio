import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiFigma,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons tools-icons">
        <SiFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons tools-icons">
        <SiVisualstudiocode />
      </Col>
    </Row>
  );
}

export default Toolstack;
