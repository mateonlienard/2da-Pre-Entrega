import React, { createContext, useState } from "react";

export const Context = createContext();

// CustomProvider

export function CustomProvider({children}){
    const [cart, setCart] = useState([])
 
    function isInCart(id){
        return cart.find(item=> item.id === id)
    }

    function onAdd(item, cantidad){
        const productoEnCarro = isInCart(item.id);
        if(productoEnCarro){
            setCart(
                cart.map((producto)=>{
                return producto.id === item.id
                 ? {...producto, cantidad: producto.cantidad + cantidad} 
                 : producto
            }))
        }else{
            setCart([...cart, {...item, cantidad}]);
        }
    }
    

    function vaciarCart(){
        setCart([])
    }
    
    function removeProducto(prodARemover){
        let newCart = cart.filter(productoEnCarro=>productoEnCarro.id !== prodARemover)
        setCart(newCart)
    }

    return  <> 
                <Context.Provider value={{cart, onAdd, vaciarCart, removeProducto, setCart}}>
                    {children}
                </Context.Provider>
            </>
}