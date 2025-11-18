import "./navbar.css";
import { useLocation, useNavigate } from "react-router-dom";

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  // Ajuste as rotas conforme seu Router
  const isMap = location.pathname.startsWith("/main");
  const isAgenda = location.pathname.startsWith("/agenda");
  const isConfig = location.pathname.startsWith("/config");

  return (
    <nav className="navbar">
      <button
        className={`nav-item ${isMap ? "nav-item-active" : ""}`}
        onClick={() => navigate("/main")}
      >
        <span className="nav-icon">📍</span>
      </button>

      <button
        className={`nav-item ${isAgenda ? "nav-item-active" : ""}`}
        onClick={() => navigate("/agenda")}
      >
        <span className="nav-icon">📅</span>
      </button>

      <button
        className={`nav-item ${isConfig ? "nav-item-active" : ""}`}
        onClick={() => navigate("/config")}
      >
        <span className="nav-icon">⚙️</span>
      </button>
    </nav>
  );
}
