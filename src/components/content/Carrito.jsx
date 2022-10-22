import React, {useContext, useEffect, useState} from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';

const Carrito = () => {
  const {carrito, agregarProducto, quitarProducto, removeAll} = useContext(CarritoContext)
  const [carritoLocal, setCarritoLocal] = useState([]);

  useEffect(() => {
    const prodMostrar = carrito.map(producto => 
      <>
  <tbody>
    <tr>
      <td className='usuarioImg'>
        <img className='userImage' src={producto.img}/>
        </td>
      <td>{producto.nombre}</td>
      <td>x{producto.cantidad}</td>
      <td>${producto.precio * producto.cantidad}</td>
      <td>
        <button onClick={() => quitarProducto(producto)} className="btn btn-dark">Remove</button>
      </td>
    </tr>
  </tbody>
  </>)
          setCarritoLocal(prodMostrar)
  }, [carrito]);

  if(carrito.length != 0) {
    return (
      <>
      <div className="containerList">
         <div className="containerToDoList">
         <table  className='min-w-full leading-normal'>
          <thead>
           <tr>
              <th className='col-1'> </th>
              <th className='col-1'>Name</th>
              <th className='col-1'>Amount</th>
              <th className='col-1'>Price</th>
            </tr>
         </thead>
          {carritoLocal}
         </table>
         </div>
      </div>
        <button className='btn btn-danger' onClick={() => removeAll()}>Remove All</button>
        <h1>Total:</h1>
        <button className="btn btn-success">
          <Link to="/contacto">Go to Pay</Link>
        </button>
      </>
    );
  }else {
    return (
      <>
        <h1>No hay elementos en el carrito</h1>
        <button className='btn btn-dark'>
          <Link to="/">Go Home</Link>
        </button>
      </>
    );
  }
 
}

export default Carrito;
