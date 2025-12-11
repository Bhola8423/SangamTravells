import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="section">
      <h1>404 - Page not found</h1>
      <p>Looks like this page does not exist.</p>
      <Link to="/" className="btn" style={{ marginTop: "1rem" }}>
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
