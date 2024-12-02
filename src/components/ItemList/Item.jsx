import useCount from "../../hooks/useCount";
import ItemCount from "../ItemCount/ItemCount";
import "./Item.css";
import "../ItemDetailContainer";
import { Link } from "react-router-dom";

export default function Item({ item }) {
  const { count, increment, decrement } = useCount(0);

  return (
    <div className="item__container">
      <div className="item--img__container">
        <img className="item--img" src={item.image} alt={item.title} />
      </div>
      <h2 className="item--title"><Link to={`/product/${item.id}`}>{item.title}</Link></h2>
      <p className="item--price">${item.price}</p>
      <div className="item--counter__container">
        <ItemCount
          stock={item.stock}
          count={count}
          increment={increment}
          decrement={decrement}
        />
      </div>
      <div className="item--cart__container">
        <button
          className="item--cart__button"
          onClick={() => onAdd(item, count)}
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
}