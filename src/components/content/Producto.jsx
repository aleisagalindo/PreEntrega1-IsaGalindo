import React, { useState, useEffect } from "react";
import ItemDetailContainer from "./ItemDetailContainer";
import { useParams } from "react-router-dom";
import { getProducto } from "../../utils/firebase";

const Producto = () => {
  const [producto, setProducto] = useState([]);
  const {id} = useParams();
  useEffect(() => {

    getProducto(id).then(prod => {
      setProducto([prod.id, prod.data()])
    })

 }, [producto])

if(producto.length != 0){

  return (
    <div className="card mb-3" style={{maxWidth: '540px'}}>
      <ItemDetailContainer producto={producto} />
    </div>
);
}};

export default Producto;
