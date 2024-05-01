import "../App.css";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, NavLink } from "react-router-dom";
import { Button, NavDropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import "../css/MyNavBarBro.css";
import teslablack from "../Flag-Icons/LogoTesla/04_0x0-Tesla_Wordmark_10_White.png";

function MyNavBarBro() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [title, setTitle] = useState("Languages");

  const [showDropdown, setShowDropdown] = useState(false);
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
      <Container
        fluid
        className="d-flex justify-content-between align-items-center"
      >
        <Navbar expand="lg" fixed="top" className="p-3 top-nav-style">
          <Navbar.Brand>
            <Link to={"/"}>
              <img
                src={teslablack}
                alt="..."
                style={{ width: "120px", cursor: "pointer" }}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            id="nav-toggle-style-option"
            aria-controls="offcanvasNavbar"
            onClick={() => setShowMenu(true)}
          />
          <Navbar.Offcanvas
            className="nav-offcanvas-style"
            id="offcanvasNavbar"
            aria-labelledby={`offcanvasNavbarLabel`}
            placement="start"
            show={showMenu}
            onHide={() => setShowMenu(false)}
          >
            <Offcanvas.Header
              closeButton
              closeVariant="white"
              style={{
                borderBottom: "1px solid #CCC",
                backgroundColor: "#0d1116",
              }}
            >
              <Offcanvas.Title>
                <img
                  src={teslablack}
                  alt=""
                  style={{ width: "130px", cursor: "default" }}
                />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav navbarScroll className="me-auto">
                <NavLink
                  onClick={handleMenuToggle}
                  className={"nav-link nav-style"}
                  style={{ color: "#f9f9f9" }}
                  to="/"
                >
                  {t("navbar_1")}
                </NavLink>
                <NavLink
                  onClick={handleMenuToggle}
                  className={"nav-link nav-style"}
                  style={{ color: "#f9f9f9" }}
                  to="/shop"
                >
                  {t("navbar_9")}
                </NavLink>
                <NavLink
                  onClick={handleMenuToggle}
                  className={"nav-link nav-style"}
                  style={{ color: "#f9f9f9" }}
                  to="/privacyandlegal"
                >
                  {t("privacy")}
                </NavLink>
                <NavLink
                  onClick={handleMenuToggle}
                  className={"nav-link nav-style"}
                  style={{ color: "#f9f9f9" }}
                  to="/contactus"
                >
                  {t("contactus")}
                </NavLink>
                <NavLink
                  onClick={handleMenuToggle}
                  className={"nav-link nav-style"}
                  style={{ color: "#f9f9f9" }}
                  to="/aboutus"
                >
                  {t("aboutus")}
                </NavLink>
              </Nav>

              <div className="d-flex justify-content-start align-items-center gap-3">
                <NavDropdown
                  data-bs-theme="dark"
                  title={title}
                  id="nav-dropdown"
                  className="nav-style"
                  onSelect={selectFlag}
                // onMouseEnter={handleMouseEnter}
                // onMouseLeave={handleMouseLeave}
                // show={showDropdown}
                >
                  {language.map((l) => (
                    <NavDropdown.Item
                      eventKey={l.name}
                      onClick={() =>
                        handleMenuToggle(i18n.changeLanguage(l.code))
                      }
                    >
                      <NavLink className={"nav-link nav-style"}>
                        &nbsp; {l.name}
                      </NavLink>
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
                <NavLink
                  className="nav-link mx-3"
                  to="/login"
                  onClick={() => {
                    if (showNavbar === true) {
                      setShowNavbar(false);
                      handleMenuToggle();
                    } else {
                      setShowNavbar(true);
                      handleMenuToggle();
                    }
                  }}
                >
                  <Button variant="none" className="none-hover">
                    {t("navbar_7")}
                  </Button>
                </NavLink>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar>
      </Container>
    </>
  );
}

export default MyNavBarBro;
