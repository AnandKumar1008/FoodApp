import React, { useContext, useEffect, useState } from "react";
import Card from "../Components/Card";
import Nav from "../Components/Nav/Nav";
import LeftMenu from "../Components/LeftMenu/LeftMenu";
import "./Home.css";
import axios from "axios";
import { MyLocationSharp } from "@mui/icons-material";
import { MyContext } from "../MyContext";
const API_URL = `https://api.spoonacular.com/recipes/search`;
const API_KEY = `d1943702de584b37bfdf4bcc10b27c8f`;
const cuisines = [
  "breakfast",
  "dessert",
  "seafood",
  "special",
  "starter",
  "italian",
  "maincourse",
  "salad",
];
const Home = () => {
  // const [visible, setVisible] = useState(true);
  const {
    idx,
    setIdx,
    isCart,
    cart,
    recipes,
    setRecipes,
    search,
    setSearch,
    visible,
    setVisible,
    loading,
    setLoading,
  } = useContext(MyContext);
  console.log(cart);
  useEffect(() => {
    const FoodData = async () => {
      const rand = Math.floor(Math.random() * 8);
      const queryParams = {
        apiKey: API_KEY,
        cuisine: cuisines[rand],
      };

      try {
        setLoading(true);
        const response = await axios.get(API_URL, { params: queryParams });
        console.log(response.data.results);
        const result = response.data.results;
        const arr = result.map((item) => {
          return { ...item, price: Math.floor(Math.random() * 100) };
        });
        setLoading(false);
        setRecipes(arr || []);
      } catch (error) {
        console.error("Error fetching food data:", error);
      }
    };

    FoodData();
  }, [idx]);
  return (
    <div className="food-home">
      {/* <div className="food-home_right"> */}
      <div className="food-home_card">
        <>
          {(search.length ? search : isCart ? cart : recipes).map((recipe) => (
            <Card item={recipe} key={recipe.id} loading={loading} />
          ))}
        </>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Home;
