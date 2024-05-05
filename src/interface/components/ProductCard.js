import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import { RotatingLines } from "react-loader-spinner";

import "../css/ProductCard.css";
import { Container } from "react-bootstrap";
const ProductCard = ({ productdata }) => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Container fluid>
        <Card className="card-hover">
          <div className="image-hover">
            <Link to={`/reviewproduct/${productdata.id}`}>
              <Carousel className="w-100">
                {productdata.images.map((image) => (
                  <Carousel.Item>
                    <img
                      src={image}
                      alt="..."
                      className="d-block w-100"
                      id="ok"
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src =
                          "https://www.bevi.com/static/files/0/ecommerce-default-product.png";
                      }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Link>
          </div>
          <Card.Body className="card-body">
            <Card.Title className="fw-bolder">{productdata.title}</Card.Title>
            <Card.Title className="fw-bolder">$ {productdata.price}</Card.Title>
            {/* <h6>
            Category:
            <span className="text-warning">
            &nbsp; {productdata.category.name}
            </span>
            </h6>
          <Card.Text>{productdata.description}</Card.Text> */}
          </Card.Body>
          <ToastContainer />
          <div style={{ marginTop: "20%" }}>
            {loading && (
              <div
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "#BBBBBB80",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "cetner",
                }}
              >
                <RotatingLines
                  strokeColor="#47A992"
                  strokeWidth="5"
                  animationDuration="1"
                  width="90"
                  visible={true}
                />
              </div>
            )}
          </div>
        </Card>
      </Container>
    </>
  );
};

export default ProductCard;
