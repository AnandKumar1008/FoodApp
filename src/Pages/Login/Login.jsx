import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import CloseIcon from "@mui/icons-material/Close";

import { MyContext } from "../../MyContext";
const Login = () => {
  const {
    loginPage,
    setLoginPage,
    setSignup,
    message,
    setMessage,
    setLogin,
    setUserName,
  } = useContext(MyContext);
  const [inp, setInp] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user")) || {};
    console.log(user);
    console.log(inp);
    if (user.email == inp.email && user.password == inp.password) {
      setLogin(true);
      setLoginPage(false);
      setSignup(false);
      setUserName(user.name);
    }
  };
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div className="food-login">
      <div className="food-login_cover">
        <div className="food-login_close">
          <p
            onClick={() => {
              setLoginPage(false);
              setSignup(false);
            }}
          >
            <CloseIcon />
          </p>
        </div>
        <form action="" className="food-login_form" onSubmit={handleSubmit}>
          <h5>Sign In</h5>
          {message && <p style={{ color: "green" }}>{message}</p>}
          <input
            type="email"
            placeholder="Email"
            required={true}
            value={inp.email}
            onChange={(e) => setInp({ ...inp, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            value={inp.password}
            onChange={(e) => setInp({ ...inp, password: e.target.value })}
          />
          <div>
            <input type="checkbox" id="check" />
            <label htmlFor="check">Remember Me</label>
          </div>
          <button>SignIn</button>
          <p>Need Help Singning In ?</p>
          <p>
            Don't have an account?{" "}
            <a
              onClick={() => {
                setSignup(true);
                setLoginPage(false);
              }}
              style={{ color: "blueviolet", cursor: "pointer" }}
            >
              Signup
            </a>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
