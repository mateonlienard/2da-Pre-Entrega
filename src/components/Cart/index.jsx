import { useContext } from "react";
import { Context } from '../../context/index'
import {collection, getFirestore, addDoc, doc, updateDoc} from 'firebase/firestore'
import { Button } from 'react-bootstrap';
import './index.css'

function Cart(){
    const {cart, setCart} = useContext(Context)
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
            buyer: {name: 'mateo', mail: 'mateon@gmail.com', phone: '1173618344'},
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

    function removeItem(index) {
        setCart(cart.filter((_, i) => i !== index));
    }
    

    return(
        <div className="carro">
            {cart.map((producto, index)=>(
                <div key={producto.id}>
                    <span>{producto.titulo}</span>
                    <br />
                    <span>Cantidad: {producto.cantidad}</span>
                    <br />
                    <span>Precio unitario: {producto.precio}</span>
                    <br />
                    <Button variant="danger" onClick={() => removeItem(index)}>Eliminar item</Button>
                    <br />
                    <br />
                </div>
            ))}
            <div className="boton">
                <Button variant="success" onClick={sendOrder}>Terminar compra</Button>
            </div>
        </div>
    )
}

export default Cart;