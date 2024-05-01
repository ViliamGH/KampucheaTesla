import React from "react";
import "../css/AboutUs.css";

import { Container, Row, Col } from "react-bootstrap";
import aboutusvideo_1 from "../Image_webp/aboutusvideo1.mp4";
import aboutus_2 from "../Image_webp/aboutus_2.avif";
import aboutus_3 from "../Image_webp/aboutus_3.avif";
import aboutus_4 from "../Image_webp//aboutus_4.avif";
import aboutus_5 from "../Image_webp//aboutus_5.avif";
import "../css/Footer.css";
import { useTranslation } from "react-i18next";
import Footer from "./Footer";

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <>
      <section>
        <video autoPlay loop muted className="w-100 object-fit-contain mt-5">
          <source src={aboutusvideo_1} type="video/mp4" />
        </video>
      </section>
      <section style={{ backgroundColor: "#161b22", color: "#f9f9f9" }}>
        <section className="d-flex justify-content-center">
          <img
            src={aboutus_2}
            alt="..."
            className="w-100 object-fit-containe img-fluid"
          />
        </section>
        <section className="p-5 d-flex justify-content- align-items-center">
          <h3 className="w-50">
            <strong>{t("about_3")}</strong>
          </h3>
          <p className="w-50">{t("about__3")}</p>
        </section>
        <div>
          <section className="d-flex justify-content-center p-5">
            <img
              src={aboutus_3}
              alt="..."
              className="w-100 object-fit-contain img-fluid"
            />
          </section>
          <section className="p-5 d-flex justify-content- align-items-center">
            <h3 className="w-50">
              <strong>{t("about_4")}</strong>
            </h3>
            <p className="w-50">{t("about__4")}</p>
          </section>
        </div>
        <div>
          <section className="d-flex justify-content-center p-5">
            <img
              src={aboutus_4}
              alt="..."
              className="w-100 object-fit-contain img-fluid"
            />
          </section>
          <section className="p-5 d-flex justify-content- align-items-center">
            <h3 className="w-50">
              <strong>
                {t("about_5")}
                <br />
                {t("about__5")}
              </strong>
            </h3>
            <p className="w-50">{t("about_6")}</p>
          </section>
        </div>
        <div>
          <section className="d-flex justify-content-center p-5">
            <img
              src={aboutus_5}
              alt="..."
              className="w-100 object-fit-contain img-fluid"
            />
          </section>
          <section className="p-5 d-flex justify-content- align-items-center">
            <h3 className="w-50">
              <strong>{t("about_7")}</strong>
            </h3>
            <p className="w-50">{t("about__7")}</p>
          </section>
        </div>
      </section>
      {/* style footer only in aboutus pageg */}
      <Container fluid style={{ backgroundColor: "##161b22" }}></Container>
      <Footer />
    </>
  );
};

export default AboutUs;
