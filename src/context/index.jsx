import React, { createContext, useState } from "react";

export const Context = createContext();

// CustomProvider

export function CustomProvider({children}){
    const [cart, setCart] = useState([])
 
    function isInCart(id){
        cart.find(item=> item.id === id)
    }

    function onAdd(item, cantidad){
        if(isInCart(item.id)){
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

    function precioTotal(){
        return cart.reduce((prev,act)=>prev + act.cantidad * act.precio, 0)
    }

    function totalItemsEnCart(){
        let total = 0;
        cart.forEach (estaEnCarrito=>{
            total = total + estaEnCarrito.cantidad
        })
        return total;
    }

    return  <> 
                <Context.Provider value={{cart, onAdd, vaciarCart, removeProducto, precioTotal, totalItemsEnCart}}>
                    {children}
                </Context.Provider>
            </>
}