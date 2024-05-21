import ItemList from "../components/ItemList/ItemList";
import useProducts from "../hooks/useProducts";
import useProduct from "../hooks/useProduct";

function ItemListContainer({ greeting }) {
  const { isLoading: productsLoading, products } = useProducts();
  const { product, isLoading: productLoading } = useProduct(4);
  if (productsLoading) return <h1>Cargando...</h1>;

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;