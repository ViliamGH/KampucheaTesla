import React, { useEffect, useState } from "react";
import {
  Button,
  Carousel,
  Col,
  Container,
  FormControl,
  FormLabel,
  FormSelect,
  Nav,
  Navbar,
  Offcanvas,
  Row,
  ToastContainer,
} from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Get_Product_By_ID,
  Update_Product,
} from "../../interface/utilities/services/ProductService";
import { Upload_File } from "../../interface/utilities/services/FileUpload";
import { Get_All_Category } from "../../interface/utilities/services/CategorySerice";

import { toast } from "react-toastify";
import { RotatingLines } from "react-loader-spinner";
import tesla from "../../interface/Flag-Icons/LogoTesla/04_0x0-Tesla_Wordmark_10_White.png";

import "../../interface/css/InsertProductAndProfile.css";
import { useTranslation } from "react-i18next";

const ViewProduct = () => {
  const [product, setProduct] = useState({});
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [categoryId, setCategoryId] = useState(1);
  const [imageURL, setImageURL] = useState("");
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState([]);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectFile, setSelectFile] = useState("");

  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(false);
  };

  const { id } = useParams();

  const { t, i18n } = useTranslation();

  const language = [
    { code: "en", name: "English" },
    { code: "kh", name: "ខ្មែរ" },
    { code: "ch", name: "中国" },
  ];

  let updateProduct = {
    title,
    price,
    categoryId,
    description,
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
        setPrice(res.price);
        setCategoryId(res.categoryId);
        setImages(res.images);
        setDescription(res.description);
      })
      .catch((err) => console.error(err));
  }, []);

  const myNavigate = useNavigate();

  const handleUpdate = (e) => {
    setLoading(true);
    e.preventDefault();
    if (selectFile) {
      const file = new FormData();
      file.append("file", selectFile);

      Upload_File(id, updateProduct, file)
        .then((response) => {
          updateProduct.images = response.location;

          Update_Product(file)
            .then((res) => {
              setLoading(false);
              toast.success(res);
              myNavigate("/adminproduct");
            })
            .catch((err) => {
              console.log(err.response.data.message);
              setLoading(false);
            });
        })
        .catch((err) => {
          console.log(err.response.data.message);
          setLoading(false);
        });
    } else {
      Update_Product(id, updateProduct)
        .then((res) => {
          setLoading(false);
          toast.success(res);
          myNavigate("/adminproduct");
        })
        .catch((err) => {
          console.log(err.response.data.message);
          setLoading(false);
        });
    }
  };

  const handleImageChange = (e) => {
    let url = URL.createObjectURL(e.target.files[0]);
    setImageURL(url);
    setSelectFile(e.target.files[0]);
  };

  return (
    <>
      <Navbar expand="md" fixed="top" className="p-3 top-nav-style">
        <Container
          fluid
          className="d-flex justify-content-between align-items-center"
        >
          <div>
            <Navbar.Brand>
              <Link to="/adminproduct">
                <img
                  src={tesla}
                  alt="..."
                  style={{ width: "120px", cursor: "pointer" }}
                />
              </Link>
            </Navbar.Brand>
          </div>
          <Navbar.Toggle
            id="nav-toggle-style-option"
            aria-controls="offcanvasNavbar"
            onClick={() => setShowMenu(true)}
          />
          <Navbar.Offcanvas
            className="nav-offcanvas-style"
            id="offcanvasNavbar"
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
                  alt="..."
                  style={{ width: "130px", cursor: "default" }}
                />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav navbarScroll className="ms-auto px-3 nav-style">
                {/* {language.map((l) => (
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
                ))} */}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Container className="p-5 mt-5 d-flex justify-content-center align-item-center">
        <Row className="d-flex justify-content-center">
          <h1 className="text-center fw-bolder mb-5">Update Information</h1>
          <Col md={8}>
            {/* <img
              src={imageURL}
              alt="..."
              className="d-block w-100"
              id="ok"
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src =
                  "https://www.bevi.com/static/files/0/ecommerce-default-product.png";
              }}
            /> */}
            <Carousel className="w-100">
              {images.map((image) => (
                <Carousel.Item interval={1500}>
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
            <FormControl type="file" onChange={handleImageChange} />
          </Col>
          <Row className="d-flex justify-content-center">
            <Col md={8} className="mt-4">
              <div
                className="mb-4"
                style={{ borderTop: "2px solid #000" }}
              ></div>
              <Row>
                <Col>
                  <FormLabel className="mt-3">Product Title</FormLabel>
                  <FormControl
                    className="form-control-style"
                    type="text"
                    placeholder="Product Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Col>
                <Col>
                  <FormLabel className="mt-3">Product Price</FormLabel>
                  <FormControl
                    className="form-control-style"
                    type="number"
                    placeholder="Product Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </Col>
              </Row>
              <FormLabel className="mt-3">Category</FormLabel>
              <FormSelect
                className="form-control-style"
                placeholder="Catgory"
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
              >
                {category.map((cate) => (
                  <option value={cate.id}>{cate.name}</option>
                ))}
              </FormSelect>
              <FormLabel className="mt-3">Description</FormLabel>
              <FormControl
                className="form-control-style"
                as="textarea"
                placeholder="Product Description"
                style={{ height: "110px" }}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <div className="text-center mt-5">
                <Button
                  variant="success"
                  className="mt-3 w-100"
                  onClick={handleUpdate}
                >
                  Update
                </Button>
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
        </Row>
      </Container>
    </>
  );
};

export default ViewProduct;
