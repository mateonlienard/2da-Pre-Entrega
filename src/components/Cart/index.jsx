import { useContext } from "react";
import { CustomProvider } from "../../context";

function Cart(){
    const {cart} = useContext(CustomProvider)

    return(
        <div>{cart.map((producto)=>(<h1>{producto.precio}</h1>))}</div>
    )
}

export default Cart;