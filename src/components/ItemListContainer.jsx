import ItemList from "../components/ItemList/ItemList";
import useProducts from "../hooks/useProducts";

function ItemListContainer({ greeting }) {
  const { isLoading: productsLoading, products } = useProducts();
  if (productsLoading) return <h1>Cargando...</h1>;
  console.log(products)

return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;