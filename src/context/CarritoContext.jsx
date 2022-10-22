import React, {createContext, useState} from 'react';

const CarritoContext = createContext()

const CarritoProvider = (props) => {

const [carrito, setCarrito] = useState([]);

const agregarProducto = (prod, cant) => {
    const aux = carrito
    let indice = aux.findIndex(producto => producto.id  == prod[0]) //Si existe o no

    if(indice != -1) {
        aux[indice].cantidad = cant
    } else {
        const id = prod[0]
        const x =prod[1]
      const prodCarrito = {id, ...x, cantidad: cant}
      aux.push(prodCarrito)
    }
    setCarrito(structuredClone(aux))
    console.log(carrito)

}

const quitarProducto = (prod) => {
    const aux = carrito
    let indice = aux.findIndex(producto => producto.id  == prod.id)

    aux.splice(indice,1)
    setCarrito(structuredClone(aux))
}

const removeAll = () => {
    setCarrito([])
}

const getTotal = (carrito) => { 
    let total = 0 
    carrito.forEach( producto => total += ( producto.cantidad * producto.precio )) 
    return total   };


    return (
        <>
            <CarritoContext.Provider value={{carrito, agregarProducto, quitarProducto, removeAll, getTotal}} >
             {props.children}
            </CarritoContext.Provider>
        </>
    );
}

export {CarritoContext, CarritoProvider};


