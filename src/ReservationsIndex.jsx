export function ReservationsIndex(props) {
  let image = "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg";
  return (
    <div>
      <h1>All the Reservations</h1>
      {props.reservations.map((reservation) => (
        <div key={reservation.id}>
          <h1>{reservation.rental_name}</h1>
          <img src={reservation.images[0].url} alt={image} />
          <p>Total: {reservation.total}</p>
          <p>Start Date: {reservation.start_date}</p>
          <p>End Date: {reservation.end_date}</p>
          <button onClick={() => props.onShowCreateReview(reservation)}>Create Review</button>
        </div>
      ))}
    </div>
  );
}
