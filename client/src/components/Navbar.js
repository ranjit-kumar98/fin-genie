import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navStyle = {
    display: "flex",
    gap: "1rem",
    padding: "1rem",
    backgroundColor: "#f0f0f0",
    borderBottom: "1px solid #ddd",
  };

  const activeStyle = {
    fontWeight: "bold",
    color: "#1976d2",
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={location.pathname === "/" ? activeStyle : {}}>
        Home
      </Link>
      <Link to="/upload" style={location.pathname === "/upload" ? activeStyle : {}}>
        Upload Statement
      </Link>
      {/* We'll add Insights later */}
    </nav>
  );
}
