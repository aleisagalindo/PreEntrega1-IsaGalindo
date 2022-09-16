import React from 'react';

const LogoNav = () => {
    return (
        <>
            <a className="navbar-brand fw-bold" href="#">
            Amalfi
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor03"
            aria-controls="navbarColor03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </>
    );
}

export default LogoNav;
