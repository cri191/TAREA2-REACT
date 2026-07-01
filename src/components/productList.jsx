import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard'; // O como lo tengas importado

// Recibimos las props desde App.jsx
function ProductList({ products, loading, error }) {
  const navigate = useNavigate();

  if (loading) return <p className="product-list-empty">Cargando productos...</p>;
  if (error) return <p className="product-list-empty">Hubo un error: {error}</p>;

  return (
    <div className="product-list-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={() => navigate(`/product/${product.id}`)} // Ajusta tu ruta si es necesario
        />
      ))}
    </div>
  );
}

export default ProductList;