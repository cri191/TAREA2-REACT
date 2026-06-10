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
      height: '260px', // 💡 ALTURA FIJA MÁXIMA: Impide que la tarjeta se alargue verticalmente
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
      
      {/* Información del producto agrupada */}
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '4px 0' }}>
        {/* Categoría */}
        <span style={{ fontSize: '0.65rem', color: '#ffb703', textTransform: 'uppercase', marginBottom: '2px', display: 'block' }}>
          {product.category}
        </span>

        {/* Nombre del Producto libre (sin alturas fijas que tapen lo de abajo) */}
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
        
        {/* Precio visible garantizado */}
        <p style={{ 
          fontSize: '1rem', 
          fontWeight: 'bold', 
          margin: '2px 0 0 0', 
          color: '#ffb703'
        }}>
          ${product.price ? product.price.toLocaleString('es-CL') : '0'}
        </p>
      </div>

      {/* Botón siempre abajo en su lugar */}
      <button style={{
        backgroundColor: '#0070f3',
        color: '#fff',
        border: 'none',
        padding: '6px', 
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '0.75rem', 
        width: '100%',
        marginTop: 'auto' // 💡 Lo empuja siempre al fondo de la tarjeta de forma simétrica
      }}>
        Añadir al carrito
      </button>
    </div>
  );
}

export default ProductCard;