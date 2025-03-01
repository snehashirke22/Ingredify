import React from "react";
import { NavLink, Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import logo from "../assets/logo2.png";
import "../styles/Header.css";

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <header className="header">
      <button className="mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <IoClose /> : <IoMenu />}
      </button>

      <div className="logo">
        <img src={logo} alt="Ingredify Logo" className="logo-icon" />
          <Link to='/'><p>Ingredify</p></Link>
      </div>

      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <ul className="menu">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/recipe-generator" className={({ isActive }) => isActive ? "active-link" : ""} onClick={() => setIsMenuOpen(false)}>Recipe Generator</NavLink>
          </li>
          <li>
            <NavLink to="/recipes" className={({ isActive }) => isActive ? "active-link" : ""} onClick={() => setIsMenuOpen(false)}>Recipes</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""} onClick={() => setIsMenuOpen(false)}>About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""} onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
