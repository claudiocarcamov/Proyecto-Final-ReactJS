import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Products() {
  const { productoId } = useParams();
  const [producto, setProducto] = useState(null);

  return (
    <div>
      <h1>Producto n° {productoId}</h1>
      <h2>{producto?.name}</h2>
      <img src={producto?.sprites.front_default} alt={producto?.name} />
    </div>
  );
}