import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount';
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/index';

function ItemDetail({producto}){
  const {onAdd}= useContext(Context)

  function handleAddToCart(cantidad){
    onAdd(producto, cantidad)
  }

    return(
      <div className='d-flex justify-content-center mb-5'>
      <Card  style={{ width: '18rem' }}>
        <Card.Img variant="top" src={producto.image} />
        <Card.Body>
          <Card.Title>{producto.titulo}</Card.Title>
          <Card.Text>{producto.precio}</Card.Text>
          <Card.Text>Stock: {producto.stock}</Card.Text>

          <div>
            <ItemCount stock={producto.stock} addToCart={handleAddToCart} productId={producto.id} />
            <div className='pt-2'>
                  <Link to='/cart'>
                    <Button variant='dark'>Finalizar compra</Button>
                  </Link>
            </div>
          </div>

        </Card.Body>
      </Card>
    </div>
    )
}

export default ItemDetail;