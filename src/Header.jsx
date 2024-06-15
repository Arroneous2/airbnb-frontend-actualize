import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav>
        <a href="/">Home</a>
        <Link to="/reservations">Reservations</Link>
        <Link to="/rentals">Rentals</Link>
      </nav>
    </header>
  );
}
