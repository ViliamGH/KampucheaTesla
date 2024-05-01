import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import error404 from "../Images_Videos/error-robot.jpg";

const Error404 = () => {
  return (
    <Container className="mt-5 p-5 g-5 d-flex justify-content-center align-items-center">
      <Row className="g-5">
        <Col md>
          <div
            style={{
              fontSize: "100px",
              fontFamily: "monospace",
            }}
          >
            <span className="text-primary">g</span>
            <span className="text-danger">o</span>
            <span className="text-warning">o</span>
            <span className="text-primary">g</span>
            <span className="text-success">l</span>
            <span className="text-danger">e</span>
          </div>
          <div style={{ fontSize: "25px" }}>
            <p>
              <span className="fw-bold">404. </span>That`s an error.
            </p>
            <p>
              The requested URL/a_cool_website was not found on this server.
              That`s all we know.`
            </p>
          </div>
        </Col>
        <Col md>
          <img
            src={error404}
            alt="..."
            className="img-fluid object-fit-contain mt-5 d-block ms-auto"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Error404;
