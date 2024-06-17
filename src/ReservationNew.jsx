export function ReservationNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateReservation(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Reservation</h1>
      <form onSubmit={handleSubmit}>
        <div>
          User_id: <input name="user_id" type="text" />
        </div>
        <div>
          rental_id: <input name="rental_id" type="text" />
        </div>
        <div>
          start_date: <input name="start_date" type="date" />
        </div>
        <div>
          end_date: <input name="end_date" type="date" />
        </div>
        <button type="submit">Create Reservation</button>
      </form>
    </div>
  );
}
