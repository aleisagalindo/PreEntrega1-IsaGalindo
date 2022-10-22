import React, {useState, useEffect, useContext} from 'react';
import { consultarBDD } from '../../utils/funcionesUtiles';
import { DarkModeContext } from '../../context/darkModeContext';
import {Link} from 'react-router-dom';
import "../../styles/App.css";
import "../../styles/index.css";

const Item = () => {
  const [productos, setProductos] = useState([]);

  const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
  useEffect(() => {
      consultarBDD("../json/productos.json").then(productos => {
       const cardProducto = productos.map(producto => 
          <div className="card card-indiv" key={producto.id}>
            <img
              src={producto.img}
              className="card-img-top img-producto"
              alt={producto.nombre}
            />
            <div className="card-body">
              <h5 className="card-title titulo-card">{producto.nombre}</h5>
              <p className="card-text">{producto.descripcion}</p>
              <p className="card-text precio-producto">$ {producto.precio}</p>
              <button className="btn btn-dark view-product-button">
                <Link
                  className="nav-link view-product-link"
                  to={"/item/" + producto.id}
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
