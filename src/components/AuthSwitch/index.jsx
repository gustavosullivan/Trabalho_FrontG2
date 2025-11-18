import "./authSwitch.css";
import { Link, useLocation } from "react-router-dom";

export const AuthSwitch = () => {
  const location = useLocation();
  const isLogin = location.pathname === "/login";
  const isRegister = location.pathname === "/register";

  return (
    <div className="auth-switch">
      <Link to="/login" className={`auth-switch-option ${isLogin ? "active" : ""}`}>
        Login
      </Link>

      <Link to="/register" className={`auth-switch-option ${isRegister ? "active" : ""}`}>
        Register
      </Link>
    </div>
  );
};
