import { createContext, useState } from "react";

export const Context = createContext();

// CustomProvider

export function CustomProvider({children}){
    const [cart, setCart] = useState([])

    function onAdd(producto, cantidad){
        const estaAñadido = estaEnCarrito(producto)

        if(estaAñadido){
            const productoAModificar = cart.find(
            (cart)=> cart.id === producto.id);

            const productoModificado = {
                ...productoAModificar,
                cantidad: productoAModificar.cantidad + cantidad
            };

            setCart((prevState)=>prevState.map((cart)=> cart.id === producto.id ? productoModificado : cart ));
        }else{
            setCart((prevState)=>
            prevState.concat(producto, cantidad))
        }
    }


    function estaEnCarrito(producto){
        return (
            cart.some((cart)=>cart.id === producto.id)
        )
    }

    const vaciarCart=()=>{
        setCart([])
    }

    return <Context.Provider value={{cart, onAdd}}>{children}</Context.Provider>
}