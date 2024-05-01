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
import "../../css/Sidebar.css";
import bemo from "../../Admin_Icon_Page/bemo.png";

const Sidebar = () => {
  
  return (
    <>
      <aside className="sidebar">
        <div className="sidebar-title">
          <section className="sidebar-brand px-2">
            <div >
              <h3 className="fw-bold m-0">ADMINS</h3>
            </div>
            <div
              className="pointer"
              
            >
              <FontAwesomeIcon
                icon={faListUl}
                style={{ color: "#f9f9f9" }}
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
          <section>
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
              <div>
                DashBoard
              </div>
            </Link>
          </li>
          <div
            style={{
              
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
              <div>
                Manage Team
              </div>
            </Link>
          </li>
          <li>
            <Link to={"/adminproduct"} className="li-style p-3 m-1">
              <FontAwesomeIcon icon={faBoxArchive} />
              <div>Product</div>
            </Link>
          </li>
          <li>
            <Link to={"/adminuser"} className="li-style p-3 m-1">
              <FontAwesomeIcon icon={faUserLarge} />
              <div> User</div>
            </Link>
          </li>
          <div
            style={{
            
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
              <div>
                Product Form
              </div>
            </Link>
          </li>
          <li>
            <Link to={"/insertusers"} className="li-style p-3 m-1">
              <FontAwesomeIcon icon={faUserLock} />
              <div>
                Profile Form
              </div>
            </Link>
          </li>
          <li>
            <Link to={"#"} className="li-style p-3 m-1">
              <FontAwesomeIcon icon={faCalendarDay} />
              <div >Calender</div>
            </Link>
          </li>
          <div
            style={{
        
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
              <div >
                Bar Chart
              </div>
            </Link>
          </li>
          <li>
            <Link to="#" className="li-style p-3 m-1">
              <FontAwesomeIcon icon={faChartLine} />
              <div >
                Line Char
              </div>
            </Link>
          </li>
          <li>
            <Link to={"/location"} className="li-style p-3 m-1">
              <FontAwesomeIcon icon={faLocationDot} />
              <div >Location</div>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
