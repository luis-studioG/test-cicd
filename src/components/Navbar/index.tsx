import reactLogo from "../../assets/react.svg";
import "./index.css";

export const Navbar = () => {
  const country = import.meta.env.VITE_DEFAULT_COUNTRY;
  const project = import.meta.env.VITE_PROJECT_NAME;

  return (
  <nav className="nav-wrapper">
    <div className="title-container">
      <h4>{project} - {country}</h4>
      <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
  </nav>
  )
};

export default Navbar;
