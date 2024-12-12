import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           Ciao a tutti sono <span className="purple">Luigi Mossuto </span>
            e attualmente vivo a<span className="purple"> Pescara, Italia.</span>
            <br />
            Sto frequentando il secondo anno su tre presso l'Istituto INFOBASIC di Pescara, seguendo il percorso di studi di Web Design.
            <br />
            Sono motivato dalla curiosità e desidero approfondire le mie conoscenze.
            <br />
            Questa stessa curiosità mi spinge a imparare nuovi linguaggi di programmazione e nuove tecniche di lavoro che possono migliorare le mie performance nel settore.
            <br />
            <br />
            Oltre alla programmazione ci sono altre attività che amo fare:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Scrivere e Cantare Canzoni
            </li>
            <li className="about-activity">
              <ImPointRight /> Giocare a Calcio
            </li>
            <li className="about-activity">
              <ImPointRight /> Viaggiare
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "La curiosità è il motore che alimenta la vita!"
          </p>
          <footer className="blockquote-footer">Luigi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
