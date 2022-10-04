import IconsNavGrup1 from "../layout/IconsNavGrup1";
import IconsNavGrup2 from "../layout/IconsNavGrup2";
import Dropdown from "../layout/Dropdown";
import "../../styles/App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const listDrowdon = ["All Skin", "Acne", "Dry", "Oily", "Sesitive"]
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
               <Dropdown lista= {listDrowdon}/>
              <Link className="navbar-brand logo-nav" to="/">
                AMALFI
              </Link>
              <IconsNavGrup2 />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
