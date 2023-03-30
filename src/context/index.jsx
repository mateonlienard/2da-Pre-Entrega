import { createContext, useState } from "react";

export const Context = createContext();

// CustomProvider

export function CustomProvider({children}){
    const [productosCarro, setProductosCarro] = useState([])

    function onAdd(producto, cantidad){
        const estaAñadido = estaEnCarrito(producto)

        if(estaAñadido){
            const productoAModificar = productosCarro.find(
            (productosCarro)=> productosCarro.id === producto.id)

            const productoModificado = {
                ...productoAModificar,
                cantidad: productoAModificar.cantidad + cantidad
            }

            setProductosCarro((prevState)=>prevState.map((productosCarro)=> productosCarro.id === producto.id ? productoModificado : productosCarro ))
        }else{
        setProductosCarro((prevState)=>
         prevState.concat(producto, cantidad))
        }
    }


    function estaEnCarrito(producto){
        return (
            productosCarro.some((productosCarro)=>productosCarro.id === producto.id)
        )
    }

    // Cart

        const [cart, setCart] = useState([]);


    return <Context.Provider value={{productosCarro, onAdd, cart}}>{children}</Context.Provider>
}