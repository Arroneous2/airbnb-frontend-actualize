export function ReservationsIndex(props) {
  return (
    <div>
      <h1>All the Reservations</h1>
      {props.reservations.map((reservation) => (
        <div key={reservation.id}>
          <h1>{reservation.rental_name}</h1>
          <p>Total: {reservation.total}</p>
          <p>Start Date: {reservation.start_date}</p>
          <p>End Date: {reservation.end_date}</p>
          <button onClick={() => props.onShowCreateReservation()}>More info</button>
        </div>
      ))}
    </div>
  );
}
