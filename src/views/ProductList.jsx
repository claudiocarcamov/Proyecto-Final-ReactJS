import { useEffect } from "react";
import { useState } from "react";
import { getProducts, getProductsByCategory } from "../mock/asyncMock";
import { useParams } from "react-router-dom";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  console.log(params);

  useEffect(() => {
    if (params.categoryName) {
      getProductsByCategory(params.categoryName)
        .then((data) => {
          setProducts(data);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      getProducts()
        .then((data) => {
          setProducts(data);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [params.categoryName]);

  if (loading) return <h1>que grande...</h1>;

  return (
    <div>
      {products.map((product, i) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <img
            style={{ width: "5000px", height: "5000px" }}
            src={product.image}
            alt={product.title}
          />
          <p>{product.description}</p>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}