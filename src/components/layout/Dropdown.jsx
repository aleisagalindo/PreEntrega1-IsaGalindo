import { Link } from "react-router-dom";
import {useState, useEffect} from 'react'
const Dropdown = ({lista}) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const listaDrop = lista.map((piel, indice) => 
      <Link key={indice} className='dropdown-item' to={`/categoria/${indice + 1}`}>{piel}</Link>
    )
    setList(listaDrop)
    
  }, []);
   

    return (
        <>
          <li className="nav-item dropdown">
            <button className="nav-link dropdown-toggle btn category-button" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
              CATEGORIES
            </button>
          <div className="dropdown-menu">
            {list}
          </div>
          </li>  
        </>
    );
}

export default Dropdown;