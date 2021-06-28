import React, { useState, useEffect } from "react";
import "./App.css";
import Product from "./data";

const App = () => {
  const [currency, setCurrency] = useState("inr");

  //this api needs access key to access it also, it shows cors issue, despite i have used coros exension in chrome it didnt work.
  useEffect(() => {
    fetch("https://api.exchangeratesapi.io/latest?base=INR").then((res) =>
      console.log("res", res)
    );
  });

  return (
    <div className="App">
      {Product.map((item) => {
        return (
          <div className="paper">
            <img src={item.url} alt="product" width="150px" height="150px" />
            <div>
              Name: <b>{item.name}</b>
            </div>
            {currency === "inr" ? (
              <div>
                Price: <b>₹ {item.inr}</b>
              </div>
            ) : (
              <div>
                Price: <b>${item.usd}</b>
              </div>
            )}
          </div>
        );
      })}
      <div>
        Currency:
        <select
          className="selectValue"
          id="mySelect"
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option value="inr">INR</option>
          <option value="usd">USD</option>
        </select>
      </div>
    </div>
  );
};

export default App;
