import {useContext, useState} from 'react';
import Button from 'react-bootstrap/Button';
import { MyContext } from '../../routes/root';

function ItemCount (producto) {

    const{sumarAlCarrito} = useContext(MyContext);

    return (
        <div>
            <Button class='btn btn-primary' variant="primary" onClick={()=>sumarAlCarrito(producto)}>Sumar al carrito</Button>
        </div>
    )
}

export default ItemCount