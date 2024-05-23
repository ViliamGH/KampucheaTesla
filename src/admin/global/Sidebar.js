import { React } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxArchive,
  faCalendarDay,
  faChartLine,
  faChartSimple,
  faHouse,
  faListUl,
  faLocationDot,
  faTableCells,
  faUserGroup,
  faUserLarge,
  faUserLock,
} from "@fortawesome/free-solid-svg-icons";
import "../css/Sidebar.css";
import bemo from "../Admin_Icon_Page/bemo.png";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <aside className="sidebar" style={{ width: isOpen ? "250px" : "90px" }}>
        <div className="sidebar-title">
          <section className="sidebar-brand px-2">
            <div style={{ display: isOpen ? "block" : "none" }}>
              <h3 className="fw-bold m-0">ADMINS</h3>
            </div>
            <div
              className="pointer"
              style={{ marginLeft: isOpen ? "0px" : "15px" }}
            >
              <FontAwesomeIcon
                icon={faListUl}
                style={{ color: "#f9f9f9" }}
                onClick={toggleSidebar}
              />
            </div>
          </section>
          <section className="d-flex justify-content-center align-items-center mt-5">
            <img
              src={bemo}
              alt="..."
              width={"100px"}
              style={{
                backgroundColor: "#151929",
                borderRadius: "50%",
                padding: "10px",
              }}
            />
          </section>
          <section style={{ display: isOpen ? "block" : "none" }}>
            <h6 className="text-center mt-3">
              Bemo Mode <br />
              <span style={{ color: "#3db193" }}>Fancy Admin</span>
            </h6>
          </section>
        </div>
        <hr />
        <ul className="list-unstyle p-3 sticky-top">
          <li>
            <Link to={"/dashboard"} className="li-style p-3 m-1">
              <FontAwesomeIcon icon={faHouse} />
              <div style={{ display: isOpen ? "block" : "none" }}>
                DashBoard
              </div>
            </Link>
          </li>
          <div
            style={{
              display: isOpen ? "block" : "none",
              color: "#bbb",
              paddingTop: "20px",
              paddingBottom: "15px",
            }}
          >
            Data
          </div>
          <li>
            <Link to="#" className="li-style p-3 m-1">
              <FontAwesomeIcon icon={faUserGroup} />
              <div style={{ display: isOpen ? "block" : "none" }}>
                Manage Team
              </div>
            </Link>
          </li>
          <li>
            <Link to={"/adminproduct"} className="li-style p-3 m-1">
              <FontAwesomeIcon icon={faBoxArchive} />
              <div style={{ display: isOpen ? "block" : "none" }}>Product</div>
            </Link>
          </li>
          <li>
            <Link to={"/adminuser"} className="li-style p-3 m-1">
              <FontAwesomeIcon icon={faUserLarge} />
              <div style={{ display: isOpen ? "block" : "none" }}> User</div>
            </Link>
          </li>
          <div
            style={{
              display: isOpen ? "block" : "none",
              color: "#bbb",
              paddingTop: "20px",
              paddingBottom: "15px",
            }}
          >
            Pages
          </div>
          <li>
            <Link to={"/insertproducts"} className="li-style p-3 m-1">
              <FontAwesomeIcon icon={faTableCells} />
              <div style={{ display: isOpen ? "block" : "none" }}>
                Product Form
              </div>
            </Link>
          </li>
          <li>
            <Link to={"/insertusers"} className="li-style p-3 m-1">
              <FontAwesomeIcon icon={faUserLock} />
              <div style={{ display: isOpen ? "block" : "none" }}>
                Profile Form
              </div>
            </Link>
          </li>
          <li>
            <Link to={"#"} className="li-style p-3 m-1">
              <FontAwesomeIcon icon={faCalendarDay} />
              <div style={{ display: isOpen ? "block" : "none" }}>Calender</div>
            </Link>
          </li>
          <div
            style={{
              display: isOpen ? "block" : "none",
              color: "#bbb",
              paddingTop: "20px",
              paddingBottom: "15px",
            }}
          >
            Charts
          </div>
          <li>
            <Link to={"#"} className="li-style p-3 m-1">
              <FontAwesomeIcon icon={faChartSimple} />
              <div style={{ display: isOpen ? "block" : "none" }}>
                Bar Chart
              </div>
            </Link>
          </li>
          <li>
            <Link to="#" className="li-style p-3 m-1">
              <FontAwesomeIcon icon={faChartLine} />
              <div style={{ display: isOpen ? "block" : "none" }}>
                Line Char
              </div>
            </Link>
          </li>
          <li>
            <Link to={"/location"} className="li-style p-3 m-1">
              <FontAwesomeIcon icon={faLocationDot} />
              <div style={{ display: isOpen ? "block" : "none" }}>Location</div>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
