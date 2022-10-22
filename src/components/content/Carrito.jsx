import React, {useContext, useEffect, useState} from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';

const Carrito = () => {
  const {carrito, agregarProducto, quitarProducto, removeAll, getTotal} = useContext(CarritoContext)
  const [carritoLocal, setCarritoLocal] = useState([]);

  useEffect(() => {
    const prodMostrar = carrito.map(producto => 
      <>
  <tbody>
    <tr>
      <td className='usuarioImg'>
        <img className='userImage' src={producto.img}/>
        </td>
      <td className='fw-bold'>{producto.nombre}</td>
      <td>x{producto.cantidad}</td>
      <td>${producto.precio * producto.cantidad}</td>
      <td>
        <button onClick={() => quitarProducto(producto)} className="btn btn-transparent"><i class="fa-solid fa-trash"></i></button>
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
        <button className='btn btn-borrarProd' onClick={() => removeAll()}>Remove All</button>
        <h1 className='total-price'>Total: ${getTotal(carrito)}</h1>
        <button className="btn go-to-pay">
          <Link className='go-to-pay-link' to="/contacto">Go to Pay <i class="fa-solid fa-credit-card"></i></Link>
        </button>
      </>
    );
  }else {
    return (
      <>
        <div className='go-home'>
        <h1>Your cart is empty</h1>
        <button className='btn'>
          <Link className='link-go-home' to="/">Continue Shopping <i class="fa-solid fa-cart-shopping"></i></Link>
        </button>
        </div>
        
      </>
    );
  }
 
}

export default Carrito;
