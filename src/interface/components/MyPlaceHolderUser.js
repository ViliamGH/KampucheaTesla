import React from "react";
import {
  Card,
  CardImg,
  Col,
  Container,
  Placeholder,
  Row,
} from "react-bootstrap";

import placeholderUser from "../Images_Videos/placeholderUser.jpg";

const MyPlaceHolderUser = () => {
  return (
    <Container>
      <Card>
        <div style={{ height: "auto", width: "100%", overflow: "hidden" }}>
          <CardImg
            src={placeholderUser}
            alt="..."
            variant="top"
            className="img-fluid img-thumbnail object-contain-fit"
          />
        </div>
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <div className="d-flex justify-content-between align-items-center">
              <Placeholder xs={3} />
              <Placeholder xs={3} />
            </div>
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={6} />
            <Placeholder xs={9} />
            <Placeholder xs={3} />
            <Placeholder xs={3} />
            <Placeholder xs={9} />
            <Placeholder xs={9} />
          </Placeholder>
          <div className="d-flex justify-content-between align-items-center">
            <Placeholder.Button variant="primary" animation="glow" xs={3} />
            <Placeholder.Button variant="primary" animation="glow" xs={3} />
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MyPlaceHolderUser;
