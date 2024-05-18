import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "../css/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faChargingStation } from "@fortawesome/free-solid-svg-icons";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";

const Footer = () => {
  // const { t } = useTranslation();
  return (
    <>
      <Container fluid className="p-0">
        {/* Footer */}
        <main className="round">
          <div>
            <div className="p-4 text-center">
              <p>
                Tesla: Accelerating the World's Transition to Sustainable Energy. Explore our groundbreaking electric vehicles, including the Model S, Model 3, Model X, Model Y, and Cybertruck. Discover our range of solar panels, solar roof tiles, and energy storage solutions such as the Powerwall and Powerpack, designed to empower homes and businesses to harness renewable energy.
                <br />
                Join us in revolutionizing transportation and powering a cleaner, more sustainable future. Stay updated on the latest news, events, and innovations from Tesla.
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
                        Follow us on social media for behind-the-scenes insights and community updates: &nbsp;
                        <Link to={"#"}>
                          < FontAwesomeIcon icon={faChargingStation} className="icon-2" />
                        </Link>
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faCircle} className="icon" /> &nbsp;
                        Subscribe to our newsletter for exclusive content, event invitations, and special offers: &nbsp;
                        <Link to={"#"}>
                          <FontAwesomeIcon icon={faRightToBracket} className="icon-3" />
                        </Link>
                      </p>
                      <p>
                        Experience the future of mobility and energy with Tesla.
                      </p>
                      <p>
                        <span className="fw-bold">©</span> 2024 Tesla, Inc. All rights reserved. Privacy & Legal | Careers | Investor Relations
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
                        © 2023 Lenovo. All rights reserved.
                      </div>
                      <div>
                        Privacy Cookie Consent Tool Do Not Sell U.S. Privacy Notice Site Map Terms of Use External Submission
                      </div>
                      <div>
                        Policy Sales terms and conditions Anti-Slavery and Human Trafficking Statement
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
