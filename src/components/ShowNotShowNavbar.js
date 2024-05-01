import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ShowNotShowNavbar = ({ children }) => {
  // allows you to access the location object that represents the active URL
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(false);

  /* 
    define three regex patterns: regex for "viewproduct",
      regex2 for "viewprofile", 
      regex3 for "reviewproduct". 
      The patterns include a dynamic parameter \d+ that represents one or more digits.
  */
  const regex = /\/viewproduct\/\d+$/;
  const regex2 = /\/viewprofile\/\d+$/;
  const regex3 = /\/reviewproduct\/\d+$/;

  useEffect(() => {
    console.log("Information: " + location);
    // location.pathname === "..." a string containing the path of the URL for the location
    if (
      location.pathname === "/login" ||
      location.pathname === "/insertusers" ||
      location.pathname === "/insertproducts" ||
      location.pathname === "/register" ||
      location.pathname === "/adminpage" ||
      location.pathname === "/adminhome" ||
      location.pathname === "/adminuser" ||
      location.pathname === "/adminproduct" ||
      location.pathname === "/location" ||
      location.pathname === "/dashboard" ||
      regex.test(location.pathname) ||
      regex2.test(location.pathname) ||
      regex3.test(location.pathname)
    ) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [location]);
  return <div>{showNavbar && children}</div>;
};

export default ShowNotShowNavbar;
