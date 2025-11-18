import "./logo.css";
import logoImg from "../../assets/images/logo.png";

export const Logo = () => {
  return (
    <div className="logo">
      <img src={logoImg} alt="Logo do app" className="logo-image" /> 
    </div>
  );
};