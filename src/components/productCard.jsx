import Button from './Button.jsx'; //

function ProductCard({ product }) {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px', backgroundColor: '#fff', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <img src={product.image} alt={product.name} style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '4px' }} />
      <span style={{ fontSize: '0.75rem', color: '#777', textTransform: 'uppercase', marginTop: '10px', fontWeight: 'bold' }}>{product.category}</span>
      <h3 style={{ fontSize: '1.05rem', margin: '5px 0 10px 0', color: '#333' }}>{product.name}</h3>
      <p style={{ fontSize: '1.2rem', fontWeight: 'bold', margin: '0 0 15px 0' }}>${product.price.toLocaleString('es-CL')}</p>
      <Button text="Añadir al carrito" type="primary" />
    </div>
  );
}

export default ProductCard;