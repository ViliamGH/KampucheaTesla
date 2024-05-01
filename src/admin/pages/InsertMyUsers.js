import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
  Form,
} from "react-bootstrap";
import { Create_New_User } from "../../utilities/services/UserService";
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

const InsertMyUsers = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageURL, setImageURL] = useState("");
  const [selectFile, setSelectFile] = useState(null);

  //
  const [showMenu, setShowMenu] = useState(false);
  const [title, setTitle] = useState("Region & Language");

  const selectFlag = (eventKey) => {
    setTitle(eventKey);
  };

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

  const newUser = {
    name,
    email,
    password,
    avatar,
  };

  console.log(newUser);

  const checkInputUser = name && email && password ? false : true;

  const handleClearInput = () => {
    setName("");
    setEmail("");
    setPassword("");
    setAvatar("");
    setImageURL(
      "https://i.pinimg.com/236x/d4/b0/fc/d4b0fc8cbc694c97227be60029dc8749.jpg"
    );
  };

  const handleCreateNewUser = (e) => {
    setLoading(true);
    e.preventDefault();

    if (selectFile) {
      const file = new FormData();
      file.append("file", selectFile);

      Upload_File(file)
        .then((response) => {
          newUser.avatar = response.location;
          Create_New_User(newUser)
            .then((res) => {
              setLoading(false);
              toast.success(res);
              handleClearInput();
              myNavigate("/adminuser");
            })
            .catch((err) => {
              setLoading(false);
              for (var i = 0; i < err.response.data.message.length; i++) {
                toast.error(err.response.data.message[i]);
              }
            });
        })
        .catch((err) => {
          setLoading(false);
          for (var i = 0; i < err.response.data.message.length; i++) {
            toast.error(err.response.data.message[i]);
          }
        });
    } else {
      newUser.avatar =
        "https://i.pinimg.com/236x/d4/b0/fc/d4b0fc8cbc694c97227be60029dc8749.jpg";
      Create_New_User(newUser)
        .then((res) => {
          setLoading(false);
          toast.success(res);
          handleClearInput();
          myNavigate("/adminuser");
        })
        .catch((err) => {
          setLoading(false);
          for (var i = 0; i < err.response.data.message.length; i++) {
            toast.error(err.response.data.message[i]);
          }
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
                Profile
              </h1>
              <p style={{ color: "#399780", fontWeight: "bold" }}>
                Welcome to your profile
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
                {/* left side in grid */}
                <Col xl={6}>
                  <img
                    src={
                      imageURL
                        ? imageURL
                        : "https://i.pinimg.com/236x/d4/b0/fc/d4b0fc8cbc694c97227be60029dc8749.jpg"
                    }
                    alt="..."
                    width="100%"
                    className="object-fit-contain img-fluid"
                  />
                  <FormGroup>
                    <FormControl type="file" onChange={handleChangeImage} />
                  </FormGroup>
                </Col>

                {/* right side in grid */}
                <Col xl={6}>
                  <FormLabel className="mt-5">{t("username_1")}</FormLabel>
                  <Form.Control
                    className="form-control-style"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <FormLabel className="mt-3">{t("email_1")}</FormLabel>
                  <Form.Control
                    className="form-control-style"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <FormLabel className="mt-3">{t("password_1")}</FormLabel>
                  <Form.Control
                    className="form-control-style"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="mt-3 d-flex justify-content-between">
                    <div>
                      <Button
                        variant="success"
                        disabled={checkInputUser}
                        onClick={handleCreateNewUser}
                      >
                        {t("create_1")}
                      </Button>
                    </div>
                    <div>
                      <Button variant="danger" onClick={handleClearInput}>
                        {t("clear_1")}
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

export default InsertMyUsers;
