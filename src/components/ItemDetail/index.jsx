import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ItemDetail({producto}){
    return(
      <div>
      <Card style={{ width: '12rem' }}>
        <Card.Img variant="top" src={producto.img} />
        <Card.Body>
          <Card.Title>{producto.titulo}</Card.Title>
          <Card.Text>{producto.precio}</Card.Text>
          <Card.Text>{producto.cantidad}</Card.Text>
          <Button class='btn btn-primary' variant="primary">Comprar</Button>
        </Card.Body>
      </Card>
    </div>
    )
}

export default ItemDetail;