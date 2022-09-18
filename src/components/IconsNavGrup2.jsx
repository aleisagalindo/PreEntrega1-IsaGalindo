import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart, faUser} from '@fortawesome/free-solid-svg-icons';

const IconsNavGrup2 = () => {
    return (
        <>
            <li>
              <a className="link-nav">
              <FontAwesomeIcon icon={faHeart} />
              </a>
            </li>
            <li>
            <a className="link-nav">
            <FontAwesomeIcon icon={faUser} />
            </a>
            </li>
        </>
    );
}

export default IconsNavGrup2;
