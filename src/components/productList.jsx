import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./productCard.jsx";

import "./productList.css"; // Importamos los estilos de la grilla

function ProductList() {
  const [products, setProducts] = useState([]); // Eliminado <Product[]>
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="product-list-empty">Cargando productos...</p>;
  if (error) return <p className="product-list-empty">Hubo un error: {error}</p>;

  return (
    <div className="product-list-grid">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onClick={() => navigate(`${product.id}`)}
        />
      ))}
    </div>
  );
}

export default ProductList;