import React, { useState } from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  // SiVercel,
  // SiMacos,
  SiAdobephotoshop,
} from "react-icons/si";

function Toolstack() {
  const [tooltipText, setTooltipText] = useState("");

  const handleIconHover = (text) => {
    setTooltipText(text);
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {tooltipText}
    </Tooltip>
  );
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={renderTooltip({ show: tooltipText.length > 0 })}
        >
          <div
            onMouseEnter={() => handleIconHover("Photoshop")}
            onMouseLeave={() => handleIconHover("")}
          >
            <SiAdobephotoshop />
          </div>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={renderTooltip({ show: tooltipText.length > 0 })}
        >
          <div
            onMouseEnter={() => handleIconHover("VS Code")}
            onMouseLeave={() => handleIconHover("")}
          >
            <SiVisualstudiocode />
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={renderTooltip({ show: tooltipText.length > 0 })}
        >
          <div
            onMouseEnter={() => handleIconHover("Postman")}
            onMouseLeave={() => handleIconHover("")}
          >
            <SiPostman />
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={renderTooltip({ show: tooltipText.length > 0 })}
        >
          <div
            onMouseEnter={() => handleIconHover("Slack")}
            onMouseLeave={() => handleIconHover("")}
          >
            <SiSlack />
          </div>
        </OverlayTrigger>
      </Col>
    </Row>
  );
}

export default Toolstack;
