import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [homeLike, setHomeLike] = useState(0);
  const [aboutLike, setAboutLike] = useState(0);

  return (
    <div>
      <h1>My App</h1>
      <nav>
        <Link to="/">Home</Link> |
        <Link to="/about">About</Link>
      </nav>
      <Outlet context={{ homeLike, setHomeLike, aboutLike, setAboutLike }} />
    </div>
  );
}