import { useContext } from "react";
import IconsNavGrup1 from "../layout/IconsNavGrup1";
import IconsNavGrup2 from "../layout/IconsNavGrup2";
import Dropdown from "../layout/Dropdown";
import "../../styles/App.css";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";

const Navbar = () => {
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext)
  const listDropdown = ["All Skin", "Acne", "Dry", "Oily", "Sesitive"];
  return (
    <>
      <nav className="navbar navbar-expand-lg nav-bar">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <IconsNavGrup1 />
              <Dropdown lista={listDropdown} />
              <Link className="navbar-brand logo-nav" to="/">
                AMALFI
              </Link>
              <IconsNavGrup2 />
              <li>
                <button onClick={() => toggleDarkMode()} className="switch" id="cambiarModo">
                  <span>
                    <i className="fa-solid fa-sun" />
                  </span>
                  <span>
                    <i className="fa-solid fa-moon" />
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
