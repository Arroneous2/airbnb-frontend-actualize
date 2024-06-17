export function RentalsIndex(props) {
  return (
    <div>
      <h1>All the photos</h1>
      {props.rentals.map((rental) => (
        <div key={rental.id}>
          <h1>{rental.name}</h1>
          <p>User id:{rental.user_id}</p>
          <p>Address: {rental.address}</p>
          <p>city: {rental.city}</p>
          <p>state: {rental.state}</p>
          <p>price: {rental.price}</p>
          <p>description: {rental.description}</p>
          <p>home_type: {rental.home_type}</p>
          <p>rental_type: {rental.rental_type}</p>
          <p>total_occupancy: {rental.total_occupancy}</p>
          <p>total_bed_rentals: {rental.total_bed_rentals}</p>
          <p>total_bathrooms: {rental.total_bathrooms}</p>
          <button onClick={() => props.onShowCreateReservation()}>Create Reservation</button>
        </div>
      ))}
    </div>
  );
}
