// import { useState } from "react";
import reactLogo from "../../assets/react.svg";
// import viteLogo from '/vite.svg'
import "./navbar.css";

export const Navbar = () => 
    <nav className="nav-wrapper">
        <div className="title-container">
            <span>Learning CI/CD</span>
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
        </div>
    </nav>;

export default Navbar;
