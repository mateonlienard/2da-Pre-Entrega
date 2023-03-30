import { useContext } from "react";
import { Context } from '../../context/index'

function Cart(){
    const {cart, precioTotal} = useContext(Context)

    return(
        <div>
            {cart.map((producto)=>(
                <div className="carro" key={producto.id}>
                    <p>{producto.titulo}</p>
                    <p>Cantidad: {producto.contar}</p>
                    <p>Precio unitario: {producto.precio}</p>
                    <p>Precio total: {precioTotal}</p>
                    <hr />
                </div>
            ))}
        </div>
    )
}

export default Cart;