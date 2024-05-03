import { SpeedInsights } from "@vercel/speed-insights/react"
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import MyNavBarBro from "./components/MyNavbarBro";
import InsertMyProducts from "./admin/pages/InsertMyProducts";
import InsertMyUsers from "./admin/pages/InsertMyUsers";
import ViewProfile from "./admin/pages/ViewProfile";
import Error404 from "./pages/Error404";
import ViewProduct from "./admin/pages/ViewProduct";
import Login from "./admin/data/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowNotShowNavbar from "./components/ShowNotShowNavbar";
import Contact from "./pages/Contact";
import PrivacyAndLegal from "./pages/PrivacyAndLegal";
import AboutUs from "./pages/AboutUs";
import Register from "./admin/data/Register";
import AdminProduct from "./admin/pages/AdminProduct";
import AdminUser from "./admin/pages/AdminUser";
import Shop from "./pages/Shop";
import ReviewProduct from "./pages/ReviewProduct";
import AdminLocation from "./admin/pages/AdminLocation";
import AdminDashBoard from "./admin/pages/AdminDashBoard";
import HomePage from "./pages/HomePage";
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
          <Route path="insertproducts" element={<InsertMyProducts />} />
          <Route path="insertusers" element={<InsertMyUsers />} />
          <Route path="viewprofile/:id" element={<ViewProfile />} />
          <Route path="viewproduct/:id" element={<ViewProduct />} />
          <Route path="contactus" element={<Contact />} />
          <Route path="privacyandlegal" element={<PrivacyAndLegal />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="*" element={<Error404 />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="shop" element={<Shop />} />
          <Route path="reviewproduct/:id" element={<ReviewProduct />} />
          <Route path="adminproduct" element={<AdminProduct />} />
          <Route path="adminuser" element={<AdminUser />} />
          <Route path="location" element={<AdminLocation />} />
          <Route path="dashboard" element={<AdminDashBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
