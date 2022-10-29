import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/App.css';
import { CarritoProvider } from './context/CarritoContext';
import { WishListProvider } from './context/WishList';
import App from './components/App';
//import './utils/funcionesUtiles.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <WishListProvider>
  <CarritoProvider>
     <App />
  </CarritoProvider>
  </WishListProvider>
    
);
