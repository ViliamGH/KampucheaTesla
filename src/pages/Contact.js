import React from "react";

import { Col, Container, Row } from "react-bootstrap";
import Footer from "../pages/Footer";
import { Link } from "react-router-dom";

import teslaMap1 from "../Image_webp/TeslaMap_1.avif";
import teslaMap2 from "../Image_webp/TeslaMap_2.avif";
import teslaMap3 from "../Image_webp/TeslaMap_3.avif";
import teslaMap4 from "../Image_webp/TeslaMap_4.avif";
import teslaMap5 from "../Image_webp/TeslaMap_5.avif";
import teslaMap6 from "../Image_webp/TeslaMap_6.avif";
import teslaMap7 from "../Image_webp/TeslaMap_7.avif";
import teslaMap8 from "../Image_webp/TeslaMap_8.avif";
import teslaMap9 from "../Image_webp/TeslaMap_9.avif";
import teslaMap10 from "../Image_webp/TeslaMap_10.avif";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container fluid className="p-5 pt-0" style={{ marginTop: "5%" }}>
        <section>
          <div className="p-5 px-0">
            <h1>{t("contact_1")}</h1>
          </div>
          <div className="p-3 px-1">
            <p>
              <strong>{t("contact_2")}</strong>
            </p>
            <p>
              <Link to="#">{t("contact__2")}</Link>
              &nbsp; {t("contact___2")}
            </p>
          </div>
          <div className="p-3 px-1">
            <p>
              <strong>{t("contact_3")}</strong>
            </p>
            <p>
              <Link to="#">{t("contact__3")}</Link>
              &nbsp; {t("contact___3")}
            </p>
          </div>
          <div className="p-3 px-1">
            <p>
              <strong>{t("contact_4")}</strong>
            </p>
            <p>
              {t("contact__4")}&nbsp;
              <Link to="#">{t("contact___4")}</Link>
              &nbsp; {t("contact____4")}
            </p>
          </div>
          <div className="p-3 px-1">
            <p>
              <strong>{t("contact_5")}</strong>
            </p>
            <p>
              <Link to="#">{t("contact_6")}</Link>
              &nbsp; {t("contact__6")}
            </p>
          </div>
          <div className="p-3 px-1">
            <p>
              <strong>{t("contact_7")}</strong>
            </p>
            <p>
              <Link to="#">{t("contact__7")}</Link>
              &nbsp; {t("contact___7")}
            </p>
          </div>
          <div>
            <p>
              <strong>{t("contact_8")}</strong>
            </p>
            <p>{t("contact_9")}</p>
            <p>
              <Link to="#">{t("contact_10")}</Link>
            </p>
            <p>E{t("contact_11")}t</p>
            <p>
              <Link to="#">{t("contact_12")}</Link>
            </p>
            <p>{t("contact_13")}</p>
            <p>
              <Link to="#">{t("contact_14")}</Link>
            </p>
            <p>{t("contact_15")}</p>
            <p>
              <Link>{t("contact_16")}</Link>
            </p>
          </div>
        </section>
        <div className="p-5 px-0">
          <h1>{t("contact_17")}</h1>
        </div>
        <div className="mb-5">
          <Row>
            <Col md={6}>
              <section>
                <div className="mb-5 mt-5">
                  <img src={teslaMap1} alt="..." width={"100%"} />
                </div>
                <div>
                  <p>{t("contact_18")}</p>
                  <p>
                    {t("contact_19")}
                    <br />
                    {t("contact_20")}
                  </p>
                  <p>
                    <Link
                      to="https://www.google.com/maps/dir//Tesla,+Aeon+Mall,+Phnom+Penh/@11.5816176,104.8544163,14z/data=!4m9!4m8!1m0!1m5!1m1!1s0x310953c427953c95:0xe6f3132b481c6c11!2m2!1d104.8852811!2d11.6001478!3e0?entry=ttu"
                      target="_blank"
                    >
                      {t("contact_50")}
                    </Link>
                  </p>
                </div>
              </section>
            </Col>
            <Col md={6}>
              <section>
                <div className="mb-5 mt-5">
                  <img src={teslaMap2} alt="..." width={"100%"} />
                </div>
                <div>
                  <p>{t("contact_21")}</p>
                  <p>
                    {t("contact_22")}
                    <br />
                    {t("contact_23")}
                  </p>
                  <p>
                    <Link
                      to="https://www.google.com/maps/dir//Tesla,+Aeon+Mall,+Phnom+Penh/@11.5816176,104.8544163,14z/data=!4m9!4m8!1m0!1m5!1m1!1s0x310953c427953c95:0xe6f3132b481c6c11!2m2!1d104.8852811!2d11.6001478!3e0?entry=ttu"
                      target="_blank"
                    >
                      {t("contact_50")}
                    </Link>
                  </p>
                </div>
              </section>
            </Col>
            <Col md={6}>
              <section>
                <div className="mb-5 mt-5">
                  <img src={teslaMap3} alt="..." width={"100%"} />
                </div>
                <div>
                  <p>{t("contact_24")}y</p>
                  <p>
                    {t("contact_25")}
                    <br />
                    {t("contact_26")}
                  </p>
                  <p>
                    <Link
                      to="https://www.google.com/maps/dir//Tesla,+Aeon+Mall,+Phnom+Penh/@11.5816176,104.8544163,14z/data=!4m9!4m8!1m0!1m5!1m1!1s0x310953c427953c95:0xe6f3132b481c6c11!2m2!1d104.8852811!2d11.6001478!3e0?entry=ttu"
                      target="_blank"
                    >
                      {t("contact_50")}
                    </Link>
                  </p>
                </div>
              </section>
            </Col>
            <Col md={6}>
              <section>
                <div className="mb-5 mt-5">
                  <img src={teslaMap4} alt="..." width={"100%"} />
                </div>
                <div>
                  <p>{t("contact_27")}y</p>
                  <p>
                    {t("contact_28")}
                    <br />
                    {t("contact_29")}
                  </p>
                  <p>
                    <Link
                      to="https://www.google.com/maps/dir//Tesla,+Aeon+Mall,+Phnom+Penh/@11.5816176,104.8544163,14z/data=!4m9!4m8!1m0!1m5!1m1!1s0x310953c427953c95:0xe6f3132b481c6c11!2m2!1d104.8852811!2d11.6001478!3e0?entry=ttu"
                      target="_blank"
                    >
                      {t("contact_50")}
                    </Link>
                  </p>
                </div>
              </section>
            </Col>
            <Col md={6}>
              <section>
                <div className="mb-5 mt-5">
                  <img src={teslaMap5} alt="..." width={"100%"} />
                </div>
                <div>
                  <p>{t("contact_30")}</p>
                  <p>{t("contact_31")}</p>
                  <p>{t("contact_32")}</p>
                  <p>
                    <Link
                      to="https://www.google.com/maps/dir//Tesla,+Aeon+Mall,+Phnom+Penh/@11.5816176,104.8544163,14z/data=!4m9!4m8!1m0!1m5!1m1!1s0x310953c427953c95:0xe6f3132b481c6c11!2m2!1d104.8852811!2d11.6001478!3e0?entry=ttu"
                      target="_blank"
                    >
                      {t("contact_50")}
                    </Link>
                  </p>
                </div>
              </section>
            </Col>
            <Col md={6}>
              <section>
                <div className="mb-5 mt-5">
                  <img src={teslaMap6} alt="..." width={"100%"} />
                </div>
                <div>
                  <p>{t("contact_33")}</p>
                  <p>
                    {t("contact_34")}
                    <br />
                    {t("contact_")}
                  </p>
                  <p>
                    <Link
                      to="https://www.google.com/maps/dir//Tesla,+Aeon+Mall,+Phnom+Penh/@11.5816176,104.8544163,14z/data=!4m9!4m8!1m0!1m5!1m1!1s0x310953c427953c95:0xe6f3132b481c6c11!2m2!1d104.8852811!2d11.6001478!3e0?entry=ttu"
                      target="_blank"
                    >
                      {t("contact_50")}
                    </Link>
                  </p>
                </div>
              </section>
            </Col>
            {/* <Col md={6}>
              <section>
                <div className="mb-5 mt-5">
                  <img src={teslaMap7} alt="..." width={"100%"} />
                </div>
                <div>
                  <p>{t("contact_35")}</p>
                  <p>
                    {t("contact_36")}
                    <br />
                    {t("contact_37")}
                  </p>
                  <p>
                    <Link to="https://www.google.com/maps/dir//Tesla,+Aeon+Mall,+Phnom+Penh/@11.5816176,104.8544163,14z/data=!4m9!4m8!1m0!1m5!1m1!1s0x310953c427953c95:0xe6f3132b481c6c11!2m2!1d104.8852811!2d11.6001478!3e0?entry=ttu" target="_blank">
                      {t("contact_50")}s
                    </Link>
                  </p>
                </div>
              </section>
            </Col>
            <Col md={6}>
              <section>
                <div className="mb-5 mt-5">
                  <img src={teslaMap8} alt="..." width={"100%"} />
                </div>
                <div>
                  <p>{t("contact_38")}</p>
                  <p>
                    {t("contact_39")}
                    <br />
                    {t("contact_40")}
                    <br />
                    {t("contact_41")}
                  </p>
                  <p>
                    <Link to="https://www.google.com/maps/dir//Tesla,+Aeon+Mall,+Phnom+Penh/@11.5816176,104.8544163,14z/data=!4m9!4m8!1m0!1m5!1m1!1s0x310953c427953c95:0xe6f3132b481c6c11!2m2!1d104.8852811!2d11.6001478!3e0?entry=ttu" target="_blank">
                      {t("contact_50")}
                    </Link>
                  </p>
                </div>
              </section>
            </Col>
            <Col md={6}>
              <section>
                <div className="mb-5 mt-5">
                  <img src={teslaMap9} alt="..." width={"100%"} />
                </div>
                <div>
                  <p>{t("contact_42")}</p>
                  <p>
                    {t("contact_43")}
                    <br />
                    {t("contact_44")}
                    <br />
                    {t("contact_45")}
                  </p>
                  <p>
                    <Link to="https://www.google.com/maps/dir//Tesla,+Aeon+Mall,+Phnom+Penh/@11.5816176,104.8544163,14z/data=!4m9!4m8!1m0!1m5!1m1!1s0x310953c427953c95:0xe6f3132b481c6c11!2m2!1d104.8852811!2d11.6001478!3e0?entry=ttu" target="_blank">
                      {t("contact_50")}
                    </Link>
                  </p>
                </div>
              </section>
            </Col>
            <Col md={6}>
              <section>
                <div className="mb-5 mt-5">
                  <img src={teslaMap10} alt="..." width={"100%"} />
                </div>
                <div>
                  <p>{t("contact_46")}</p>
                  <p>
                    {t("contact_47")}
                    <br />
                    {t("contact_48")}
                    <br />
                    {t("contact_49")}
                  </p>
                  <p>
                    <Link to="https://www.google.com/maps/dir//Tesla,+Aeon+Mall,+Phnom+Penh/@11.5816176,104.8544163,14z/data=!4m9!4m8!1m0!1m5!1m1!1s0x310953c427953c95:0xe6f3132b481c6c11!2m2!1d104.8852811!2d11.6001478!3e0?entry=ttu" target="_blank">
                      {t("contact_50")}
                    </Link>
                  </p>
                </div>
              </section>
            </Col> */}
          </Row>
        </div>
      </Container>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
