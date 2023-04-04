import ItemDetailContainer from '../components/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

function ItemRoot(){
    const params= useParams()
    const ProductoRoute= Boolean(params.id);

  const [producto, setProducto] = useState(null);

  useEffect(()=>{
    const db = getFirestore()
    const prodRef = doc(db, 'Productos', 'Mouse1')

    getDoc(prodRef)
        .then((snapshot)=>{
            if(snapshot.exists()){
                setProducto({id: snapshot.id, ...snapshot.data()})
            }
        })
        .catch((error)=>console.log({error}))
  }, [])

  if(!producto){
    return <p>Cargando...</p>
  }

    return(
        <div>
            <ItemDetailContainer producto={producto} ProductoRoute={ProductoRoute} ProductoId={params.id} />
        </div>
    )
}

export default ItemRoot;