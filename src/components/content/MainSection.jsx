import React from "react";
import ItemListContainer from "../layout/ItemListContainer";


const MainSection = () => {
  return (
    <>
      <main>
        <section>
          <p className="titulo-pricipal1">SKINCARE  INSPIRED BY MOTHER NATURE</p>
          <img className="img-1" src="../img/piel-gotas.png" alt="" srcset="" />
        </section>
        <ItemListContainer/>
      </main>
    </>
  );
};

export default MainSection;
