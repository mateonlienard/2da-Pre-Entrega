import { useEffect, useState} from "react";
import ItemList from "../ItemList";
import Productos from '../../mocks/products'

function ItemListContainer (){
    const [productos, setProductos]= useState([]);

    useEffect(() => {
        const productosRender= new Promise((resolve) => setTimeout(() => resolve(Productos), 2000));
        productosRender.then((response)=>setProductos(response))
        .catch((error)=>console.log(error));
    },[])

    return (
    <div>
        <ItemList productos={productos} />
    </div>
)}

export default ItemListContainer;