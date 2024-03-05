import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey, I am <span className="purple">McKay Kleinman </span>
            from <span className="purple"> Orem, Utah.</span>
            <br />
            I am currently employed as a software developer at Phrame Display.
            <br />
            I have completed the Web Development Bootcamp at Devmountain and
            obtained a Full Stack Developer certificate.
            <br />
            <br />
            Apart from coding, some other activities that I love to do are;
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Spending Time With Family
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Skills
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Not All Who Wander Are Lost"{" "}
          </p>
          <footer className="blockquote-footer">J.R.R. Tolkien</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
