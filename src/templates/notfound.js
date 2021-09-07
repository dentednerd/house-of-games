import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="content">
      <h2>Oops.</h2>
      <p>That there's broken, chief.</p>
      <p>
        <Link to="/">Get back home.</Link>
      </p>
    </section>
  );
}
