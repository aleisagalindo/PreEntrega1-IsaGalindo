import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart, faUser} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const IconsNavGrup2 = () => {
    return (
        <>
            <li>
              <Link className="link-nav" to="/favoritos">
              <FontAwesomeIcon icon={faHeart} />
              </Link>
            </li>
            <li>
            <Link className="link-nav" to="/cuenta">
            <FontAwesomeIcon icon={faUser} />
            </Link>
            </li>
        </>
    );
}

export default IconsNavGrup2;
