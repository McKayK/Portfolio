import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  // AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import kkDisney from "../../Assets/kkDisney.png";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Code is a part of everybody's daily life, I've taken the time to
              learn how it all works.
              <br />
              <br />I am fluent in;
              <i>
                <b className="purple">
                  {" "}
                  Javascript, React/React Native, and Node{" "}
                </b>
              </i>
              <br />
              <br />I love to create people's dreams, be it a
              <i>
                <b className="purple"> New Product </b>, a fun{" "}
                <b className="purple">App</b>, or a way to preserve{" "}
                <b className="purple">Memories</b>.
              </i>
              <br />
              <br />I code with a passion for my projects and always implement
              the best
              <i>
                <b className="purple"> Modern Libraries and Frameworks</b>
              </i>
              <i> to satisfy my clients!</i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={kkDisney} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/McKayK"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mckaykleinmanwebdev/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
