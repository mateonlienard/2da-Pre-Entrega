import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/index'

function Cards({producto}) {
  return(
    <div className='d-flex justify-content-around col-sm-3 m-3'>
      <Card style={{ width: '12rem' }}>
      <Card.Img variant="top" src={producto.img} />
      <Card.Body>
        <Card.Title>{producto.titulo}</Card.Title>
        <Card.Text><ItemCount /></Card.Text>
        <Button class='btn btn-primary' variant="primary">Ver mas</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Cards;