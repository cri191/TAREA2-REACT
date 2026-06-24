import ProductCard from './productCard.jsx';
import './productList.css'; // Importación de los estilos de la lista

function ProductList({ products }) {
  if (products.length === 0) {
    return (
      <p className="product-list-empty">
        No hay productos que coincidan con la búsqueda.
      </p>
    );
  }

  return (
    <div className="product-list-grid">
      {/* Uso correcto de key al renderizar la lista mediante map */}
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;