import reactLogo from "../../assets/react.svg";
import "./Navbar.css";

export const Navbar = () => (
  <nav className="nav-wrapper">
    <div className="title-container">
      <h3>Learning CI/CD</h3>
      <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
  </nav>
);

export default Navbar;
