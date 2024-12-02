import Item from "./Item";
import "./Item.css";
import { Link, useParams } from "react-router-dom";

const ItemList = ({products}) => {
  const {category} = useParams()
  console.log(category)
  const filteredProducts = category
      ? products.filter(product => product.category === category)
      : products;

      return (
        <div className="item--list__container">
      {filteredProducts.map((product) => (
        <Item key={product.id} item={product} />
      ))}
      <Link to={`/product/${products.id}`}>{products.title}</Link>
    </div>
  );
}

export default ItemList;