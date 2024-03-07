import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import landscapeMockup from "../../Assets/LandscapeMockup.jpg";
import nurseSticker from "../../Assets/All Nurses.png";
import marblesAndJokers from "../../Assets/Marbles And Jokers Main.png";
import davidParty from "../../Assets/davidParty.jpeg";
import regionalManager from "../../Assets/regionalManager.jpeg";
import monica from "../../Assets/Monica.jpeg";
import kwLogo from "../../Assets/Finished KW Logo.png";
import potatoland from "../../Assets/Potatoland.jpg";
import mistborn from "../../Assets/mistborn.jpeg";
import mickeyTyeDye from "../../Assets/mickeyTyeDye.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Creative Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently from my creative mind.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[landscapeMockup]}
              isBlog={false}
              title="Landscape Mockup"
              description="I love to use and develope my skills in Photoshop. I'm trying to come up with some good ideas for landscaping in a yard. It's really nice to be able to visualize things before spending any money!"
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[nurseSticker]}
              isBlog={false}
              title="Disney Nurse Stickers"
              description="My sister is a nurse and also LOVES Disney! These stickers were a really fun project to turn the essence of each Disney Princess into a nurse. They were really fun to make and pushed my skills in Photoshop to a new level!"
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[marblesAndJokers, kwLogo]}
              isBlog={false}
              title="Marbles and Jokers"
              description="My brother created a board game and needed some stickers for the boxes. Working with him and taking feedback on the design resulted in a logo that he loved and adds some flair to his boxes!"
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[davidParty]}
              isBlog={false}
              title="Cake Stencils"
              description="In our family for people's 30th birthday we go all out! While I didn't make the cake, I made the stencils for all of the designs that went onto the cake! It took some trial and error with Photoshop and my Cricut cutting machine, but the final product was well worth it!"
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[potatoland, regionalManager, mistborn, mickeyTyeDye]}
              isBlog={false}
              title="Custom Shirts"
              description="I have made MANY custom shirts over the years! I love making them for every occasion from matching Disneyland shirts, to baby announcement shirts! I used to have an Etsy shop where I sold shirts from, but that got too busy. I now do it for people as a side project because I love the process of taking their idea and putting it on a shirt for them to wear for years to come!"
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[monica]}
              isBlog={false}
              title="Laundry/Pantry/Craft Room"
              description="I helped create this room inspired by Monica's kitchen on the tv show Friends. From the custom shelving to the flooring we meticulously created this room to maximize usable space and storage while also serving as a laundry room. It was a lot of fun coming up with ideas to replicate her kitchen in this space and the result speaks for itself!"
              ghLink=""
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
