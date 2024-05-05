import React from 'react'

import "../assets/css/style.css";
import "../assets/vendors/mdi/css/materialdesignicons.min.css";
import "../assets/vendors/css/vendor.bundle.base.css";
import "../assets/vendors/jvectormap/jquery-jvectormap.css";
import "../assets/vendors/flag-icon-css/css/flag-icon.min.css";
import "../assets/vendors/owl-carousel-2/owl.carousel.min.css";
import "../assets/vendors/owl-carousel-2/owl.theme.default.min.css";

// image
import sidebar1 from "../assets/images/logo.svg";
import sidebar2 from "../assets/images/logo-mini.svg";
import sidebar3 from "../assets/images/faces/face5.jpg";

const Sidebar = () => {
  return (
    <>

      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
          <a className="sidebar-brand brand-logo" href="#"><img src={sidebar1} alt="logo" /></a>
          <a className="sidebar-brand brand-logo-mini" href="#">
            <img src={sidebar2} alt="logo" />
          </a>
        </div>
        <ul className="nav">
          <li className="nav-item profile">
            <div className="profile-desc">
              <div className="profile-pic">
                <div className="count-indicator">
                  <img className="img-xs rounded-circle " src={sidebar3} alt="" />
                  <span className="count bg-success"></span>
                </div>
                <div className="profile-name">
                  <h5 className="mb-0 font-weight-normal">Henry Klein</h5>
                  <span>Gold Member</span>
                </div>
              </div>
              <a href="#" id="profile-dropdown" data-toggle="dropdown"><i className="mdi mdi-dots-vertical"></i></a>
              <div className="dropdown-menu dropdown-menu-right sidebar-dropdown preview-list"
                aria-labelledby="profile-dropdown">
                <a href="#" className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-settings text-primary"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject ellipsis mb-1 text-small">Account settings</p>
                  </div>
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-onepassword  text-info"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject ellipsis mb-1 text-small">Change Password</p>
                  </div>
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-calendar-today text-success"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject ellipsis mb-1 text-small">To-do list</p>
                  </div>
                </a>
              </div>
            </div>
          </li>
          <li className="nav-item nav-category">
            <span className="nav-link">Navigation</span>
          </li>
          <li className="nav-item menu-items">
            <a className="nav-link" href="#">
              <span className="menu-icon">
                <i className="mdi mdi-speedometer"></i>
              </span>
              <span className="menu-title">Dashboard</span>
            </a>
          </li>
          <li className="nav-item menu-items">
            <a className="nav-link" href="#">
              <span className="menu-icon">
                <i className="mdi mdi-table-large"></i>
              </span>
              <span className="menu-title">Tables</span>
            </a>
          </li>
          <li className="nav-item menu-items">
            <a className="nav-link" href="#">
              <span className="menu-icon">
                <i className="mdi mdi-chart-bar"></i>
              </span>
              <span className="menu-title">Charts</span>
            </a>
          </li>
        </ul>
      </nav>


      <script src="../assets/vendors/js/vendor.bundle.base.js"></script>
      <script src="../assets/vendors/chart.js/Chart.min.js"></script>
      <script src="../assets/vendors/progressbar.js/progressbar.min.js"></script>
      <script src="../assets/vendors/jvectormap/jquery-jvectormap.min.js"></script>
      <script src="../assets/vendors/jvectormap/jquery-jvectormap-world-mill-en.js"></script>
      <script src="../assets/vendors/owl-carousel-2/owl.carousel.min.js"></script>
      <script src="../assets/js/off-canvas.js"></script>
      <script src="../assets/js/hoverable-collapse.js"></script>
      <script src="../assets/js/misc.js"></script>
      <script src="../assets/js/settings.js"></script>
      <script src="../assets/js/todolist.js"></script>
      <script src="../assets/js/dashboard.js"></script>
    </>
  )
}

export default Sidebar