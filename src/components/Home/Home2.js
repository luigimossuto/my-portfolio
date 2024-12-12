import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn,  FaFacebook } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LASCIA <span className="purple"> CHE MI </span> PRESENTI
            </h1>
            <p className="home-about-body">
                Mi sono innamorato della programmazione e almeno ho imparato qualcosa, credo…🤷‍♂️
              <br />
              <br />Le mie conoscenze sono:
              <i>
                <b className="purple"> Javascript, React-Vite, HTML, CSS, Wordpress, Bootstrap e Figma</b>
              </i>
              <br />
              <br />
                Il mio campo di interesse riguarda la creazione di nuove &nbsp;
              <i>
                <b className="purple">Tecnologie e Prodotti Web </b> 
              </i>
              <br />
              <br />
                Sono una persona che ha voglia di imparare e la <b className="purple">Curiosità</b> &egrave;
                il motore che alimenta la mia passione nella
              <i>
                <b className="purple"> Programmazione</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>TROVAMI SU</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/LuigiMossuto"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/luigi.luigi.754365"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/luigimossuto/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/luigimossu_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
