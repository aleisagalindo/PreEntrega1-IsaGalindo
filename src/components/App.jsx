import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './content/Navbar';
import MainSection from "./content/MainSection";
import Carrito from './content/Carrito';
import About from './content/About';
import Contacto from './content/Contacto';
import "../styles/App.css";
import Producto from './content/Producto';
import ItemListCategory from './content/ItemListCategory';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<MainSection/>}/>
        <Route path="/item/:id" element={<Producto/>}/>
        <Route path="/category/:id" element={<ItemListCategory/>} />
        <Route path="/carrito" element={<Carrito/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
