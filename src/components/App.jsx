import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './content/Navbar';
import MainSection from "./content/MainSection";
import Carrito from './content/Carrito';
import WishList from './content/WishList';
import Contacto from './content/Contacto';
import "../styles/App.css";
import Producto from './content/Producto';
import ItemListCategory from './content/ItemListCategory';
import { DarkModeProvider } from '../context/darkModeContext';

const App = () => {
  return (
    <>
    
    <DarkModeProvider>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<MainSection/>}/>
        <Route path="/item/:id" element={<Producto/>}/>
        <Route path="/categoria/:id" element={<ItemListCategory/>}/>
        <Route path="/carrito" element={<Carrito/>}/>
        <Route path="/wishlist" element={<WishList/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
        <Route path="*" element={<h1>Ups! La ruta solicitada no existe</h1>}/>
      </Routes>
      </BrowserRouter>
    </DarkModeProvider>
    </>
  );
};

export default App;
