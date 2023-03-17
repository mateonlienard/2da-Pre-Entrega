import Cards from "../Item";

function ItemList({productos}) {
    return(
      <div>
        <ul className='row m-3'>
          {productos.map((producto, index)=>(
          <Cards producto={producto} key={producto.id}/>
          ))};
        </ul>
      </div>
    );
  };
  
  export default ItemList;