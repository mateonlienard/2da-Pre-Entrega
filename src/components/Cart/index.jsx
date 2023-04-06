import { useContext } from "react";
import { Context } from '../../context/index'
import './index.css'

function Cart(){
    const {cart} = useContext(Context)

    function pagar(){
        const total = cart.reduce(
            (acc, producto) => acc + producto.cantidad * producto.precio, 0
        )

        {
            buyer:
            products: cart
            total
        }
    }

    return(
        <div className="carro">
            {cart.map((producto)=>(
                <div key={producto.id}>
                    <span>{producto.titulo}</span>
                    <br />
                    <span>Cantidad: {producto.cantidad}</span>
                    <br />
                    <span>Precio unitario: {producto.precio}</span>
                    <br />
                    <br />
                    <button onClick={pagar}>Terminar compra</button>
                </div>
            ))}
        </div>
    )
}

export default Cart;