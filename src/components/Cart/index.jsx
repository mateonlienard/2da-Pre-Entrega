import { useContext } from "react";
import { CustomProvider } from "../../context";

function Cart(){
    const {cart} = useContext(CustomProvider)

    return(
        <div>{cart.map((producto)=>(
         <>
            <p>{producto.nombre}</p>
            <p>{producto.precio}</p>
         </>
        ))}</div>
    )
}

export default Cart;