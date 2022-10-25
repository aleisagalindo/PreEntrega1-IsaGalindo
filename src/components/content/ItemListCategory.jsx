import {useState, useEffect, useContext} from 'react';
import { useParams, Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
import { consultarBDD } from '../../utils/funcionesUtiles';


const ItemListCategory = () => {

    const [productos, setProductos] = useState([]);
    const {id} = useParams()
    const {darkMode} = useContext(DarkModeContext)
    useEffect(() => {
      consultarBDD('../json/productos.json').then(productos => {
            const productosCategoria = productos.filter(producto => producto.idCategoria === parseInt(id) )
            const cardProducto = productosCategoria.map(producto => 
                <div className="card card-indiv" key={producto.id}>
                  <img
                    src={producto.img}
                    className="card-img-top img-producto"
                    alt={producto.nombre}
                  />
                  <div className="card-body">
                    <h5 className="card-title titulo-card">{producto.nombre}</h5>
                    <p className="card-text">{producto.descripcion}</p>
                    <p className="card-text precio-producto">${producto.precio}</p>
                    <button className="btn btn-dark view-product-button">
                      <Link
                        className="nav-link view-product-link"
                        to={"/item/" + producto.id}>
                        VIEW PRODUCTO
                      </Link>
                    </button>
                  </div>
                </div>)
      
                setProductos(cardProducto)
        })
    }, [id]);
    return (
        <>
         <p className='texto-resultado-busqueda'>The best products for skin type:</p>
         <div className='container container-categoria'>
            <div className={darkMode ? 'darkMode row categoria-producto' : 'row categoria-producto'}>
                {productos}
            </div>
        </div>
        </>
    );
}

export default ItemListCategory;
