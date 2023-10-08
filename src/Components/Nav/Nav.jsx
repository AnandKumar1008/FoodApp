import React, { useContext, useEffect, useState } from "react";
import "./Nav.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ColorButtons from "./ColorButtons";
import { MyContext } from "../../MyContext";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";

const Nav = () => {
  const {
    cart,
    setCart,
    isCart,
    setIsCart,
    recipes,
    setRecipes,
    search,
    setSearch,
    visible,
    setVisible,
    loginPage,
    setLoginPage,
    userName,
    sum,
    setSum,
    login,
    setLogin,
  } = useContext(MyContext);
  const navigate = useNavigate();
  const [inp, setInp] = useState("");
  const handleChange = (e) => {
    setInp(e.target.value);
    if (!e.target.value) {
      setSearch([]);
      return;
    }
    let data;
    if (!isCart) {
      data = recipes.filter((item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
    } else {
      data = cart.filter((item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
    }
    setSearch(data || []);
  };
  useEffect(() => {
    setSum(
      cart.reduce((acc, curr) => (acc += curr?.price * curr?.quantity), 0)
    );
  }, [cart]);

  return (
    <div className="food-nav">
      {visible || (
        <span
          onClick={() => setVisible((p) => !p)}
          style={{ cursor: "pointer", position: "fixed" }}
        >
          <ViewHeadlineIcon />
        </span>
      )}
      <div className="food-nav_wrapper">
        <input
          type="text"
          placeholder="Search for Data..."
          value={inp}
          onChange={handleChange}
        />
        <ColorButtons
          text={"Search"}
          style={{
            backgroundColor: "blue",
            borderRadius: "2rem",
            fontFamily: "var(--font-a)",
          }}
        />
      </div>
      <div className="food-nav_price">
        <div className="food-nav_amount">
          <span>${sum.toFixed(2)}</span>
          <span>{cart.length}</span>
        </div>
        <button onClick={() => navigate("/cart")}>
          <ShoppingCartIcon />
        </button>
      </div>
      <div className="food-nav_login">
        {userName && <p>Welcome {userName}!!</p>}
        {login ? (
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              sx={{ borderRadius: "0", fontFamily: "var(--font-a)" }}
              onClick={() => {
                setLogin(false);
                localStorage.removeItem("user");
              }}
            >
              Logout
            </Button>
          </Stack>
        ) : (
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              sx={{ borderRadius: "0", fontFamily: "var(--font-a)" }}
              onClick={() => setLoginPage(true)}
            >
              Login
            </Button>
          </Stack>
        )}
      </div>
    </div>
  );
};

export default Nav;
