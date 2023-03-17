import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/index'
import { Link } from 'react-router-dom';

function Cards({producto}) {
  return(
    <div className='d-flex justify-content-around col-sm-3 mb-5'>
      <Card style={{ width: '13rem' }}>
      <Card.Img variant="top" src={producto.img} />
      <Card.Body>
        <Card.Title>{producto.titulo}</Card.Title>
        <Card.Text><ItemCount /></Card.Text>
        <Link class='btn btn-primary' to={`/item/${producto.id}`}>Ver detalles</Link>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Cards;