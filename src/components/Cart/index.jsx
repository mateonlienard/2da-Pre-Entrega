import { useContext } from "react";
import { Context } from '../../context/index'
import './index.css'

function Cart(){
    const {cart, precioTotal} = useContext(Context)

    return(
        <div className="carro">
            {cart.map((producto)=>(
                <div key={producto.id}>
                    <div>{producto.titulo}</div>
                    <div>Cantidad: {producto.cantidad}</div>
                    <div>Precio unitario: {producto.precio}</div>
                    <div>Precio total: {precioTotal}</div>
                    <hr />
                </div>
            ))}
        </div>
    )
}

export default Cart;