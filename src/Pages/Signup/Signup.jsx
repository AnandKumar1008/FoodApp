import React, { useContext, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { MyContext } from "../../MyContext";

const Signup = () => {
  const { loginPage, setLoginPage, setSignup, setMessage } =
    useContext(MyContext);
  const [inp, setInp] = useState({ email: "", password: "", name: "" });
  const [err, setError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inp.name < 3) {
      setError("username must be atleast three character");
      return;
    }
    if (!validateEmail(inp.email)) {
      setError("Please Enter a valid Email Adress");
      return;
    }
    if (inp.password.length < 6) {
      setError("Password must be at least 6 character");
      return;
    }
    localStorage.setItem("user", JSON.stringify(inp));
    setMessage("Account Creation Successful");
    setLoginPage(true);
    setSignup(false);
  };
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
          <h5>Sign Up</h5>
          <input
            type="text"
            placeholder="username"
            required={true}
            value={inp.name}
            onChange={(e) => {
              setError("");
              setInp({ ...inp, name: e.target.value });
            }}
          />
          <input
            type="email"
            placeholder="Email"
            required={true}
            value={inp.email}
            onChange={(e) => {
              setError("");
              setInp({ ...inp, email: e.target.value });
            }}
          />

          {console.log(err)}
          {err && (
            <p style={{ color: "red", margin: "0", fontSize: "0.8rem" }}>
              {err}
            </p>
          )}

          <input
            type="password"
            placeholder="Create Passwords"
            value={inp.password}
            onChange={(e) => {
              setError("");
              setInp({ ...inp, password: e.target.value });
            }}
          />
          {/* <div>
            <input type="checkbox" id="check" />
            <label htmlFor="check">Remember Me</label>
          </div> */}
          <button>SignUp</button>
          <p>Need Help Singning Up ?</p>
          <p>
            Already have an account?{" "}
            <a
              onClick={() => {
                setLoginPage(true);
                setSignup(false);
              }}
              style={{ color: "blueviolet", cursor: "pointer" }}
            >
              SignIn
            </a>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
