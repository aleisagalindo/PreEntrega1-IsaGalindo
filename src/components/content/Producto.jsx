import React, { useState, useEffect } from "react";
import ItemDetailContainer from "./ItemDetailContainer";
import { useParams } from "react-router-dom";
import { consultarBDD } from "../../utils/funcionesUtiles";

const Producto = () => {
  const [producto, setProducto] = useState([]);
  const {id} = useParams();
  useEffect(() => {

    consultarBDD('../json/productos.json').then(productos => {
     const producto1 = productos.find(productoArray => productoArray.id == parseInt(id))
     setProducto(producto1)
    })

 }, [])

  return (
      <div className="card mb-3" style={{maxWidth: '540px'}}>
        <ItemDetailContainer producto={producto} />
      </div>
  );
};

export default Producto;
