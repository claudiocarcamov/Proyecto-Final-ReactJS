import ItemList from "../components/ItemList/ItemList";
import useProducts from "../hooks/useProducts";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";

const ItemDetailContainer = () => {
    const { isLoading: productsLoading, products } = useProducts();

  if (productsLoading) return <h1>Cargando...</h1>;

    const { id } = useParams();
    const product = products.find( item => item.id === id)

    if(!product){
        return <h2>Producto no encontrado</h2>
    }

  return (
    <div>
        <div className="item--img__container">
        <h1>{product.title}</h1>
        <img className="item--img" src={product.image} alt={product.title} />
        <p className="item--description">{product.description}</p>
        </div>
      <p className="item--price">${product.price}</p>
    <button>Agregar al carrito</button>
    </div>
  )
}

export default ItemDetailContainer