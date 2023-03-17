import Productos from '../../mocks/products'
import { useEffect, useState} from "react";
import ItemDetail from '../ItemDetail/index';

function itemDetailContainer(){
    const [productos, setProductos]= useState([]);

    useEffect(() => {
        const productosRender= new Promise((resolve) => setTimeout(() => resolve(Productos), 2000));
        productosRender.then((response)=>setProductos(response))
        .catch((error)=>console.log(error));
    },[])
    return (
        <div>
            <ul className='row m-3'>
            {productos.map((producto, index)=>(
            <ItemDetail producto={producto} key={producto.id}/>
            ))};
            </ul>
      </div>
    )
}

export default itemDetailContainer;