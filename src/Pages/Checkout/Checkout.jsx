import React, { useContext, useEffect, useState } from "react";
import "./Checkout.css";
import * as countryList from "country-list";
import { MyContext } from "../../MyContext";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
// const countries = [];
const Checkout = () => {
  const { checkout, setCheckout } = useContext(MyContext);
  const [selectedCountry, setSelectedCountry] = useState(""); // To store the selected country
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  useEffect(() => {
    const allCountries = countryList.getNames();
    console.log(allCountries);
    setCountries(allCountries);
  }, []);
  // useEffect(() => {
  //   // Get the states of the selected country
  //   if (selectedCountry) {
  //     const countryInfo = countryList.getCode(selectedCountry);
  //     if (countryInfo) {
  //       const countryStates = countryList.getStatesByCountryCode(
  //         countryInfo.code
  //       );
  //       setStates(countryStates);
  //     }
  //   } else {
  //     // Reset states if no country is selected
  //     setStates([]);
  //   }
  // }, [selectedCountry]);
  const handleCountrySelect = (e) => {
    setSelectedCountry(e.target.value);
  };
  return (
    <div className="food-checkout">
      {/* <button>Go Back</button> */}
      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={() => setCheckout(false)}>
          Go Back
        </Button>
      </Stack>
      <div className="food-checkout_cover">
        <form action="" className="food-checkout_form">
          <h2>Customer</h2>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="Email" id="Email" />
          </div>
        </form>
        <form action="" className="food-checkout_form">
          <h2>Shipping Address</h2>
          <div>
            <label htmlFor="county"> Country:</label>
            <select name="" id="" onChange={handleCountrySelect}>
              <option className="">{""}</option>
              {countries.map((country, i) => (
                <option key={i} className="">
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="street">Street:</label>
            <input type="text" id="street" />
          </div>
          <div>
            <label htmlFor="city">City:</label>
            <input type="text" id="city" />
          </div>
          <div>
            <label htmlFor="state">State:</label>
            <select name="" id="">
              <option className="">{""}</option>
              {states.map((state, i) => (
                <option key={i} className="">
                  {state}
                </option>
              ))}
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
