import React, { useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import ShowNotShowNavbar from "./interface/components/ShowNotShowNavbar";
import MyNavBarBro from "./interface/components/MyNavbarBro";
import HomePage from "./interface/pages/HomePage";
import Shop from "./interface/pages/Shop";
import PrivacyAndLegal from "./interface/pages/PrivacyAndLegal";
import Contact from "./interface/pages/Contact";
import AboutUs from "./interface/pages/AboutUs";
import Login from "./admin/data/Login";
import Register from "./admin/data/Register";
import ReviewProduct from "./interface/pages/ReviewProduct";
import Error404 from "./interface/pages/Error404";
import AdminDashBoard from "./admin/pages/AdminDashBoard";
import AdminLocation from "./admin/pages/AdminLocation";
import AdminProduct from "./admin/pages/AdminProduct";
import AdminUser from ".//admin/pages/AdminUser";
import ViewProduct from ".//admin/pages/ViewProduct";
import ViewProfile from "./admin/pages/ViewProfile";
import InsertMyProducts from "./admin/pages/InsertMyProducts";
import InsertMyUsers from "./admin/pages/InsertMyUsers";

function App() {
  return (
    <>
      <SpeedInsights />
      <BrowserRouter>
        <ShowNotShowNavbar>
          <MyNavBarBro />
        </ShowNotShowNavbar>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<Shop />} />
          <Route path="privacyandlegal" element={<PrivacyAndLegal />} />
          <Route path="contactus" element={<Contact />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="reviewproduct/:id" element={<ReviewProduct />} />
          <Route path="insertproducts" element={<InsertMyProducts />} />
          <Route path="insertusers" element={<InsertMyUsers />} />
          <Route path="viewprofile/:id" element={<ViewProfile />} />
          <Route path="viewproduct/:id" element={<ViewProduct />} />
          <Route path="adminproduct" element={<AdminProduct />} />
          <Route path="adminuser" element={<AdminUser />} />
          <Route path="location" element={<AdminLocation />} />
          <Route path="dashboard" element={<AdminDashBoard />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
