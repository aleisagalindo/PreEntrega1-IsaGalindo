import React, {useState, useContext} from "react";
import { CarritoContext } from "../../context/CarritoContext";
const ItemDetailContainer = ({ producto }) => {
  const [cantidad, setCantidad] = useState(1);
  
  const {carrito, agregarProducto, quitarProducto} = useContext(CarritoContext)
  

  const cantProducto = (operacion) => {
    if(operacion == "+") {
      if(cantidad < producto.stock) {
        setCantidad(cantidad + 1)
      } 
      
    } else {
      if(cantidad > 1) {
        setCantidad(cantidad - 1)
      }
    }
  }
  return (
    <>
     <div className="card card-detalladaa">
        <div className="row">
          <div className="col-md-6 container-detalle-producto">
            <img src={producto.img} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-6 card-detallada">
            <div className="card-body">
              <h5 className="card-title">{producto.nombre}</h5>
              <p className="card-text">{producto.descripcionDetallada}</p>
              <p className="card-text tipo-piel-boton">{producto.piel}</p>
              <p className="card-text">Ideal for: {producto.piel} Skin Type</p>
              <p className="card-text">Stock {producto.stock}</p>
              <p className="card-text">{cantidad}</p>
              <button className="btn btn-light" onClick={() => cantProducto("+")}>+</button>
              <button  className="btn btn-dark" onClick={() => cantProducto("-")}>-</button>
              <button className="btn btn-dark" onClick={() => agregarProducto(producto,cantidad)}>ADD TO CART ${producto.precio}</button>
            </div>
          </div>
        </div>
        </div>
    </>
  );
};

export default ItemDetailContainer;
