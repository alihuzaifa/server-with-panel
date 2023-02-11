import React from "react";
import AddImage from "./Components/Carousel/AddImage";
import Home from "./screen/Home";
import MainRegister from "./screen/MainRegister";
import MainLogin from "./screen/MainLogin";
import ForgetPassword from "./screen/MainForget";
import MainForget from "./screen/MainForget";
import MainNewPassword from "./screen/MainNewPassword";
import AddProducts from "./Components/Products/AddProducts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "./Components/Auth/Login";

const AppRoute = () => {
  return (
    <>
      {/* <Provider store={store}> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/carousel" element={<AddImage />} />
          <Route path="/add-product" element={<AddProducts />} />
        </Routes>
      </BrowserRouter>
      {/* </Provider> */}
    </>
  );
};

export default AppRoute;
