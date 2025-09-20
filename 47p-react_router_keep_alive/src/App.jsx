import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>My App</h1>
      <nav>
        <Link to="/">Home</Link> |
        <Link to="/about">About</Link>
      </nav>
      <Outlet />
    </div>
  );
}