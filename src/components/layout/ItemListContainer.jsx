import React from "react";
import Item from "./Item";

const ItemListContainer = () => {
  return (
    <>
      <section>
        <div className="container container-productos">
          <Item/>
        <button className="boton-ver-mas">MORE PRODUCTS</button>
        </div>
      </section>
    </>
  );
};

export default ItemListContainer;
