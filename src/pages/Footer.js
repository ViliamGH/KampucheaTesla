import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "../css/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import facebook from "../Flag-Icons/facebook.png";
import twitter from "../Flag-Icons/twitter.png";
import gitlab from "../Flag-Icons/gitlab.png";
import instagram from "../Flag-Icons/instagram.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container fluid>
        <Row style={{ backgroundColor: "#1c2438", paddingLeft: "30px" }}>
          <Col md={4}>
            <div className="footer_title mt-4">{t("footer_1")}</div>
            <p style={{ color: "#B4B4B3" }}>{t("footer__1")}</p>
          </Col>
          <Col md={2}>
            <div>
              <div className="footer_title mt-4">{t("footer_2")}</div>
              <ul className="li-link">
                <li>
                  <Link to="#" className="hover-link">
                    {t("footer_3")}
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover-link">
                    {t("footer_4")}
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover-link">
                    {t("footer_5")}
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover-link">
                    {t("footer_6")}
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={3}>
            <div>
              <div className="footer_title mt-4">{t("footer_7")}</div>
              <ul className="li-link">
                <li>
                  <Link to="" className="hover-link">
                    {t("footer_8")}
                    <span className="px-2" style={{ color: "#bbb" }}>
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="" className="hover-link">
                    {t("footer_9")}
                    <span className="px-2" style={{ color: "#bbb" }}>
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={2}>
            <div>
              <div className="footer_title mt-4">{t("footer_10")}</div>
              <ul className="li-link">
                <li>
                  <Link to="" className="hover-link">
                    {t("footer_11")}
                    <span className="px-2" style={{ color: "#bbb" }}>
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row
          style={{
            backgroundColor: "#0d1116",
            padding: "10px",
            paddingLeft: "32px",
          }}
        >
          <Col md={6}>
            <div>© {t("footer_12")} Ltd. 2023</div>
          </Col>
          <Col md={6}>
            <section className="d-flex justify-content-end gap-3 px-3">
              <Link
                to="https://www.facebook.com/TeslaMotorsCorp/"
                target="_blank"
              >
                <span>
                  <img src={facebook} alt="..." style={{ width: "35px" }} />
                </span>
              </Link>
              <Link
                to="https://twitter.com/Tesla?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                target="_blank"
              >
                <span>
                  <img src={twitter} alt="..." style={{ width: "35px" }} />
                </span>
              </Link>
              <Link
                to="https://www.instagram.com/teslamotors/?hl=en"
                target="_blank"
              >
                <span>
                  <img src={instagram} alt="..." style={{ width: "35px" }} />
                </span>
              </Link>
              <Link
                to="https://gitlab.com/explore/projects/topics/tesla"
                target="_blank"
              >
                <span>
                  <img src={gitlab} alt="..." style={{ width: "35px" }} />
                </span>
              </Link>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
