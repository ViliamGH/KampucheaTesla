import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  FormControl,
  FormGroup,
  FormLabel,
  FormSelect,
  Row,
} from "react-bootstrap";

import { Get_All_Category } from "../../utilities/services/CategorySerice";
import { Create_Product } from "../../utilities/services/ProductService";
import { Upload_File } from "../../utilities/services/FileUpload";
import { ToastContainer, toast } from "react-toastify";
import { RotatingLines } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../css/InsertProductAndProfile.css";
import Sidebar from "../global/Sidebar";
import Footer from "../../pages/Footer";
import {
  faBagShopping,
  faBell,
  faGear,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InsertMyProducts = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState(1);
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState([]);
  const [loading, setloading] = useState(false);
  const [imageURL, setImageURL] = useState("");
  const [selectFile, setSelectFile] = useState(null);

  //
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(false);
  };

  const { t, i18n } = useTranslation();

  const language = [
    { code: "en", name: "English" },
    { code: "kh", name: "ខ្មែរ" },
    { code: "ch", name: "中国" },
  ];
  //

  const myNavigate = useNavigate();

  let newProduct = {
    title,
    price,
    description,
    categoryId,
    images,
  };

  console.log("new product: ", newProduct);

  const checkInputProduct = title && price && description ? false : true;

  const ClearInputPorductForm = () => {
    setTitle("");
    setPrice(0);
    setCategoryId(1);
    setDescription("");
    setImages([]);
    setImageURL(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWxS0vXCZVFvVZcRkbmNTpvojeNcl06LncfOhYNfEzwCXhnGlR"
    );
  };

  console.log(newProduct);

  useEffect(() => {
    Get_All_Category()
      .then((res) => setCategory(res))
      .catch((err) => console.error(err));
  }, []);

  const handelCreateProduct = (e) => {
    setloading(true);
    //use these function to not refresh the page when products area created.
    e.preventDefault();

    if (selectFile) {
      let file = new FormData();
      file.append("file", selectFile);

      Upload_File(file)
        .then((response) => {
          images.push(response.location);

          // newProduct.images = response.location;
          Create_Product(newProduct)
            .then((res) => {
              setloading(false);
              toast.success(res);
              ClearInputPorductForm();
              myNavigate("/adminproduct");
            })
            .catch((err) => {
              setloading(false);
              // for (var i = 0; i < err.response.data.message.length; i++) {
              //   toast.error(err.response.data.message[i]);
              // }
              toast.error(err);
            });
        })
        .catch((error) => {
          setloading(false);
          // for (var i = 0; i < error.response.data.message.length; i++) {
          //   toast.error(error.response.data.message[i]);
          // }
          toast.error(error);
        });
    } else {
      images.push(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWxS0vXCZVFvVZcRkbmNTpvojeNcl06LncfOhYNfEzwCXhnGlR"
      );
      Create_Product(newProduct)
        .then((res) => {
          setloading(false);
          toast.success(res);
          ClearInputPorductForm();
          myNavigate("/adminproduct");
        })
        .catch((err) => {
          setloading(false);
          // for (var i = 0; i < err.response.data.message.length; i++) {home
          //   toast.error(err.response.data.message[i]);
          // }
          toast.error(err);
        });
    }
  };

  const handleChangeImage = (e) => {
    e.preventDefault();
    let url = URL.createObjectURL(e.target.files[0]);
    setImageURL(url);
    setSelectFile(e.target.files[0]);
  };

  return (
    <>
      <div className="d-flex justify-content-between body-style">
        <div>
          <Sidebar />
        </div>
        <Container fluid className="p-3 pb-5">
          <Row className="px-5 pt-3 d-flex align-items-center">
            <Col md={6}>
              <h1 style={{ color: "#f9f9f9", fontWeight: "bolder" }}>
                Product
              </h1>
              <p style={{ color: "#399780", fontWeight: "bold" }}>
                Welcome to your product
              </p>
            </Col>
            <Col md={6} className="d-flex justify-content-end gap-4 p-4">
              <Link to="#" className="icon-size">
                <FontAwesomeIcon icon={faBagShopping} />
              </Link>
              <Link to="#" className="icon-size">
                <FontAwesomeIcon icon={faBell} />
              </Link>
              <Link to="#" className="icon-size">
                <FontAwesomeIcon icon={faGear} />
              </Link>
              <Link to="/" className="icon-size">
                <FontAwesomeIcon icon={faRightFromBracket} />
              </Link>
            </Col>
            <div className="mt-5 bg-light">
              <Row className="p-5">
                {/* left side */}
                <Col xl={6}>
                  <img
                    src={
                      imageURL
                        ? imageURL
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWxS0vXCZVFvVZcRkbmNTpvojeNcl06LncfOhYNfEzwCXhnGlR"
                    }
                    alt="..."
                    width="100%"
                    className="object-fit-contain img-fluid img-thumbnail"
                  />
                  <FormGroup>
                    <FormControl
                      type="file"
                      multiple
                      onChange={handleChangeImage}
                    />
                  </FormGroup>
                </Col>

                {/* right side */}
                <Col xl={6}>
                  <FormLabel className="mt-3">{t("p_name")}</FormLabel>
                  <FormControl
                    className="form-control-style"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <Row className="mt-1 g-3">
                    <Col xl={6}>
                      <FormLabel>{t("p_price")}</FormLabel>
                      <FormControl
                        className="form-control-style"
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </Col>
                    <Col xl={6}>
                      <FormLabel>{t("p_category")}</FormLabel>
                      <FormSelect
                        className="form-control-style"
                        value={categoryId}
                        onChange={(e) => setCategoryId(e.target.value)}
                      >
                        {category.map((cate) => (
                          <option value={cate.id}>{cate.name}</option>
                        ))}
                      </FormSelect>
                    </Col>
                  </Row>
                  <FormLabel className="mt-3">{t("p_description")}</FormLabel>
                  <FormControl
                    as="textarea"
                    style={{
                      height: "110px",
                    }}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />

                  <div className="mt-3 d-flex justify-content-between">
                    <div>
                      <Button
                        variant="success"
                        disabled={checkInputProduct}
                        onClick={handelCreateProduct}
                      >
                        {t("p_b_create")}
                      </Button>
                    </div>
                    <div>
                      <Button variant="danger" onClick={ClearInputPorductForm}>
                        {t("p_b_clear")}
                      </Button>
                    </div>
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
          </Row>
        </Container>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default InsertMyProducts;
