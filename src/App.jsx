import React, { useContext } from "react";
import Home from "./Pages/Home";
import Nav from "./Components/Nav/Nav";
import LeftMenu from "./Components/LeftMenu/LeftMenu";
import { MyContext } from "./MyContext";
import "./App.css";
import Login from "./Pages/Login/Login";
import { Route, Routes } from "react-router-dom";
import Cart from "./Pages/Cart/Cart";
import Checkout from "./Pages/Checkout/Checkout";
import Signup from "./Pages/Signup/Signup";
const App = () => {
  const { visible, setVisible, loginPage, setLoginPage, checkout, signup } =
    useContext(MyContext);
  return (
    <>
      {checkout ? (
        <Checkout />
      ) : (
        <div className="food-app">
          <div
            className="food-app_menu"
            style={visible ? { width: "15rem" } : { width: "0" }}
          >
            <LeftMenu />
          </div>
          <div className="food-app_right">
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              {/* <Route path="/cart" element={<Checkout />} /> */}
            </Routes>
          </div>
          {loginPage && <Login />}
          {signup && <Signup />}
        </div>
      )}
    </>
  );
};

export default App;
