import React, { useEffect } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormCheck,
  FormControl,
  FormGroup,
  FormLabel,
  NavLink,
  Row,
  ToastContainer,
} from "react-bootstrap";

import teslaLogoLogin from "../../interface/Flag-Icons/LogoTesla/02_0x0-Tesla_T_White.png";
import google from "../../interface/Flag-Icons/google.png";
import facebook from "../../interface/Flag-Icons/facebook.png";
import gitlab from "../../interface/Flag-Icons/gitlab.png";
import "../../interface/css/Login.css";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { RotatingLines } from "react-loader-spinner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showMenu, setShowMenu] = useState(false);
  const [title, setTitle] = useState("Languages");

  const [click, setClick] = useState(false);
  const [loading, setloading] = useState(false);

  // const handleMouseEnter = () => {
  //   setShowDropdown(true);
  // };

  // const handleMouseLeave = () => {
  //   setShowDropdown(false);
  // };

  const selectFlag = (eventKey) => {
    setTitle(eventKey);
  };

  const hanldeClick = () => {
    setClick(true);
  };

  const handleMenuToggle = () => {
    hanldeClick();
    setShowMenu(false);
  };

  const { t, i18n } = useTranslation();

  const language = [
    {
      code: "en",
      name: "English",
    },
    {
      code: "kh",
      name: "ខ្មែរ",
    },
    {
      code: "ch",
      name: "中国",
    },
  ];

  return (
    <>
      <Container className="d-flex justify-content-center align-items-center mt-5">
        <div className="content">
          <div className="mt-3">
            <div className="col-sm-12 text-center">
              <Link to="/">
                <img src={teslaLogoLogin} alt="..." width="125px" />
              </Link>
              <h5 className="fw-bold">{t("login_1")}</h5>
            </div>
          </div>
          <Row className="mt-5 p-3 transparent make_image_center">
            <Col md={12} style={{ color: "#f9f9f9" }}>
              <FormLabel id="Inputname" className="mt-3 font-bold">
                {t("login_2")}
              </FormLabel>
              <FormControl
                style={{ color: "#f9f9f9", backgroundColor: "#161b22" }}
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormLabel id="Inputpassword" className="mt-3 font-bold">
                {t("login_3")}
              </FormLabel>
              <FormControl
                style={{ color: "#f9f9f9", backgroundColor: "#161b22" }}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="text-end mt-3">
                <a
                  href="#"
                  style={{
                    color: "#6499E9",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  {t("login_4")}
                </a>
              </div>
              <div>
                <FormGroup controlId="remember">
                  <FormCheck
                    type="checkbox"
                    label="Remember me"
                    className="mt-3"
                  />
                </FormGroup>
              </div>
              <FormGroup id="forgotPassword"></FormGroup>
              <Link to={"#"}>
                <Button
                  className="mt-4 signin_hover"
                  style={{
                    width: "100%",
                    backgroundColor: "#6499E9",
                    fontWeight: "bold",
                  }}
                >
                  {t("login_6")}
                </Button>
              </Link>
            </Col>
          </Row>
          {/*  */}
          <div className="px-3">
            <p className="p-3">
              {t("login_7")} &nbsp;
              <span>
                <Link
                  to="#"
                  style={{
                    color: "#6499E9",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  {t("login_8")} <br /> {t("login_9")}
                </Link>
              </span>
            </p>
            <p className="text-center">
              {t("login_10")} &nbsp;
              <Link
                to="/register"
                style={{
                  color: "#6499E9",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                {t("login_11")}
              </Link>
            </p>
            <div className="d-flex align-items-center hr-center">
              &nbsp; {t("login_12")} &nbsp;
            </div>
            <Form className="px-3">
              <Link to={"https://www.google.com/account/about/"} target="_new">
                <Button
                  variant="secondary"
                  className="btn_trans w-100 text-center mt-2"
                >
                  <span>
                    <img
                      src={google}
                      alt="google.com"
                      style={{ width: " 20px" }}
                    />
                  </span>
                  &nbsp;{" "}
                  <span style={{ color: "#f9f9f9" }}>{t("login_13")}</span>
                </Button>
              </Link>
              <Link
                to={"https://www.facebook.com/TeslaMotorsCorp/"}
                target="_blank"
              >
                <Button
                  variant="secondary"
                  className="btn_trans w-100 text-center mt-2"
                >
                  <span>
                    <img
                      src={facebook}
                      alt="google.com"
                      style={{ width: " 20px" }}
                    />
                  </span>
                  &nbsp;{" "}
                  <span style={{ color: "#f9f9f9" }}>{t("login_14")}</span>
                </Button>
              </Link>
              <Link
                to={"https://gitlab.com/explore/projects/topics/tesla"}
                target="_blank"
              >
                <Button
                  variant="secondary"
                  className="btn_trans w-100 text-center mt-2"
                >
                  <span>
                    <img
                      src={gitlab}
                      alt="google.com"
                      style={{ width: " 20px" }}
                    />
                  </span>
                  &nbsp;{" "}
                  <span style={{ color: "#f9f9f9" }}>{t("login_15")}</span>
                </Button>
              </Link>
            </Form>
          </div>
        </div>
      </Container>
      <div style={{ marginTop: "10%", marginBottom: "%" }}>
        <hr />
        <div className="text-center">
          <div
            data-bs-theme="dark"
            title={title}
            id="nav-dropdown"
            className="d-flex justify-content-center align-items-center gap-5"
            onSelect={selectFlag}
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
          // show={showDropdown}
          >
            {language.map((l) => (
              <div
                eventKey={l.name}
                onClick={() => handleMenuToggle(i18n.changeLanguage(l.code))}
              >
                <NavLink className={"nav-link nav-style"}>
                  &nbsp; {l.name}
                </NavLink>
              </div>
            ))}
          </div>
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
    </>
  );
};

export default Login;
