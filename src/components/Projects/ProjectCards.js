import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const [imageIndex, setImageIndex] = useState(0);

  const handleNextImage = () => {
    if (imageIndex < props.imgPath.length - 1) {
      setImageIndex((previous) => previous + 1);
    }
  };

  const handlePrevImage = () => {
    if (imageIndex > 0) {
      setImageIndex((previous) => previous - 1);
    }
  };

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath[imageIndex]} alt="card-img" />
      {props.imgPath.length > 1 && (
        <div
          className="prevNextButtons"
          style={{
            position: "absolute",
            top: 144,
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Button
            onClick={handlePrevImage}
            style={{ backgroundColor: "black", color: "black" }}
          >
            ⟵
          </Button>
          <Button onClick={handleNextImage}>⟶</Button>
        </div>
      )}

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}

        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
