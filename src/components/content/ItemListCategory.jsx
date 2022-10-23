import {useState, useEffect, useContext} from 'react';
import { useParams, Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
import { getProductos } from '../../utils/firebase';


const ItemListCategory = () => {

    const [productos, setProductos] = useState([]);
    const {id} = useParams()
    const {darkMode} = useContext(DarkModeContext)
    useEffect(() => {
        getProductos().then(productos => {
            const productosCategoria = productos.filter(producto => producto.idCategoria == producto[1].idCategoria )
            const cardProducto = productosCategoria.map(producto => 
                <div className="card card-indiv" key={producto[0]}>
                  <img
                    src={producto[1].img}
                    className="card-img-top img-producto"
                    alt={producto[1].nombre}
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
