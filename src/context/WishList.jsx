import React, {createContext, useState} from 'react';

const WishListContext = createContext()

const WishListProvider = (props) => {
    const [fav, setFav] = useState([]);
    const addFav = (prod, cant) => {
        const aux = fav
        let indice = aux.findIndex(producto => producto.id  == prod[0]) //Si existe o no
    
        if(indice != -1) {
            aux[indice].cantidad = cant
        } else {
            const id = prod[0]
            const x =prod[1]
          const prodFav = {id, ...x, cantidad: cant}
          aux.push(prodFav)
        }
        setFav(structuredClone(aux))
        console.log(fav)
    
    }
    
    const deleteFav = (prod) => {
        const aux = fav
        let indice = aux.findIndex(producto => producto.id  == prod.id)
    
        aux.splice(indice,1)
        setFav(structuredClone(aux))
    }
    
    return (
            <WishListContext.Provider value={{fav, addFav, deleteFav}} >
             {props.children}
            </WishListContext.Provider>
    );
}

export {WishListContext, WishListProvider};
