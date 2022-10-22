import React, {useContext, useEffect, useState} from 'react';
import { CarritoContext } from '../../context/CarritoContext';

const Carrito = () => {
  const {carrito, agregarProducto, quitarProducto, removeAll} = useContext(CarritoContext)
  const [carritoLocal, setCarritoLocal] = useState([]);

  useEffect(() => {
    const prodMostrar = carrito.map(producto => 
      <div className="card card-indiv" key={producto.id}>
            <img
              src={producto.img}
              className="card-img-top img-producto"
              alt={producto.nombre}
            />
            <div className="card-body">
              <h5 className="card-title titulo-card">{producto.nombre}</h5>
              <p className="card-text">Amount: {producto.cantidad}</p>
              <p className="card-text precio-producto">$ {producto.precio}</p>
              <p className="card-text">Precio Total: {producto.precio * producto.cantidad}</p>
              <button className='btn btn-dark' onClick={() => quitarProducto(producto)}>Delete</button>
            </div>
          </div>)
          setCarritoLocal(prodMostrar)
  }, [carrito]);

  if(carrito.length != 0) {
    return (
      <>
      <div className='row'>
          {carritoLocal}
      </div>
        <button onClick={() => removeAll()}>Remove All</button>
      </>
    );
  }else {
    return (
      <>
        <h1>No hay elementos</h1>
      </>
    );
  }
 
}

export default Carrito;
