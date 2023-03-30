import { Button } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount';
import { Context } from '../../context/index';


function ItemDetail({producto}){
  const {cart, onAdd}= useContext(Context)

  function handleAddToCart(contar){
    onAdd(producto, contar)
  }

    return(
      <div className='d-flex justify-content-center mb-5'>
      <Card  style={{ width: '18rem' }}>
        <Card.Img variant="top" src={producto.img} />
        <Card.Body>
          <Card.Title>{producto.titulo}</Card.Title>
          <Card.Text>{producto.precio}</Card.Text>
          <Card.Text>Stock: {producto.stock}</Card.Text>

          <div>
            <ItemCount stock={producto.stock} addToCart={handleAddToCart} />
            <div className='pt-2'>
                  <Link to='/cart'>
                    <Button>Finalizar compra</Button>
                  </Link>
            </div>
          </div>

        </Card.Body>
      </Card>
    </div>
    )
}

export default ItemDetail;