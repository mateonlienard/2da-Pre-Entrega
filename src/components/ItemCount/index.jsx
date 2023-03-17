import {useState} from 'react';
import Button from 'react-bootstrap/Button';

function ItemCount () {
    const [numero, setNumero]=useState(0);

    const sumar = () => {
        setNumero(numero + 1);
      };

    const restar = () => {
        setNumero(numero - 1);
      };

    return (
        <div>
            <p><Button  size="sm" variant="outline-dark" onClick={restar}>-</Button>  {numero}  <Button size="sm" variant="outline-dark" onClick={sumar}>+</Button></p>
        </div>
    )
}

export default ItemCount