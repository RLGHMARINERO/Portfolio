import React from "react";
import Card from "react-bootstrap/Card";
import { ImPlay2, ImPlay3, ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           ¡Hola a todos! Soy <span className="purple">Ricardo Leonel GH. </span>
            de <span className="purple"> México.</span>
            <br />
            Actualmente trabajo como desarrollador de software.
            <br />
            Complete una Ingeniería en Informática y certificado Meta Front-End Developer Profesional Certificate
            <br />
            <br />
            Además de programar, algunas otras actividades que me encanta hacer son:
          </p>
          <ul>
            <li className="about-activity">
              <ImPlay3 /> Jugar videojuegos
            </li>
            <li className="about-activity">
               <ImPlay3 /> Pasar tiempo con mi familia
            </li>

          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          Esforzarse por crear cosas que marquen la diferencia!"{" "}
          </p>
          <footer className="blockquote-footer">RD</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
