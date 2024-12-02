import ItemList from "../components/ItemList/ItemList";
import useProducts from "../hooks/useProducts";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const { isLoading: productsLoading, products } = useProducts();
  //const { product, isLoading: productLoading } = useProduct(4);
  if (productsLoading) return <h1>Cargando..</h1>;

    const { id } = useParams();
    const product = products.find( item => item.id === parseInt(id))

    if(!product){
        return <p>Producto no encontrado</p>
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