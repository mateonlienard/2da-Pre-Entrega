import { useEffect, useState} from "react";
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useParams } from "react-router-dom";
import ItemDetail from '../ItemDetail/index';

function itemDetailContainer({ProductoId, ProductoRoute}){

    const [producto, setProducto] = useState(null);
    const params = useParams()

    useEffect(()=>{
      const db = getFirestore()
      const prodRef = doc(db, 'Productos', params.id)

    getDoc(prodRef)
        .then((snapshot)=>{
            if(snapshot.exists()){
                setProducto({id: snapshot.id, ...snapshot.data()})
            }
        })
        .catch((error)=>console.log({error}))      
    }, []);

    if(!producto){
      return <p>Cargando...</p>
    }

    return (
        <div>
            <ul className='row m-3'>
            <ItemDetail producto={producto}/>
            </ul>
      </div>
    )
}

export default itemDetailContainer;