import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faHome} from '@fortawesome/free-solid-svg-icons';
const IconsNavGrup1 = () => {
    return (
        <>
            <li>
              <a className="link-nav" href="#">
              <FontAwesomeIcon icon={faHome} />
              </a>
            </li>
            <li>
              <a className="link-nav" href="#"><FontAwesomeIcon icon={faShoppingBag} /></a>
            </li>
        </>
    );
}

export default IconsNavGrup1;
