import React, {useState, useEffect, useContext} from 'react';
import { getProductos } from '../../utils/firebase';
import { DarkModeContext } from '../../context/darkModeContext';
import {Link} from 'react-router-dom';
import "../../styles/App.css";
import "../../styles/index.css";

const Item = () => {
  const [productos, setProductos] = useState([]);

  const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
  useEffect(() => {
      getProductos().then(productos => {
       const cardProducto = productos.map(producto => 
          <div className="card card-indiv" key={producto[0]}>
            <img
              src={producto[1].img}
              className="card-img-top img-producto"
              alt={producto}
            />
            <div className="card-body">
              <h5 className="card-title titulo-card">{producto[1].nombre}</h5>
              <p className="card-text">{producto[1].descripcion}</p>
              <p className="card-text precio-producto">$ {producto[1].precio}</p>
              <button className="btn btn-dark view-product-button">
                <Link
                  className="nav-link view-product-link"
                  to={"/item/" + producto[0]}
                >
                  VIEW PRODUCT
                </Link>
              </button>
            </div>
          </div>)

          setProductos(cardProducto)
      })
}, []);

    
    
  return (
      <div className={darkMode ? 'darkMode row' : 'row'}>
         {productos}
      </div>
  );

}

export default Item;
