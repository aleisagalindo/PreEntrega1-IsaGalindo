import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import Item from "./Item";

const ItemListContainer = () => {
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
  return (
    <>
      <section>
        <div className={darkMode ? "darkMode container container-productos" : "container container-productos"}>
          <Item/>
        <button className="boton-ver-mas">MORE PRODUCTS</button>
        </div>
      </section>
    </>
  );
};

export default ItemListContainer;
