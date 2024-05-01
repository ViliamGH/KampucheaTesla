import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import teslaMap1 from "../../Image_webp/TeslaMap_1.avif";
import teslaMap2 from "../../Image_webp/TeslaMap_2.avif";
import teslaMap3 from "../../Image_webp/TeslaMap_3.avif";
import teslaMap4 from "../../Image_webp/TeslaMap_4.avif";
import teslaMap5 from "../../Image_webp/TeslaMap_5.avif";
import teslaMap6 from "../../Image_webp/TeslaMap_6.avif";
import teslaMap7 from "../../Image_webp/TeslaMap_7.avif";
import teslaMap8 from "../../Image_webp/TeslaMap_8.avif";
import teslaMap9 from "../../Image_webp/TeslaMap_9.avif";
import teslaMap10 from "../../Image_webp/TeslaMap_10.avif";
import { useTranslation } from "react-i18next";
import Sidebar from "../global/Sidebar";
import Footer from "../../pages/Footer";
import "../../css/AdminLocation.css";
import {
  faBagShopping,
  faBell,
  faGear,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AdminLocation = () => {
  return (
    <>
      <div className="d-flex justify-content-between body-style">
        <div>
          <Sidebar />
        </div>
        <Container fluid className="p-3">
          <Row className="pt-3 d-flex align-items-center">
            <Col md={6}>
              <h1 style={{ color: "#f9f9f9", fontWeight: "bolder" }}>
                Product
              </h1>
              <p style={{ color: "#399780", fontWeight: "bold" }}>
                Welcome to your product information
              </p>
            </Col>
            <Col md={6} className="d-flex justify-content-end gap-4 p-4 ">
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
            <div className="mb-5">
              <Row>
                <Col lg={6}>
                  <div className="mt-5 img-hover">
                    <Link
                      to="https://www.google.com/maps/dir//Tesla,+Aeon+Mall,+Phnom+Penh/@11.5816176,104.8544163,14z/data=!4m9!4m8!1m0!1m5!1m1!1s0x310953c427953c95:0xe6f3132b481c6c11!2m2!1d104.8852811!2d11.6001478!3e0?entry=ttu"
                      target="_blank"
                    >
                      <img
                        src={teslaMap1}
                        alt="..."
                        width={"100%"}
                        className="img-fluid"
                        id="done"
                        title="Tesla Headquarters - Gigafactory Texas
                        1 Tesla Road
                        Austin, TX 78725"
                      />
                    </Link>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mt-5 img-hover">
                    <Link
                      to="https://www.google.com/maps/dir//Tesla,+Aeon+Mall,+Phnom+Penh/@11.5816176,104.8544163,14z/data=!4m9!4m8!1m0!1m5!1m1!1s0x310953c427953c95:0xe6f3132b481c6c11!2m2!1d104.8852811!2d11.6001478!3e0?entry=ttu"
                      target="_blank"
                    >
                      <img
                        src={teslaMap2}
                        alt="..."
                        width={"100%"}
                        className="img-fluid"
                        id="done"
                        title="Tesla Engineering Headquarters
                        1501 Page Mill Road
                        Palo Alto, CA 94304"
                      />
                    </Link>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mt-5 img-hover">
                    <Link
                      to="https://www.google.com/maps/dir//Tesla,+Aeon+Mall,+Phnom+Penh/@11.5816176,104.8544163,14z/data=!4m9!4m8!1m0!1m5!1m1!1s0x310953c427953c95:0xe6f3132b481c6c11!2m2!1d104.8852811!2d11.6001478!3e0?entry=ttu"
                      target="_blank"
                    >
                      <img
                        src={teslaMap3}
                        alt="..."
                        width={"100%"}
                        className="img-fluid"
                        id="done"
                        title="Tesla Factory
                        45500 Fremont Boulevard Fremont, CA 94538"
                      />
                    </Link>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mt-5 img-hover">
                    <Link
                      to="https://www.google.com/maps/dir//Tesla,+Aeon+Mall,+Phnom+Penh/@11.5816176,104.8544163,14z/data=!4m9!4m8!1m0!1m5!1m1!1s0x310953c427953c95:0xe6f3132b481c6c11!2m2!1d104.8852811!2d11.6001478!3e0?entry=ttu"
                      target="_blank"
                    >
                      <img
                        src={teslaMap4}
                        alt="..."
                        width={"100%"}
                        className="img-fluid"
                        id="done"
                        title="Tesla Gigafactory
                        Electric Avenue
                        Sparks, NV 89434"
                      />
                    </Link>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mt-5 img-hover">
                    <Link
                      to="https://www.google.com/maps/dir//Tesla,+Aeon+Mall,+Phnom+Penh/@11.5816176,104.8544163,14z/data=!4m9!4m8!1m0!1m5!1m1!1s0x310953c427953c95:0xe6f3132b481c6c11!2m2!1d104.8852811!2d11.6001478!3e0?entry=ttu"
                      target="_blank"
                    >
                      <img
                        src={teslaMap5}
                        alt="..."
                        width={"100%"}
                        className="img-fluid"
                        id="done"
                        title="Gigafactory New York
                        1339 South Park Ave Buffalo, NY 14220"
                      />
                    </Link>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mt-5 img-hover">
                    <Link
                      to="https://www.google.com/maps/dir//Tesla,+Aeon+Mall,+Phnom+Penh/@11.5816176,104.8544163,14z/data=!4m9!4m8!1m0!1m5!1m1!1s0x310953c427953c95:0xe6f3132b481c6c11!2m2!1d104.8852811!2d11.6001478!3e0?entry=ttu"
                      target="_blank"
                    >
                      <img
                        src={teslaMap6}
                        alt="..."
                        width={"100%"}
                        className="img-fluid"
                        id="done"
                        title="Gigafactory Shanghai
                        Zheng Jia Lu
                        Fengxian District China"
                      />
                    </Link>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mt-5 img-hover">
                    <Link
                      to="https://www.google.com/maps/dir//Tesla,+Aeon+Mall,+Phnom+Penh/@11.5816176,104.8544163,14z/data=!4m9!4m8!1m0!1m5!1m1!1s0x310953c427953c95:0xe6f3132b481c6c11!2m2!1d104.8852811!2d11.6001478!3e0?entry=ttu"
                      target="_blank"
                    >
                      <img
                        src={teslaMap7}
                        alt="..."
                        width={"100%"}
                        className="img-fluid"
                        id="done"
                        title="Gigafactory Berlin—Brandenburg
                        1 Tesla Straße
                        15537 Grunheide, Brandenburg"
                      />
                    </Link>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mt-5 img-hover">
                    <Link
                      to="https://www.google.com/maps/dir//Tesla,+Aeon+Mall,+Phnom+Penh/@11.5816176,104.8544163,14z/data=!4m9!4m8!1m0!1m5!1m1!1s0x310953c427953c95:0xe6f3132b481c6c11!2m2!1d104.8852811!2d11.6001478!3e0?entry=ttu"
                      target="_blank"
                    >
                      <img
                        src={teslaMap8}
                        alt="..."
                        width={"100%"}
                        className="img-fluid"
                        id="done"
                        title="Tesla Amsterdam Zuid-Oost
                        Burgemeester Stramanweg 122
                        1101 EN, Amsterdam
                        Netherlands"
                      />
                    </Link>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mt-5 img-hover">
                    <Link
                      to="https://www.google.com/maps/dir//Tesla,+Aeon+Mall,+Phnom+Penh/@11.5816176,104.8544163,14z/data=!4m9!4m8!1m0!1m5!1m1!1s0x310953c427953c95:0xe6f3132b481c6c11!2m2!1d104.8852811!2d11.6001478!3e0?entry=ttu"
                      target="_blank"
                    >
                      <img
                        src={teslaMap9}
                        alt="..."
                        width={"100%"}
                        className="img-fluid"
                        id="done"
                        title="Tilburg Factory & Delivery Center
                        Asteriastraat 1-7
                        5047 RM, Tilburg
                        Netherlands"
                      />
                    </Link>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mt-5 img-hover">
                    <Link
                      to="https://www.google.com/maps/dir//Tesla,+Aeon+Mall,+Phnom+Penh/@11.5816176,104.8544163,14z/data=!4m9!4m8!1m0!1m5!1m1!1s0x310953c427953c95:0xe6f3132b481c6c11!2m2!1d104.8852811!2d11.6001478!3e0?entry=ttu"
                      target="_blank"
                    >
                      <img
                        src={teslaMap10}
                        alt="..."
                        width={"100%"}
                        className="img-fluid"
                        id="done"
                        title="Tesla Automation GmbH
                        Rudolf-Diesel-Strasse 14
                        54595 Prüm
                        Germany"
                      />
                    </Link>
                  </div>
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

export default AdminLocation;
