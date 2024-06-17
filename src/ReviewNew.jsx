export function ReviewNew(props) {
  console.log(props.reservation.images[0].url);
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onShowCreateReview(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Review</h1>
      <img src={props.reservation.images[0].url} alt="something something" />
      <form onSubmit={handleSubmit}>
        <div>
          reservation_id: <input name="reservation_id" type="text" />
        </div>
        <div>
          User_id: <input name="user_id" type="text" />
        </div>
        <div>
          rental_id: <input name="rental_id" type="text" />
        </div>
        <div>
          rating from 1-5: <input name="rating" type="range" min="1" max="5" />
        </div>
        <div>
          comment: <input name="comment" type="text" />
        </div>
        <button type="submit">Create Review</button>
      </form>
    </div>
  );
}
