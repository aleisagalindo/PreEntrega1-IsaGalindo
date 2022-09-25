import React from "react";
import Header from "./Header";
import SearchFilter from "../layout/SearchFilter";
import ProductsSection from "../layout/ProductsSection";


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
