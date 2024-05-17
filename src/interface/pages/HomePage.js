import React from 'react'
import { Button, Carousel, Col, Container, Row } from "react-bootstrap";
import homevideo from "../Image_webp/homevideo.mp4";
import Footer from "./Footer";
import { useTranslation } from "react-i18next";

import r1 from "../Flag-Icons/Roadster/Road1.jpg";
import r2 from "../Flag-Icons/Roadster/Road2.jpg";
import r3 from "../Flag-Icons/Roadster/Road3.jpg";
import r4 from "../Flag-Icons/Roadster/Road5.jpg";
import r5 from "../Flag-Icons/Model_S/ModelS_69.jpg";
import r6 from "../Flag-Icons/Model_S/ModelS_70.jpg";
import r7 from "../Flag-Icons/Model_S/ModelS_80.jpg";
import r8 from "../Flag-Icons/Model_S/ModelS_72.jpg";
import learnmore from "../Flag-Icons/Learnmore.webp";
import learnmore2 from "../Flag-Icons/Learnmore2.webp";

import "../css/Home.css";
import { Link } from "react-router-dom";

const HomePage = () => {
    const { t } = useTranslation();
    const handlClick = () => {
        window.scrollTo(0, 0);
    };
    return (
        <>
            <Container fluid className='p-0' style={{ marginTop: "10%" }}>
                <div className="text-center">
                    <section>
                        <Row className="d-flex justify-content-center align-items-center mb-5">
                            <Col md={10} className="text-start mb-5">
                                <h1 className="text-center fw-bold mt-5 p-3">
                                    {t("homehome0")}
                                </h1>
                                <h4 className="text-center fw-bold mt-5 p-3">
                                    {t("homehome1")}
                                </h4>
                                <article className="mt-3">{t("homehome2")}</article>
                                <article>
                                    <div className="mt-3">✨ {t("homehome3")}</div>
                                    <div className="mt-3">🔋 {t("homehome4")}</div>
                                    <div className="mt-3">🌟 {t("homehome5")}</div>
                                    <div className="mt-3">🖥️ {t("homehome6")}</div>
                                    <div className="mt-3">🌐 {t("homehome7")}</div>
                                </article>
                            </Col>
                        </Row>
                    </section>

                    <section>
                        <div className="p-5 pb-0">
                            <h1 className="fw-bolder">
                                {t("homehome8")}
                                <span style={{ color: "#4D2DB7" }}>{t("homehome9")}</span>
                            </h1>
                            <p className='fs-5'>{t("homehome10")}</p>
                        </div>
                        <video
                            autoPlay
                            loop
                            muted
                            className="object-fit-contain img-fluid w-100"
                        >
                            <source src={homevideo} type="video/mp4" alt="kampuchea tesla kampuchea khmer product how it work" />
                        </video>
                    </section>

                    {/* carousel items */}
                    <section>
                        <div className="p-5 pb-0">
                            <h1 className="fw-bolder">
                                {t("homecarosuel1")}{" "}
                                <span style={{ color: "#4D2DB7" }}>{t("homecarosuel2")}</span>
                                {t("homecarosuel3")}
                                &nbsp;
                                <span style={{ color: "#4d2db7" }}>{t("homecarosuel4")}</span>
                            </h1>
                            <Link to="#" className='text-secondary'>{t("homecarosuel5")}</Link>
                        </div>

                        {/* start the carousels */}
                        <Carousel fade className='mt-5'>
                            <Carousel.Item>
                                <img src={r1} className="d-block w-100" alt="Kampuchea tesla of electric car" />
                                <div className="absolute-text-carousel2">
                                    <h2 style={{ color: "#2578cc" }}>{t("homecarosuel6")}</h2>
                                    <h4 className="fw-light">{t("homecarosuel7")}</h4>
                                    <p>
                                        <Link to="#">{t("homecarosuel18")}</Link>
                                    </p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={r2} className="d-block w-100" alt="Kampuchea tesla of electric car" />
                                <div className="absolute-text-carousel2">
                                    <h2 style={{ color: "#2578cc" }}>{t("homecarosuel6")}</h2>
                                    <h4 className="fw-light">{t("homecarosuel8")}</h4>
                                    <p>
                                        <Link to="#">{t("homecarosuel18")}</Link>
                                    </p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={r3} className="d-block w-100" alt="Kampuchea tesla of electric car" />
                                <div className="absolute-text-carousel2">
                                    <h2 style={{ color: "#2578cc" }}>{t("homecarosuel6")}</h2>
                                    <h4 className="fw-light">{t("homecarosuel9")}</h4>
                                    <p>
                                        <Link to="#">{t("homecarosuel18")}</Link>
                                    </p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={r4} className="d-block w-100" alt="Kampuchea tesla of electric car" />
                                <div className="absolute-text-carousel2">
                                    <h2 style={{ color: "#2578cc" }}>{t("homecarosuel6")}</h2>
                                    <h4 className="fw-light">{t("homecarosuel10")}</h4>
                                    <p>
                                        <Link to="#">{t("homecarosuel18")}</Link>
                                    </p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={r5} className="d-block w-100" alt="Kampuchea tesla of electric car" />
                                <div className="absolute-text-carousel2">
                                    <h2 style={{ color: "#2578cc" }}>{t("homecarosuel6")}</h2>
                                    <h4 className="fw-light">{t("homecarosuel11")}</h4>
                                    <p>
                                        <Link to="#">{t("homecarosuel18")}</Link>
                                    </p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={r6} className="d-block w-100" alt="Kampuchea tesla of electric car" />
                                <div className="absolute-text-carousel2">
                                    <h2 style={{ color: "#2578cc" }}>{t("homecarosuel6")}</h2>
                                    <h4 className="fw-light">{t("homecarosuel12")}</h4>
                                    <p>
                                        <Link to="#">{t("homecarosuel18")}</Link>
                                    </p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={r7} className="d-block w-100" alt="Kampuchea tesla of electric car" />
                                <div className="absolute-text-carousel2">
                                    <h2 style={{ color: "#2578cc" }}>{t("homecarosuel6")}</h2>
                                    <h4 className="fw-light">{t("homecarosuel13")}</h4>
                                    <p>
                                        <Link to="#">{t("homecarosuel18")}</Link>
                                    </p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={r8} className="d-block w-100" alt="Kampuchea tesla of electric car" />
                                <div className="absolute-text-carousel2">
                                    <h2 style={{ color: "#2578cc" }}>{t("homecarosuel6")}</h2>
                                    <h4 className="fw-light">{t("homecarosuel14")}</h4>
                                    <p>
                                        <Link to="#">{t("homecarosuel18")}</Link>
                                    </p>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </section>

                    <section>
                        <Row className="mt-5">
                            <Col md={6}>
                                <ul className="text-start mb-4" style={{ marginTop: "10%" }}>
                                    <li>{t("homecarosuel19")}</li>
                                    <br />
                                    <li>{t("homecarosuel21")}</li>
                                </ul>
                                <Button className="rounded-pill w-50 home-button-style">
                                    <Link
                                        to="/aboutus"
                                        onClick={handlClick}
                                        className="underline"
                                    >
                                        {t("homecarosuel20")}
                                    </Link>
                                </Button>
                            </Col>
                            <Col md={6}>
                                <img
                                    src={learnmore}
                                    alt="kampuchea tesla kampuchea khmer product how it work"
                                    width={"100%"}
                                    className="mt-5 border border-0 border-light rounded-start-pill"
                                />
                            </Col>
                        </Row>
                    </section>

                    <section>
                        <Row className="mt-5">
                            <Col md={6}>
                                <img
                                    src={learnmore2}
                                    alt="kampuchea tesla kampuchea khmer product how it work"
                                    width={"100%"}
                                    className="mt-3 border border-0 border-light rounded-end-pill"
                                />
                            </Col>
                            <Col md={6}>
                                <ul className="text-start" style={{ marginTop: "10%" }}>
                                    <li>{t("homecarosuel21")}</li>
                                    <br />
                                    <li>{t("homecarosuel23")}</li>
                                </ul>
                                <Button className="rounded-pill w-50 home-button-style">
                                    <Link
                                        to="/contactus"
                                        onClick={handlClick}
                                        className="underline"
                                    >
                                        {t("homecarosuel22")}
                                    </Link>
                                </Button>
                            </Col>
                        </Row>
                    </section>

                </div>
            </Container >
            <div className="mt-5">
                <Footer />
            </div>
        </>
    )
}

export default HomePage