import { Button } from 'bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount';


function ItemDetail({producto}){
  const [sumar, setSumar]= useState(0)

  function añadir(contar){
    setSumar(contar)
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
            {sumar == 0 && <ItemCount stock={producto.cantidad} añadir={añadir} />}
            <div>
              {sumar >= 1 && (
                <Link to='/cart'>
                  <Button>Finalizar compra</Button>
                </Link>
              )}
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
    )
}

export default ItemDetail;