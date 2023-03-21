import { useEffect, useState} from "react";
import ItemList from "../ItemList";
import Productos from '../../mocks/products'

function ItemListContainer ({Categoryid, CategoriaRoute}){
    const [productos, setProductos]= useState([]);

    useEffect(() => {
        const productosRender= new Promise((resolve) =>
         setTimeout(() => resolve(Productos), 2000));
        productosRender
        .then((response)=>{
            if(CategoriaRoute){
            const filtroDeProductos = response.filter(
                (producto)=> producto.categoria === Categoryid)
            setProductos(filtroDeProductos);
        }else{
            setProductos(response)
        }})
        .catch((error)=>console.log(error));
    },[])

    return (
    <div>
        <ItemList productos={productos} />
    </div>
)}

export default ItemListContainer;