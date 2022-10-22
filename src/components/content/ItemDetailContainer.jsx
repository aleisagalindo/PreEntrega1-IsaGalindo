import React, {useState, useContext} from "react";
import { CarritoContext } from "../../context/CarritoContext";
const ItemDetailContainer = ({ producto }) => {
  const [cantidad, setCantidad] = useState(1);
  
  const {carrito, agregarProducto, quitarProducto} = useContext(CarritoContext)
  

  const cantProducto = (operacion) => {
    if(operacion == "+") {
      if(cantidad < producto[1].stock) {
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
            <img src={producto[1].img} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-6 card-detallada">
            <div className="card-body">
              <h5 className="card-title">{producto[1].nombre}</h5>
              <p className="card-text">{producto[1].descripcionDetallada}</p>
              <p className="card-text tipo-piel-boton">{producto[1].piel}</p>
              <p className="card-text">Ideal for: {producto[1].piel} Skin Type</p>
              <p className="card-text">Stock {producto[1].stock}</p>
              <p className="card-text">{cantidad}</p>
              <button className="btn btn-light" onClick={() => cantProducto("+")}>+</button>
              <button  className="btn btn-dark" onClick={() => cantProducto("-")}>-</button>
              <button className="btn btn-dark" onClick={() => agregarProducto(producto,cantidad)}>ADD TO CART ${producto[1].precio}</button>
            </div>
          </div>
        </div>
        </div>
    </>
  );
};

export default ItemDetailContainer;
