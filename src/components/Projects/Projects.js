import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import marinero from "../../Assets/Projects/marinero.png";
import marineroApp from "../../Assets/Projects/appmari.png";
import psApp from "../../Assets/Projects/peso.png";

import rsm from "../../Assets/Projects/RSM.png";
import mcc from "../../Assets/Projects/mcc.png";
import rise from "../../Assets/Projects/rise.png";
import logo from "../../Assets/logo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis recientes <strong className="purple">Trabajos </strong>
        </h1>
        <p style={{ color: "white" }}>
          Aquí hay algunos proyectos en los que he trabajado recientementes.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rsm}
              isBlog={false}
              title="RSM"
              description="Sistema de búsqueda de médicos cercanos a una localidad, con la opción de agendar citas y gestionar el control de pacientes de manera eficiente."
              demoLink="https://reddeserviciosmedicos.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mcc}
              isBlog={false}
              title="Marinero Cloud"
              description="Plataforma para la compra de servicios de almacenamiento en la nube, diseñada para administrar el alquiler de sistemas de renta de botes de manera eficiente."
              demoLink="https://marinerocloud.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rise}
              isBlog={false}
              title="CRM"
              description="Sistema de gestión integral (CRM) para el control de proyectos, clientes, tickets y facturas, optimizando la administración y seguimiento de cada proceso."
              demoLink="https://slategray-porcupine-420711.hostingersite.com/index.php/signin"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={marinero}
              isBlog={false}
              title="Marinero.mx"
              description="Plataforma para la gestion de renta de botes y yates, con la opción de reservar servicios de catering y entretenimiento para eventos especiales."
              demoLink="https://marinero.mx/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={marineroApp}
              isBlog={false}
              title="App marinero.mx"
              description="Aplicación móvil para la gestión de renta de botes y yates, con la opción de reservar servicios de catering y entretenimiento para eventos especiales."
              demoLink="https://play.google.com/store/apps/details?id=com.marinero.mx"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={psApp}
              isBlog={false}
              title="App peso facil"
              description="Aplicación móvil para el control de gastos e ingresos, con la opción de registrar transacciones y visualizar reportes de manera sencilla y eficiente."
              demoLink="https://play.google.com/store/apps/details?id=com.pesofacil"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={logo}
              isBlog={false}
              title="Sistemas empresariales"
              description="He colaborado y desarrollado sistemas empresariales a la medida para empresas de diferentes giros, con el objetivo de optimizar sus procesos y mejorar su productividad."
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
