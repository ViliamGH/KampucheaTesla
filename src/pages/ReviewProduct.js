import React, { useEffect, useState } from "react";
import {
  Button,
  Carousel,
  Col,
  Container,
  Nav,
  NavLink,
  Navbar,
  Offcanvas,
  Row,
  ToastContainer,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Get_Product_By_ID } from "../utilities/services/ProductService";
import { Get_All_Category } from "../utilities/services/CategorySerice";

import { RotatingLines } from "react-loader-spinner";
import { useTranslation } from "react-i18next";
import Footer from "../pages/Footer";
import tesla from "../Flag-Icons/LogoTesla/04_0x0-Tesla_Wordmark_10_White.png";

import "../css/ReviewProduct.css";

const ReviewProduct = () => {
  const [product, setProduct] = useState({});
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [imageURL, setImageURL] = useState("");
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState([]);
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectFile, setSelectFile] = useState("");

  const [showMenu, setShowMenu] = useState(false);
  const [count, setCount] = useState(0);

  const handleMenuToggle = () => {
    setShowMenu(false);
  };

  const { t, i18n } = useTranslation();

  const language = [
    { code: "en", name: "English" },
    { code: "kh", name: "ខ្មែរ" },
    { code: "ch", name: "中国" },
  ];

  const { id } = useParams();

  let updateProduct = {
    title,
    price,
    description,
    categoryId,
    imageURL,
  };

  console.log(updateProduct);

  // get the product id from the product service when component is mounted
  useEffect(() => {
    Get_All_Category()
      .then((res) => {
        setCategory(res);
      })
      .catch((err) => console.error(err));
    Get_Product_By_ID(id)
      .then((res) => {
        setProduct(res);
        setTitle(res.title);
        setCategoryId(res.categoryId);
        setPrice(res.price);
        setImageURL(res.imageURL);
        setImages(res.images);
        setDescription(res.description);
      })
      .catch((err) => console.error(err));
  }, []);

  const Increase = () => {
    if (count === 3) {
      return;
    }
    setCount(count + 1);
  };

  const Decrease = () => {
    setCount(count - 1);
  };

  const handlClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Navbar expand="md" fixed="top" className="p-3 top-nav-style">
        <Container
          fluid
          className="d-flex justify-content-between align-items-center"
        >
          <div>
            <Navbar.Brand href="/shop">
              <img
                src={tesla}
                alt="..."
                style={{ width: "150px", cursor: "pointer" }}
              />
            </Navbar.Brand>
          </div>
          <Navbar.Toggle
            id="nav-toggle-style-option"
            aria-controls="offcanvasNavbar"
            onClick={() => setShowMenu(true)}
          />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            className="nav-offcanvas-style"
            aria-labelledby={`offcanvFasNavbarLabel`}
            placement="start"
            show={showMenu}
            onHide={() => setShowMenu(false)}
          >
            <Offcanvas.Header
              closeButton
              closeVariant="white"
              style={{ borderBottom: "1px solid #CCC" }}
            >
              <Offcanvas.Title>
                <img
                  src={tesla}
                  alt=""
                  style={{ width: "130px", cursor: "default" }}
                />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav navbarScroll className="ms-auto px-3">
                {language.map((l) => (
                  <Nav
                    href="#"
                    eventKey={l.name}
                    onClick={() =>
                      handleMenuToggle(i18n.changeLanguage(l.code))
                    }
                  >
                    <NavLink className={"nav-link nav-style"}>
                      &nbsp; {l.name}
                    </NavLink>
                  </Nav>
                ))}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <div className="p-5 mt-5 d-flex justify-content-center align-item-center">
        <Row className="d-flex justify-content-center w-100">
          <Col md={6}>
            <Carousel className="w-100">
              {images.map((image) => (
                <Carousel.Item interval={3000}>
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
          </Col>
          <Col md={6}>
            <div className="mb-3 mt-5">
              <h1>{title}</h1>
            </div>
            <div>
              <h6>$ {price}</h6>
            </div>
            <div className="mt-4">
              <p style={{ color: "#7D7C7C" }}>
                See if this accessory is compatible
                <br />
                with a car in your Tesla Account
                <Link
                  to="/login"
                  style={{
                    color: "#6499E9",
                    textDecoration: "none",
                    fontWeight: "bolder",
                  }}
                >
                  &nbsp; Sign In
                </Link>
              </p>
            </div>
            <div>
              <h6 className="fw-bold">Quantity</h6>
              <Button
                style={{ border: "none", width: "70px", color: "#2d9f42" }}
                variant="none"
                disabled={count === 0}
                onClick={() => Decrease()}
              >
                -
              </Button>
              <Button
                style={{
                  backgroundColor: "#bbb",
                  border: "none",
                  width: "70px",
                  cursor: "default",
                }}
              >
                {count}
              </Button>
              <Button
                style={{ border: "none", width: "70px", color: "#2d9f42" }}
                variant="none"
                disabled={count == 3}
                onClick={() => Increase()}
              >
                +
              </Button>
            </div>
            <div className="text-start mt-3">
              <Button variant="primary" className="mt-3 w-50">
                Add to Cart
              </Button>
            </div>
            <div className="fw-bold mt-4 mb-4">Description</div>
            <div>
              {description}
              <div className="mt-3 mb-3">
                100% recyclable and free of cadmium, <br /> lead, latex and PVC.
              </div>
              Includes:
              <ul>
                <li>1x first row all-weather liner</li>
                [driver]
                <li>1x first row all-weather liner</li>
                [passenger]
                <li>1x second row all-weather liner</li>
              </ul>
            </div>
            <div style={{ color: "#7D7C7C" }}>
              <i>Note: </i>
              Compatible with Model S and Model Rodster vechicles produced in
              2021+.
            </div>

            <ToastContainer />
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
          </Col>
        </Row>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default ReviewProduct;
