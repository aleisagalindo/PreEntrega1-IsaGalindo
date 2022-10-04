import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faHome} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const IconsNavGrup1 = () => {
    return (
        <>
            <li>
              <Link className="link-nav" to="/">
              <FontAwesomeIcon icon={faHome} />
              </Link>
            </li>
            <li>
              <Link className="link-nav" to="/carrito"><FontAwesomeIcon icon={faShoppingBag} /></Link>
            </li>
        </>
    );
}

export default IconsNavGrup1;
