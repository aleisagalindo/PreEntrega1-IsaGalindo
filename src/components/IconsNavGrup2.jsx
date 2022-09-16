import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass, faUser} from '@fortawesome/free-solid-svg-icons';

const IconsNavGrup2 = () => {
    return (
        <>
            <li>
                <a className='link-nav-grupo2' href="#">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                </a>
              </li>
              <li><a className='link-nav-grupo2' href="#">
              <FontAwesomeIcon icon={faUser} />
                </a>
              </li>
        </>
    );
}

export default IconsNavGrup2;
