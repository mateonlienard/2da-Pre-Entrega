import { Button } from 'bootstrap';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount';
import { Context } from '../../context';


function ItemDetail({producto}){
  const {onAdd, productosCarro}= useContext(Context)

  const [sumar, setSumar]= useState(0)

  function handleAñadirAlCarro(contar){
    setSumar(contar)

    onAdd(producto, contar)
  }

    return(
      <div className='d-flex justify-content-center mb-5'>
      <Card  style={{ width: '18rem' }}>
        <Card.Img variant="top" src={producto.img} />
        <Card.Body>
          <Card.Title>{producto.titulo}</Card.Title>
          <Card.Text>{producto.precio}</Card.Text>
          <Card.Text>Stock: {producto.cantidad}</Card.Text>

          <div>
            {sumar == 0 && <ItemCount stock={producto.cantidad} añadirAlCarro={handleAñadirAlCarro} />}
            <div>
              {sumar >= 1 && (
                  <Button>Finalizar compra</Button>
              )}
            </div>
          </div>

        </Card.Body>
      </Card>
    </div>
    )
}

export default ItemDetail;