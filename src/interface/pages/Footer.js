import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "../css/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faChargingStation } from "@fortawesome/free-solid-svg-icons";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container fluid className="p-0">
        {/* Footer */}
        <main className="round">
          <div>
            <div className="p-4 text-center">
              <p>
                {t("footer_2")}
                <br />
                {t("footer_3")}
              </p>
            </div>
            <hr className="fw-bold border-3 border-dark" />
            <div className="d-flex justify-content-center p-3">
              <Row>
                <Col lg={12}>
                  <ul className="list-unstyled fs-6">
                    <div className="t-start">
                      <p className="fw-bold fs-5">
                        Connect with us:
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faCircle} className="icon" /> &nbsp;
                        {t("footer_4")}
                        &nbsp;
                        <Link to={"#"}>
                          < FontAwesomeIcon icon={faChargingStation} className="icon-2" />
                        </Link>
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faCircle} className="icon" /> &nbsp;
                        {t("footer_5")}
                        &nbsp;
                        <Link to={"#"}>
                          <FontAwesomeIcon icon={faRightToBracket} className="icon-3" />
                        </Link>
                      </p>
                      <p>
                        {t("footer_6")}
                      </p>
                      <p>
                        <span className="fw-bold">©</span> {t("footer_8")}
                      </p>
                    </div>
                  </ul>
                </Col>
              </Row>
            </div>

            {/* bottom */}
            <hr className="fw-bold border-3 border-dark" />
            <div className="list-unstyled d-flex justify-content-center p-3">
              <Row>
                <Col lg={12}>
                  <ul className="list-unstyled fs-6">
                    <div className="e-start">
                      <div className="fw-bold fs-5">
                        {t("footer_9")}
                      </div>
                      <div>
                        {t("footer_10")}
                      </div>
                      {t("footer_11")}
                      <div>
                      </div>
                    </div>
                  </ul>
                </Col>
              </Row>
            </div>
          </div>
        </main>
      </Container >
    </>
  );
};

export default Footer;
