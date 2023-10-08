import React, { useContext } from "react";
import "./Cart.css";
import { MyContext } from "../../MyContext";
import Card from "../../Components/Card";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
const Cart = () => {
  const {
    cart,
    checkout,
    setCheckout,
    setCart,
    loading,
    setLoading,
    sum,
    setSum,
    login,
  } = useContext(MyContext);
  return (
    <div className="food-cart">
      <div className="food-cart_cover">
        <table>
          <tr>
            <th> Product Image</th>
            <th>Product Details</th>
            <th>Quantity</th>
          </tr>
          {cart.map((recipe, i) => (
            <tr key={recipe.id}>
              <td>
                <Card item={recipe} key={recipe.id} loading={loading} />
              </td>
              <td>
                <p>{recipe.title}</p>
                <p>ReadyIn:{recipe.readyInMinutes}minutes</p>
              </td>
              <td>
                <h5>Quantity</h5>
                <Box sx={{ "& > :not(style)": { m: 1 } }}>
                  <Fab
                    size="small"
                    color="secondary"
                    aria-label="add"
                    onClick={() => {
                      cart[i].quantity = cart[i]?.quantity + 1;
                      setCart([...cart]);
                    }}
                  >
                    <AddIcon />
                  </Fab>
                  <Fab size="small">{recipe?.quantity || 1}</Fab>
                  <Fab
                    size="small"
                    color="secondary"
                    aria-label="add"
                    onClick={() => {
                      if (recipe.quantity == 1) return;
                      cart[i].quantity = cart[i]?.quantity - 1;
                      setCart([...cart]);
                    }}
                  >
                    <RemoveIcon />
                  </Fab>
                </Box>
                <Stack direction="row" spacing={2}>
                  <Button
                    color="error"
                    variant="outlined"
                    onClick={() => {
                      const arr = [...cart];
                      arr.splice(i, 1);
                      setCart(arr);
                    }}
                  >
                    Remove
                  </Button>
                </Stack>
                <p>SubTotal:{recipe.price * recipe?.quantity || 1}</p>
              </td>
            </tr>
          ))}
          <tr>
            <td style={{ border: "none" }}></td>
            <td style={{ border: "none" }}></td>
            <td style={{ padding: "1rem 0" }}>
              <p>
                Total Quantity:
                {cart.reduce((acc, item) => (acc += item.quantity), 0)}
              </p>
              <p>Free Delivery</p>
              <p>Total Price:{sum}</p>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  onClick={() => {
                    if (login) setCheckout(true);
                  }}
                >
                  CheckOut
                </Button>
              </Stack>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Cart;
