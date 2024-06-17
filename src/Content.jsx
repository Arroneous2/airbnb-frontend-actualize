import { RentalsIndex } from "./RentalsIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { ReservationsIndex } from "./ReservationsIndex";
import { Route, Routes } from "react-router-dom";
import { Modal } from "./Modal";
import { ReservationNew } from "./ReservationNew";

export function Content() {
  const [rentals, setRentals] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [currentReservation, setReservation] = useState({});
  const [isReservationCreateVisible, setReservationCreateVisible] = useState(false);

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

  const handleCreateReservation = (params, successCallback) => {
    console.log("handleCreateReservation", params);
    axios.post("http://localhost:3000/reservations.json", params).then((response) => {
      setReservations([...reservations, response.data]);
      successCallback();
      handleCloseCreateReservation();
    });
  };

  const handleShowCreateReservation = () => {
    setReservationCreateVisible(true);
  };

  const handleCloseCreateReservation = () => {
    setReservationCreateVisible(false);
  };

  useEffect(handleRentals, []);
  useEffect(handleReservations, []);

  return (
    <main>
      <h1>Welcome to React!</h1>
      <Routes>
        <Route path="/reservations" element={<ReservationsIndex reservations={reservations} />} />
        <Route
          path="/rentals"
          element={<RentalsIndex rentals={rentals} onShowCreateReservation={handleShowCreateReservation} />}
        />
      </Routes>
      <Modal show={isReservationCreateVisible} onClose={handleCloseCreateReservation}>
        <ReservationNew onShowCreateReservation={handleCreateReservation} />
      </Modal>
    </main>
  );
}
