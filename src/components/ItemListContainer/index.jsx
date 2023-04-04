import { useEffect, useState} from "react";
import { collection, getFirestore, getDocs, query, where } from "firebase/firestore";
import ItemList from "../ItemList";

function ItemListContainer ({Categoryid, CategoriaRoute}){
    const [productos, setProductos]= useState([]);

    useEffect(()=>{
        const db = getFirestore()
        const prodCollection = collection(db, 'Productos')

        if(CategoriaRoute){
            const queryResult = query(prodCollection, where('categoria', '==', Categoryid))
            getDocs(queryResult)
            .then((snapshot)=>{
                const docs = snapshot.docs
                setProductos(docs.map((doc)=> ({id: doc.id, ...doc.data() })))
            })
            .catch((error)=>console.log({error}));
        }else{
            getDocs(prodCollection)
            .then((snapshot)=>{
                const docs = snapshot.docs
                setProductos(docs.map((doc)=> ({id: doc.id, ...doc.data() })))
            })
            .catch((error)=>console.log({error}));
        }
    }, [Categoryid])

    return (
            <div>
                <ItemList productos={productos}/>
            </div>
)}

export default ItemListContainer;