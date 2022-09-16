import React from 'react';
import LogoNav from './LogoNav';
import IconsNavGrup1 from './IconsNavGrup1';
import IconsNavGrup2 from './IconsNavGrup2';
import "../App.css";

const Navbar = () => {
    return (
        <>
        <nav className='navbar'>
          <div>
            <ul>
              <IconsNavGrup1/>
                 <LogoNav/>
              <IconsNavGrup2/>
            </ul>
          </div>
        </nav>
        </>
    );
}

export default Navbar;
