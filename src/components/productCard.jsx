import Button from './Button.jsx';

function ProductCard({ product }) {
  return (
    <div style={{ 
      backgroundColor: '#141a24', 
      borderRadius: '8px', 
      padding: '10px', 
      boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '260px', 
      boxSizing: 'border-box'
    }}>
      {/* Contenedor de Imagen */}
      <div style={{ width: '100%', height: '90px', overflow: 'hidden', borderRadius: '6px' }}>
        <img 
          src={product.image} 
          alt={product.name} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </div>
      
      {/* Información del producto */}
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '4px 0' }}>
        <span style={{ fontSize: '0.65rem', color: '#ffb703', textTransform: 'uppercase', marginBottom: '2px', display: 'block' }}>
          {product.category}
        </span>

        <h3 style={{ 
          fontSize: '0.8rem', 
          margin: '0 0 4px 0', 
          color: '#fff', 
          fontWeight: 'normal',
          lineHeight: '1.2',
          maxHeight: '32px',
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical'
        }}>
          {product.name}
        </h3>
        
        <p style={{ fontSize: '1rem', fontWeight: 'bold', margin: '2px 0 0 0', color: '#ffb703' }}>
          ${product.price ? product.price.toLocaleString('es-CL') : '0'}
        </p>
      </div>

      {/* Uso de componente reutilizable Button */}
      <Button type="primary" onClick={() => alert(${product.name} añadido)}>
        Añadir al carrito
      </Button>
    </div>
  );
}

export default ProductCard;