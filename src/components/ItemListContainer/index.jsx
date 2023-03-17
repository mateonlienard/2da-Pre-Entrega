import { useEffect, useState} from "react";
import ItemList from "../ItemList";
import Productos from '../../mocks/products'

function ItemListContainer ({categoryId, CategoriaRoute}){
    const [productos, setProductos]= useState([]);

    useEffect(() => {
        const productosRender= new Promise((resolve) =>
         setTimeout(() => resolve(Productos), 2000));
        productosRender
        .then((response)=>{
            if(CategoriaRoute){
            const filtroDeProductos = response.filter(
                (producto)=> producto.categoria === categoryId)
            setProductos(filtroDeProductos);
        }})
        .catch((error)=>console.log(error));
    },[])

    return (
    <div>
        <ItemList productos={productos} />
    </div>
)}

export default ItemListContainer;