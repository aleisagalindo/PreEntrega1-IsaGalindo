import React, {useContext, useEffect, useState} from 'react';
import { WishListContext } from '../../context/WishList';
import { Link } from 'react-router-dom';

const WishList = () => {
    const {fav, addFav, deleteFav} = useContext(WishListContext)
    const [wishListLocal, setWishListLocal] = useState([]);

    useEffect(() => {
        const prodMostrar = fav.map(producto => 
          <>
      <div className="card card-indiv" key={producto.id}>
      <button onClick={() => deleteFav(producto)} className="btn btn-transparent ps-4"><i class="fa-solid fa-heart-circle-xmark delete-fav-icon"></i></button>
            <img
              src={producto.img}
              className="card-img-top img-producto"
              alt={producto}
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
          </div>
          </>)
              setWishListLocal(prodMostrar)
      }, [fav]);
      if(fav.length != 0) {
        return (
            <div className='row ms-2 mt-4'>
            {wishListLocal}
            </div>
        )
      }else {
        return (
          <>
            <div className='go-home'>
            <h1>Your Wish List is empty</h1>
            </div>
            
          </>
        );
      }
}

export default WishList;
