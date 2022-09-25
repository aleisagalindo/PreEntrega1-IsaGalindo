import React, {useState, useEffect} from 'react';

const Product = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        const consultarBDD = async () => {
            const response = await fetch('./json/productos.json') 
            const productos = await response.json()

            const cardProducto = productos.map(producto => 
                <div className="card small col-4 card-indiv" key={producto.id}>
                  <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator img-producto" src={"./img/" + producto.img} alt={producto.nombre}/>
                  </div>
                  <div className="card-content">
                    <span className="card-title activator">
                      {producto.nombre}
                      <p className="precio-producto">{producto.precio}</p>
                      <i className="material-icons right">more_vert</i>
                    </span>
                    <p>
                      <a href="#">Add to cart</a>
                    </p>
                  </div>
                  <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">
                    {producto.nombre} {producto.modelo}<i className="material-icons right">close</i>
                    </span>
                    <p>{producto.descripcion}</p>
                  </div>
                </div>)
      
                return cardProducto
              }
      
              consultarBDD().then(producto => setProductos(producto))
          }, []);
          return (
              <>
                  {productos}
              </>
          );
      }

export default Product;
