import React from "react";
import {
    Button,
    Col,
    Container,
    Form,
    FormControl,
    FormLabel,
    NavLink,
    Row,
} from "react-bootstrap";

import teslaLogoLogin from "../../interface/Flag-Icons/LogoTesla/02_0x0-Tesla_T_White.png";
import google from "../../interface/Flag-Icons/google.png";
import facebook from "../../interface/Flag-Icons/facebook.png";
import gitlab from "../../interface/Flag-Icons/gitlab.png";

import "../../interface/css/Register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const UserRegister = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");

    const newLogin = {
        fname,
        lname,
        email,
        password,
    };

    console.log(newLogin);

    const [showMenu, setShowMenu] = useState(false);
    const [title, setTitle] = useState("Languages");

    const [click, setClick] = useState(false);

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
                            <h5 className="fw-bold">{t("register_1")}</h5>
                        </div>
                    </div>
                    {/* Form */}
                    <Row className="mt-5 p-3 transparent make_image_center">
                        <Col md={12} style={{ color: "#f9f9f9" }}>
                            <Row>
                                <Col>
                                    <FormLabel id="InputFname" className="mt-3 font-bold">
                                        {t("register_2")}
                                    </FormLabel>
                                    <FormControl
                                        style={{ color: "#f9f9f9", backgroundColor: "#161b22" }}
                                        type="text"
                                        value={fname}
                                        onChange={(e) => setFName(e.target.value)}
                                    />
                                </Col>
                                <Col>
                                    <FormLabel id="InputLname" className="mt-3 font-bold">
                                        {t("register_3")}
                                    </FormLabel>
                                    <FormControl
                                        style={{ color: "#f9f9f9", backgroundColor: "#161b22" }}
                                        type="text"
                                        value={lname}
                                        onChange={(e) => setLName(e.target.value)}
                                    />
                                </Col>
                            </Row>
                            <FormLabel id="Inputname" className="mt-3 font-bold">
                                {t("register_4")}
                            </FormLabel>
                            <FormControl
                                style={{ color: "#f9f9f9", backgroundColor: "#161b22" }}
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <p style={{ color: "#bbb" }}>{t("register_5")}</p>
                            <FormLabel id="Inputpassword" className="mt-3 font-bold">
                                {t("register_6")}
                            </FormLabel>
                            <FormControl
                                style={{ color: "#f9f9f9", backgroundColor: "#161b22" }}
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <p style={{ color: "#bbb" }}>{t("register_7")}</p>
                            {/* <FormGroup id="forgotPassword">{t("register_7")}</FormGroup> */}
                            <Link to={"/login"}>
                                <Button
                                    className="mt-4 px-3"
                                    style={{
                                        width: "100%",
                                        backgroundColor: "#6499E9",
                                        fontWeight: "bold",
                                    }}
                                >
                                    {t("register_8")}
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                    {/*  */}
                    <div className="px-3">
                        <p className="p-3">
                            {t("register_9")} &nbsp;
                            <br />
                            <span>
                                <Link
                                    to="#"
                                    style={{
                                        color: "#6499E9",
                                        textDecoration: "none",
                                        fontWeight: "bold",
                                    }}
                                >
                                    {t("register_10")}
                                </Link>
                            </span>
                        </p>
                        <div className="text-center fs-6">
                            <p>{t("register_11")}</p>
                        </div>
                        <Form className="px-3">
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
                                <span style={{ color: "#f9f9f9" }}>{t("register_12")}</span>
                            </Button>
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
                                <span style={{ color: "#f9f9f9" }}>{t("register_13")}</span>
                            </Button>
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
                                <span style={{ color: "#f9f9f9" }}>{t("register_14")}</span>
                            </Button>
                            <p className="text-center mt-5">
                                {t("register_15")} &nbsp;
                                <Link
                                    to="/userlogin"
                                    style={{
                                        color: "#6499E9",
                                        textDecoration: "none",
                                        fontWeight: "bold",
                                    }}
                                >
                                    {t("register_16")}
                                </Link>
                            </p>
                        </Form>
                    </div>
                </div>
            </Container>
            <div>
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
        </>
    )
}

export default UserRegister