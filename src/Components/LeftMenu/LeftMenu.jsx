import React, { useContext, useState } from "react";
import "./LeftMenu.css";
// import { Drawer } from "@mui/material";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import Drawer from "./Drawer";
import { MyContext } from "../../MyContext";
import { useNavigate } from "react-router-dom";
const LeftMenu = () => {
  const { idx, setIdx, isCart, setIsCart, visible, setVisible } =
    useContext(MyContext);
  const navigate = useNavigate();
  return (
    <div className={`food-leftmenu_top_icon ${visible ? "visible" : ""}`}>
      <span
        onClick={() => setVisible((p) => !p)}
        className="food-leftmenu_icon"
      >
        <ViewHeadlineIcon />
      </span>
      <ul className={`food-leftmenu `} onClick={() => navigate("/")}>
        {["AdiGas", "RotiGhar", "PunjabRasoi", "Udupi"].map((item, i) => (
          <li
            className=""
            key={i}
            onClick={() => {
              setIdx(i);
              setIsCart(false);
            }}
          >
            <p style={idx === i ? { fontWeight: "700" } : {}}>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftMenu;
