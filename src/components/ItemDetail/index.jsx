import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount';

function ItemDetail({producto}){
    return(
      <div >
      <Card className='d-flex justify-content-center mb-5' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={producto.img} />
        <Card.Body>
          <Card.Title>{producto.titulo}</Card.Title>
          <Card.Text>{producto.precio}</Card.Text>
          <Card.Text>{producto.cantidad}</Card.Text>
          <ItemCount />
        </Card.Body>
      </Card>
    </div>
    )
}

export default ItemDetail;