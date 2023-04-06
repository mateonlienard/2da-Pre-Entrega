import { useContext } from "react";
import { Context } from '../../context/index'
import {collection, getFirestore, addDoc, doc, updateDoc} from 'firebase/firestore'
import './index.css'

function Cart(){
    const {cart} = useContext(Context)
    const db = getFirestore();

    function updateOrder(productoId, finalStock){
        const itemRef = doc(db, 'Productos', productoId)
        updateDoc(itemRef, {stock: finalStock})
        .catch(error=>console.log({error}));
    }

    function sendOrder(){
        const total = cart.reduce(
            (acc, producto) => acc + producto.cantidad * producto.precio, 0
        )

        const order = {
            buyer: {name: mateo, mail: 'mateon@gmail.com', phone: '1173618344'},
            products: cart,
            total
        }

        const collectionRef = collection(db, 'orders');
        addDoc(collectionRef, order)
        .then(()=>{
            cart.map((producto)=>{
              const finalStock = producto.stock = producto.cantidad
              updateOrder(producto.id, finalStock)
            })
        })
        .catch(error=>console.log({error}))
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
                    <button onClick={sendOrder}>Terminar compra</button>
                </div>
            ))}
        </div>
    )
}

export default Cart;