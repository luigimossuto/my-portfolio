import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import nuances from "../../Assets/Projects/foto-home-nuances.jpg";
import cantina from "../../Assets/Projects/foto-home-cantina-sapori-di-passione.jpg";
import geolier from "../../Assets/Projects/foto-home-sito-geolier.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          I Miei <strong className="purple">Lavori </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nuances}
              isBlog={false}
              title="Nuances"
              description="Primo Sito web e-commerce per borse, creato e progettato da me utilizzando React Vite (JSX e Tailwind CSS). Ho utilizzato varie librerie per sviluppare questo sito: React Router, React Hook Form, NextUi e daisyUi."
              ghLink="https://github.com/LuigiMossuto/Nuances-website-created-with-React-jsx-and-tailwind-css-"
              demoLink="https://nuances-site.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cantina}
              isBlog={false}
              title="Cantina Sapori di Passione"
              description="Sito vetrina per vini creato e progettato da me utilizzando Bootstrap. Lo sviluppo di questo sito è stato fatto tramite l'uso dei linguaggi: HTML e CSS (tramite Bootstrap) e JS."
              ghLink="https://github.com/LuigiMossuto/sito-cantina-sapori-di-passione-created-with-Bootstrap"
              demoLink="http://sever.altervista.org/sito_cantina_sapori_di_passione_luigi_mossuto/index.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={geolier}
              isBlog={false}
              title="Geolier"
              description="Sito di Geolier. Promozione del merchandising e dei realtivi album dell'artista."
              ghLink="https://github.com/luigimossuto/sito-geolier-didattico"
              demoLink="https://geolier-brief.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
