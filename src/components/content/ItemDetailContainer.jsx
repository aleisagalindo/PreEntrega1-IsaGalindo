import React from "react";

const ItemDetailContainer = ({ producto }) => {
  return (
    <>
     <div className="card card-detalladaa">
        <div className="row">
          <div className="col-md-6 container-detalle-producto">
            <img src={"../img/" + producto.img} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-6 card-detallada">
            <div className="card-body">
              <h5 className="card-title">{producto.nombre}</h5>
              <p className="card-text">{producto.descripcionDetallada}</p>
              <p className="card-text tipo-piel-boton">{producto.piel}</p>
              <p className="card-text">Ideal for: {producto.piel} Skin Type</p>
              <p className="card-text">Stock {producto.stock}</p>
              <button className="btn btn-dark">ADD TO CART ${producto.precio}</button>
            </div>
          </div>
        </div>
        </div>
    </>
  );
};

export default ItemDetailContainer;
