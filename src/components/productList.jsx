import ProductCard from './ProductCard.jsx';

function ProductList({ products }) {
  if (products.length === 0) {
    return (
      <p style={{ color: '#4a5568', textAlign: 'center', marginTop: '20px' }}>
        No hay productos que coincidan con la búsqueda.
      </p>
    );
  }

  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(2, 1fr)', 
      gap: '10px' 
    }}>
      {/* Uso correcto de key al renderizar la lista mediante map */}
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;