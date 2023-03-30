import React, { createContext, useState } from "react";

export const Context = createContext();

// CustomProvider

export function CustomProvider({children}){
    const [cart, setCart] = useState([])

    function onAdd(producto, contar){
        if(isInCart(producto.id)){
            setCart(cart.map(product=>{
                return product.id === producto.id ? {...product, contar: producto.contar + contar} : producto
            }))
        }else{
            setCart([...cart, {producto, contar}]);
        }
    }

    function isInCart(id){
        cart.find(item=> item.id === id)
    }

    function vaciarCart(){
        setCart([])
    }
    
    function removeProducto(prodARemover){
        let newCart = cart.filter(productoEnCarro=>productoEnCarro.id !== prodARemover)
        setCart([newCart])
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