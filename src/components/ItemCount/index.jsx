import {useState} from 'react';
import Button from 'react-bootstrap/Button';

function ItemCount ({stock, onAdd}) {

    const [amount, setAmount] = useState(1);

    return (
        
        <div>
            <div className='d-flex pb-2'>
                <div>
                <Button className='btn btn-dark' variant="primary" onClick={()=>setAmount((prevState)=>prevState - 1)} disabled={amount < 2}>
                    -
                </Button>
                </div>
                <div className='p-2'>{amount}</div>
                <div>
                <Button className='btn btn-dark' variant="primary" onClick={()=>setAmount((prevState)=>prevState + 1)} disabled={amount === stock}>
                    +
                </Button>
                </div>
            </div>    
                <div>
                    <Button className='btn btn-primary' variant="primary" onClick={()=>onAdd(amount)}>
                        Agregar al carrito
                    </Button>
                </div>
        </div>
    )
}

export default ItemCount