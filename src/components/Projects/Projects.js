import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Phrame from "../../Assets/Phrame.jpg";
import phrameApp from "../../Assets/Phrame App.jpg";
import randomMovieGen from "../../Assets/randomMovieGen.PNG";
import HogwartsImage from "../../Assets/HogwartsRandomPic.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Tech Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently involving code.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[Phrame]}
              isBlog={false}
              title="Phrame Display"
              description="Phrame Display is a startup company for a product, 'Phrame', that displays the users text that came from the Phrame App. It is a e-ink display with battery that lasts a few months! You can hang it on your wall, on your desk, in your kids bedroom, or give it to a grandparent so you can give them loving notes whenever you want! It is a smart home object that is able to connect to someones account via QR code. The software was developed in React Native."
              ghLink=""
              demoLink="https://drive.google.com/file/d/1u_9R4QFvpBOGPZf3Jtmm1UHJRPvXQTWg/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[phrameApp]}
              isBlog={false}
              title="Phrame App"
              description="Phrame Display is controlled by an app. I coded it in React Native. The app allows the user to controller the Display. You are able to log in, create an account, add devices, edit the device's text, and delete a device from your account. The app is still being developed so there will be a lot more features added!"
              ghLink=""
              demoLink="https://drive.google.com/file/d/1u_9R4QFvpBOGPZf3Jtmm1UHJRPvXQTWg/view?usp=sharing"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[randomMovieGen]}
              isBlog={false}
              title="Random Movie Generator"
              description="Random Movie Generator is a personal project im currently working on. I'm coding it in React Native and Node.JS. Sometimes I have a hard time choosing a movie to watch so I wanted something that could help me make a decision. This app allows me to choose the movie genre and then push 'Get Movie' and it will give me a random popular movie from that genre. You are able to add the movie to a watchlist if you don't want to watch it right then."
              ghLink="https://github.com/McKayK/react-native-random-movie"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[HogwartsImage]}
              isBlog={false}
              title="Hogwarts House Generator"
              description="My brother came to me one day and asked if I could make an app (with a very short deadline) that would randomly sort people into Hogwarts houses. He was throwing a Harry Potter birthday party for his wife and he was planning a game that needed people to be sorted into houses to create 4 teams. The app was coded in React Native and was a lot of fun to create! I want to add more to it so other people can use it for their parties!"
              ghLink="https://github.com/McKayK/HogwartsHouseRandomizer"
              demoLink="https://drive.google.com/file/d/1aAgBzYhEZGEmrLtgcRYN7V-TmcZjTUYr/view?usp=sharing"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
