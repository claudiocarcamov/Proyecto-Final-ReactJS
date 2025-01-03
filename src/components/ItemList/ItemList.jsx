import Item from "../ItemList/Item";
import "./Item.css";
import {memo} from "react"
import { Link, useParams } from "react-router-dom";

function ItemList({products}) {
  console.log(products)
  console.log(products[0])
  console.log(products[0].image)
  /*return (
    <div className="container">
    <h1>{products[0].title}</h1>
    {products.map(product => <Item key={product.id} product={product} />)}
    </div>
  )
}*/

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

export default memo(ItemList)