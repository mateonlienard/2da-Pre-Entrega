import { useContext } from "react";
import { Context } from '../../context/index'

function Cart(){
    const {cart} = useContext(Context)

    return(
        <div>{cart.map((producto)=>(
         <>
            {cart}
         </>
        ))}</div>
    )
}

export default Cart;