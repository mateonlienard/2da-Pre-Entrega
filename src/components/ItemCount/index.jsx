import {useState} from 'react';

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
            <p><button onClick={restar}>-</button>{numero}<button onClick={sumar}>+</button></p>
        </div>
    )
}

export default ItemCount