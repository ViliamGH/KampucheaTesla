import React from "react";
import {
  Card,
  CardImg,
  Container,
  Placeholder,
} from "react-bootstrap";

import placeholderProduct from "../Images_Videos/placeholderProduct.png";

const MyPlaceHolderProduct = () => {
  return (
    <Container>
      <Card>
        <div style={{ height: "auto", width: "100%", overflow: "hidden" }}>
          <CardImg
            src={placeholderProduct}
            alt="..."
            variant="top"
            className="img-fluid img-thumbnail object-contain-fit"
          />
        </div>
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={6} />
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder.Button variant="primary" animation="glow" xs={6} />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MyPlaceHolderProduct;
