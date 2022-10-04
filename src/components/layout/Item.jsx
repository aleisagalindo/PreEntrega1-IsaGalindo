import React, {useState, useEffect} from 'react';
import { consultarBDD } from '../../utils/funcionesUtiles';
import {Link} from 'react-router-dom'

const Item = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
      consultarBDD("../json/productos.json").then(productos => {
       const cardProducto = productos.map(producto => 
          <div className="card card-indiv">
            <img
              src={"img/" + producto.img}
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
      <div className="row">
         {productos}
      </div>
  );

}

export default Item;
