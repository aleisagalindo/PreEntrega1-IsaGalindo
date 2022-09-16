import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faBars} from '@fortawesome/free-solid-svg-icons';
const IconsNavGrup1 = () => {
    return (
        <>
            <li>
              <a className='link-nav-grupo1' href="#">
              <FontAwesomeIcon icon={faBars} />
              </a>
              </li>
              <li>
                <a className='link-nav-grupo1' href="#">
                <FontAwesomeIcon icon={faShoppingBag} />
                </a>
                </li>
        </>
    );
}

export default IconsNavGrup1;
