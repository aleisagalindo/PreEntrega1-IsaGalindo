import React from 'react';
import Dropdown from './Dropdown';
import Form from './Form';
import LogoNav from './LogoNav';
import Sections from './Sections';

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <LogoNav/>
          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav me-auto">
              <Sections/>
              <Dropdown/>
            </ul>
            <Form busqueda="Buscar Producto"/>
          </div>
        </div>
      </nav>
        </>
    );
}

export default Navbar;
