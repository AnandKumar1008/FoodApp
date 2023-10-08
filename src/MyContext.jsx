import { createContext, useContext, useState } from "react";
import data from "./data.json";
export const MyContext = createContext();
const Provider = ({ children }) => {
  const [idx, setIdx] = useState("");
  const [cart, setCart] = useState([]);
  const [isCart, setIsCart] = useState(false);
  const [search, setSearch] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [visible, setVisible] = useState(true);
  const [login, setLogin] = useState(false);
  const [loginPage, setLoginPage] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const [signup, setSignup] = useState(false);
  const [message, setMessage] = useState("");
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);
  const [sum, setSum] = useState(0);

  return (
    <>
      <MyContext.Provider
        value={{
          idx,
          setIdx,
          cart,
          setCart,
          isCart,
          setIsCart,
          search,
          setSearch,
          recipes,
          setRecipes,
          visible,
          setVisible,
          login,
          setLogin,
          loginPage,
          setLoginPage,
          checkout,
          setCheckout,
          signup,
          setSignup,
          message,
          setMessage,
          userName,
          setUserName,
          loading,
          setLoading,
          sum,
          setSum,
        }}
      >
        {children}
      </MyContext.Provider>
    </>
  );
};
export default Provider;
