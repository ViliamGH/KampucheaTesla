import React from "react";
import "../../css/Topbar.css";
import bemo from "../../Admin_Icon_Page/bemo.png";

const Topbar = () => {
  return (
    <>
      <section>
        <div className="top-bar" style={{ backgroundColor: "#040d21ff" }}>asdasdasdasdas</div>
      </section>
    </>
  );
};

export default Topbar;

// import { useState } from "react";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import Offcanvas from "react-bootstrap/Offcanvas";
// import { NavLink } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import adminICON from "../../Admin_Icon_Page/finn_admin.png";
// import dashboardICON from "../../Admin_Icon_Page/analysis.png";
// import bookingICON from "../../Admin_Icon_Page/booking.png";
// import reportICON from "../../Admin_Icon_Page/report.png";
// import locationICON from "../../Admin_Icon_Page/location.png";
// import productICON from "../../Admin_Icon_Page/product.png";
// import userICON from "../../Admin_Icon_Page/user.png";
// import settingICON from "../../Admin_Icon_Page/setting.png";
// import supportICON from "../../Admin_Icon_Page/support.png";
// import logoutICON from "../../Admin_Icon_Page/logout.png";
// import { Link } from "react-router-dom";
// import bmo from "../../Admin_Icon_Page/bemo.png";

// import "../../css/Topbar.css";

// const Topbar = () => {
//   const [showNavbar, setShowNavbar] = useState(false);
//   const [showMenu, setShowMenu] = useState(false);
//   const [title, setTitle] = useState("Region & Language");

//   const [showDropdown, setShowDropdown] = useState(false);

//   // const handleMouseEnter = () => {
//   //   setShowDropdown(true);
//   // };

//   // const handleMouseLeave = () => {
//   //   setShowDropdown(false);
//   // };

//   const selectFlag = (eventKey) => {
//     setTitle(eventKey);
//   };

//   const handleMenuToggle = () => {
//     setShowMenu(false);
//   };

//   const { t, i18n } = useTranslation();

//   const language = [
//     { code: "en", name: "English" },
//     { code: "kh", name: "ខ្មែរ" },
//     { code: "ch", name: "中国" },
//   ];

//   return (
//     <>
//       <Navbar expand="xxxl" fixed="top" className="p-3 px-3 top-nav-style">
//         <Navbar.Brand>
//           <img
//             src={adminICON}
//             alt="..."
//             style={{ width: "auto", height: "100%" }}
//           />
//         </Navbar.Brand>
//         <Navbar.Toggle
//           id="nav-toggle-style-option"
//           aria-controls="offcanvasNavbar"
//           onClick={() => setShowMenu(true)}
//         />
//         <Navbar.Offcanvas
//           className="nav-offcanvas-style"
//           id="offcanvasNavbar"
//           aria-labelledby={`offcanvFasNavbarLabel`}
//           placement="start"
//           show={showMenu}
//           onHide={() => setShowMenu(false)}
//         >
//           <Offcanvas.Header
//             closeButton
//             closeVariant="white"
//             style={{ borderBottom: "1px solid #CCC" }}
//           >
//             <Offcanvas.Title>
//               <img
//                 src={bmo}
//                 alt="..."
//                 style={{ width: "130px", cursor: "default" }}
//               />
//             </Offcanvas.Title>
//           </Offcanvas.Header>
//           <Offcanvas.Body>
//             <Nav navbarScroll className="d-flex justify-content-center">
//               <NavLink
//                 className="nav-link nav-style"
//                 style={{ color: "#f9f9f9" }}
//                 onClick={handleMenuToggle}
//                 to="/adminproduct"
//               >
//                 <ul className="list-unstyle">
//                   <li>
//                     <Link to={"/"} className="li-style">
//                       <img
//                         src={dashboardICON}
//                         alt="..."
//                         style={{ width: "auto", height: "100%" }}
//                       />
//                       DashBoard
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/adminproduct" className="li-style">
//                       <img
//                         src={productICON}
//                         alt="..."
//                         style={{ width: "auto", height: "100%" }}
//                       />
//                       Product
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to={"/adminuser"} className="li-style">
//                       <img
//                         src={userICON}
//                         alt="..."
//                         style={{ width: "auto", height: "100%" }}
//                       />
//                       User
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to={"#"} className="li-style">
//                       <img
//                         src={bookingICON}
//                         alt="..."
//                         style={{ width: "auto", height: "100%" }}
//                       />
//                       Booking
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to={"#"} className="li-style">
//                       <img
//                         src={reportICON}
//                         alt="..."
//                         style={{ width: "auto", height: "100%" }}
//                       />
//                       Report
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to={"/location"} className="li-style">
//                       <img
//                         src={locationICON}
//                         alt="..."
//                         style={{ width: "auto", height: "100%" }}
//                       />
//                       Location
//                     </Link>
//                   </li>
//                 </ul>
//                 <ul className="list-unstyle mt-5">
//                   <li>
//                     <Link to={"#"} className="li-style">
//                       <img
//                         src={settingICON}
//                         alt="..."
//                         style={{ width: "auto", height: "100%" }}
//                       />
//                       Setting
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to={"#"} className="li-style">
//                       <img
//                         src={supportICON}
//                         alt="..."
//                         style={{ width: "auto", height: "100%" }}
//                       />
//                       Support
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to={"/"} className="li-style">
//                       <img
//                         src={logoutICON}
//                         alt="..."
//                         style={{ width: "auto", height: "100%" }}
//                       />
//                       Logout
//                     </Link>
//                   </li>
//                 </ul>
//               </NavLink>
//             </Nav>
//           </Offcanvas.Body>
//         </Navbar.Offcanvas>
//       </Navbar>
//     </>
//   );
// };

// export default Topbar;
