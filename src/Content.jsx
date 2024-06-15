import { RentalsIndex } from "./RentalsIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { ReservationsIndex } from "./ReservationsIndex";
import { Route, Routes } from "react-router-dom";

export function Content() {
  const [rentals, setRentals] = useState([]);
  const [reservations, setReservations] = useState([]);

  const handleRentals = () => {
    console.log("handleRentals");
    axios.get("http://localhost:3000/rentals.json").then((response) => {
      console.log(response.data);
      setRentals(response.data);
    });
  };

  const handleReservations = () => {
    console.log("handlesReservations");
    axios.get("http://localhost:3000/reservations.json").then((response) => {
      console.log(response.data);
      setReservations(response.data);
    });
  };

  useEffect(handleRentals, []);
  useEffect(handleReservations, []);

  return (
    <main>
      <h1>Welcome to React!</h1>
      <Routes>
        <Route path="/reservations" element={<ReservationsIndex reservations={reservations} />} />
        <Route path="/rentals" element={<RentalsIndex rentals={rentals} />} />
      </Routes>
    </main>
  );
}
