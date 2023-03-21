import ItemListContainer from '../components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useParams} from 'react-router-dom'
import { Context } from 'react'
import { useState } from 'react'

export const MyContext = createContext();

const [carrito, setCarrito] = useState([]);

function Root(){
    const params= useParams()
    const CategoriaRoute= Boolean(params.id);

    return(
        <div>
            <MyContext.Provider value={carrito} >
                <ItemListContainer CategoriaRoute={CategoriaRoute} CategoryId={params.id}/>
            </MyContext.Provider >
        </div>
    )
}

export default Root;