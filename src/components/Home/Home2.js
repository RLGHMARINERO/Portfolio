import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,
  AiFillMessage,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
             PERMÍTEME <span className="purple"> PRESENTARME </span>
            </h1>
            <p className="home-about-body">
            Me apasiona la tecnología y el desarrollo de software, y a lo largo del tiempo he trabajado con diversas herramientas y frameworks para crear soluciones eficientes y escalables.
              <br />
              <br />Tengo experiencia
              <i>
                <b className="purple"> Vue.js, Nuxt.js, Node.js, Express, Laravel y React Native, Php, Python  </b>
              </i>
              <br />
              <br />
              Mis áreas de interés incluyen el desarrollo de&nbsp;
              <i>
                <b className="purple">nuevas tecnologías web y productos </b> así como temas relacionados con{" "}
                <b className="purple">
                  Inteligencia Artificial.
                </b>
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
            <h1>ENCUÉNTRAME EN</h1>
            <p>
             No dudes en <span className="purple">contactarme </span>
            </p>
            <ul className="home-about-social-links">
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ricardo-leonel-garcía-hernández-8a2637195/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/abovertronick.mv/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://wa.me/529995313954"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineWhatsApp />
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
