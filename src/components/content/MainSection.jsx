import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import ItemListContainer from "../layout/ItemListContainer";


const MainSection = () => {
  const {darkMode} = useContext(DarkModeContext);
  return (
    <>
      <main className={darkMode ? "darkMode" : "seccionProncipal"}>
        <section>
          <p className="titulo-pricipal1">SKINCARE  INSPIRED BY MOTHER NATURE</p>
          <img className="img-1" src="https://firebasestorage.googleapis.com/v0/b/proyectofinal-isagalindo.appspot.com/o/imagenes%2Fpiel-gotas.png?alt=media&token=3e14ecf2-bbdc-4c1b-ac6c-9a6a679cb075" alt="" srcset="" />
        </section>
        <ItemListContainer/>
      </main>
    </>
  );
};

export default MainSection;
