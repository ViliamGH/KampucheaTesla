import React from "react";

import privacy from "../Image_webp/PrivacyAndLegal.avif";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import privacy1 from "../Image_webp/Privacy_1.avif";
import privacy2 from "../Image_webp/Privacy_2.avif";
import privacy3 from "../Image_webp/Privacy_3.avif";
import Footer from "./Footer";
import { useTranslation } from "react-i18next";

const PrivacyAndLegal = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container fluid className="p-5 ">
        <section className="mt-5">
          <img src={privacy} alt="" width={"100%"} />
        </section>
        <section className="mt-5">
          <div>
            <h1>
              <strong>{t("privacy_1")}</strong>
            </h1>
          </div>
          <div className="mt-5 p-5 px-0">
            <p>{t("privacy_2")}</p>
            <p>
              <Link
                to=""
                style={{
                  textDecoration: "none",
                  color: "#337CCF",
                  fontWeight: "bold",
                }}
              >
                {" "}
                <strong>{t("privacy_3")}</strong>{" "}
              </Link>
            </p>
            <p>
              <Link
                to=""
                style={{
                  textDecoration: "none",
                  color: "#337CCF",
                  fontWeight: "bold",
                }}
              >
                {" "}
                <strong>{t("privacy_4")}</strong>{" "}
              </Link>
            </p>
          </div>
          <Row className="mb-5 mt-5">
            <Col sm={4}>
              <div>
                <img src={privacy1} alt="..." width={"100%"} />
              </div>
              <section>
                <h5 style={{ padding: "32px 0px 8px", fontSize: "17px" }}>
                  <strong>{t("privacy_5")}</strong>
                </h5>
                <p>{t("privacy__5")}</p>
              </section>
            </Col>
            <Col sm={4}>
              <div>
                <img src={privacy2} alt="..." width={"100%"} />
              </div>
              <section>
                <h5 style={{ padding: "32px 0px 8px", fontSize: "17px" }}>
                  <strong>{t("privacy_6")}</strong>
                </h5>
                <p>{t("privacy__6")}</p>
              </section>
            </Col>
            <Col sm={4}>
              <div>
                <img src={privacy3} alt="..." width={"100%"} />
              </div>
              <section>
                <h5 style={{ padding: "32px 0px 8px", fontSize: "17px" }}>
                  <strong>{t("privacy_7")}</strong>
                </h5>
                <p>{t("privacy__7")}</p>
              </section>
            </Col>
          </Row>
          <article>
            <div className="mb-4">
              <h2 className="mb-4">
                <strong>{t("privacy_8")}</strong>
              </h2>
              <p>{t("privacy_9")}</p>
            </div>
            <div className="mb-4">
              <h5 className="mb-4 fw-bold">{t("privacy_10")}</h5>
              <p>{t("privacy_11")}</p>
            </div>
            <div className="mb-4">
              <h5 className="mb-4 fw-bold">{t("privacy_12")}</h5>
              <p>{t("privacy_13")}</p>
              <p className="p-5 px-0">
                <Link
                  to=""
                  style={{
                    textDecoration: "none",
                    color: "#337CCF",
                    fontWeight: "bold",
                  }}
                >
                  {t("privacy_14")}
                </Link>
              </p>
            </div>
          </article>
          <article>
            <div>
              <h1>
                <strong>{t("privacy_15")}</strong>
              </h1>
            </div>
            <div className="d-flex justify-content-between align-items-center p-5 px-0">
              <div>
                <p>
                  <Link to="">{t("privacy_16")}</Link>
                </p>
                <p>
                  <Link to="">{t("privacy_17")}</Link>
                </p>
                <p>
                  <Link to="">{t("privacy_18")}</Link>
                </p>
                <p>
                  <Link to="">{t("privacy_19")}</Link>
                </p>
                <p>
                  <Link to="">{t("privacy_20")}</Link>
                </p>
              </div>
              <div>
                <p>
                  <Link to="">{t("privacy_21")}</Link>
                </p>
                <p>
                  <Link to="">{t("privacy_22")}</Link>
                </p>
                <p>
                  <Link
                    to=""
                    style={{
                      textDecoration: "none",
                      color: "#337CCF",
                      fontWeight: "bold",
                    }}
                  >
                    {t("privacy_23")}
                  </Link>
                </p>
              </div>
            </div>
          </article>
        </section>
      </Container>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default PrivacyAndLegal;
