import { RentalsIndex } from "./RentalsIndex";
import axios from "axios";
import { useState, useEffect } from "react";

export function Content() {
  const [rentals, setRentals] = useState([]);

  const handleRentals = () => {
    console.log("handleRentals");
    axios.get("http://localhost:3000/rentals.json").then((response) => {
      console.log(response.data);
      setRentals(response.data);
    });
  };

  useEffect(handleRentals, []);

  return (
    <main>
      <h1>Welcome to AirBnB!</
      h2>
      <RentalsIndex rentals.id={rentals} />


    </main>
  );
}
