import React from "react";
import Header from "./Header";
import SearchFilter from "./SearchFilter";
import ProductsSection from "./ProductsSection";


const MainSection = () => {
  return (
    <>
      <main>
        <Header/>
        <SearchFilter/>
        <ProductsSection/>
      </main>
    </>
  );
};

export default MainSection;
