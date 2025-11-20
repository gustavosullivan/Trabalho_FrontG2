import "./navbar.css";
import { useLocation, useNavigate } from "react-router-dom";

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  // Ajuste as rotas conforme seu Router
  const isMap = location.pathname.startsWith("/main");
  const isAgenda = location.pathname.startsWith("/agenda");
  const isConfig = location.pathname.startsWith("/config");


}
