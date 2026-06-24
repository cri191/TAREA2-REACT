import Button from './ButtonComponent/Button.jsx';
import './productCard.css'; // Importación de los estilos

function ProductCard({ product }) {
  return (
    <div className="product-card">
      {/* Contenedor de Imagen */}
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
      </div>
      
      {/* Información del producto */}
      <div className="product-info">
        <span className="product-category">
          {product.category}
        </span>

        <h3 className="product-name">
          {product.name}
        </h3>
        
        <p className="product-price">
          ${product.price ? product.price.toLocaleString('es-CL') : '0'}
        </p>
      </div>

      {/* Uso de componente reutilizable Button */}
      <Button type="primary" onClick={() => alert(`${product.name} añadido`)}>
        Añadir al carrito
      </Button>
    </div>
  );
}

export default ProductCard;