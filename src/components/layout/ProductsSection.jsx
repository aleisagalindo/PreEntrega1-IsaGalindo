import React from "react";
import Product from "./Product";

const ProductsSection = () => {
  return (
    <>
      <section className="container col-12 container-productos">
        <div className="row">
          <Product/>
          </div>
        <button className="boton-ver-mas">Ver más</button>
      </section>
    </>
  );
};

export default ProductsSection;
