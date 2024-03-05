import React, { useState } from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import {
  TbBrandGolang,
  TbBrandReactNative,
  TbBrandThreejs,
  TbBrandSocketIo,
} from "react-icons/tb";
import { FaCss3Alt } from "react-icons/fa";

function Techstack() {
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
            onMouseEnter={() => handleIconHover("JavaScript")}
            onMouseLeave={() => handleIconHover("")}
          >
            <DiJavascript1 />
          </div>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={renderTooltip({ show: tooltipText.length > 0 })}
        >
          <div
            onMouseEnter={() => handleIconHover("Node.JS")}
            onMouseLeave={() => handleIconHover("")}
          >
            <DiNodejs />
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={renderTooltip({ show: tooltipText.length > 0 })}
        >
          <div
            onMouseEnter={() => handleIconHover("React")}
            onMouseLeave={() => handleIconHover("")}
          >
            <DiReact />
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={renderTooltip({ show: tooltipText.length > 0 })}
        >
          <div
            onMouseEnter={() => handleIconHover("React Native")}
            onMouseLeave={() => handleIconHover("")}
          >
            <TbBrandReactNative />
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={renderTooltip({ show: tooltipText.length > 0 })}
        >
          <div
            onMouseEnter={() => handleIconHover("Socket.IO")}
            onMouseLeave={() => handleIconHover("")}
          >
            <TbBrandSocketIo />
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={renderTooltip({ show: tooltipText.length > 0 })}
        >
          <div
            onMouseEnter={() => handleIconHover("Three.JS")}
            onMouseLeave={() => handleIconHover("")}
          >
            <TbBrandThreejs />
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={renderTooltip({ show: tooltipText.length > 0 })}
        >
          <div
            onMouseEnter={() => handleIconHover("Firebase")}
            onMouseLeave={() => handleIconHover("")}
          >
            <SiFirebase />
          </div>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={renderTooltip({ show: tooltipText.length > 0 })}
        >
          <div
            onMouseEnter={() => handleIconHover("CSS")}
            onMouseLeave={() => handleIconHover("")}
          >
            <FaCss3Alt />
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={renderTooltip({ show: tooltipText.length > 0 })}
        >
          <div
            onMouseEnter={() => handleIconHover("Postgresql")}
            onMouseLeave={() => handleIconHover("")}
          >
            <SiPostgresql />
          </div>
        </OverlayTrigger>
      </Col>
    </Row>
  );
}

export default Techstack;
