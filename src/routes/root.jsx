import ItemListContainer from '../components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useParams} from 'react-router-dom'
import { useState } from 'react'

export const MyContext = createContext();

function Root(){
    const params= useParams()
    const CategoriaRoute= Boolean(params.id);

    const [carrito, setCarrito] = useState([]);

    const sumarAlCarrito = (producto) => (
        setCarrito([...carrito, producto])
    )

    return(
        <div>
            <MyContext.Provider value={{carrito, sumarAlCarrito}} >
                <ItemListContainer CategoriaRoute={CategoriaRoute} CategoryId={params.id}/>
            </MyContext.Provider >
        </div>
    )
}

export default Root;