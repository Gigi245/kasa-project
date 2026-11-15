import './Error.scss';
import { Link } from 'react-router-dom';

function Error() {
  return (
   <main className="error-page">
      <h1>404</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/">Return to the homepage</Link>
    </main>
  );
}

export default Error;