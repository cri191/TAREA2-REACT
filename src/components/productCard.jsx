import Button from './ButtonComponent/Button.jsx';
import './productCard.css';

// Nota: La estructura del objeto 'product' corresponde al tipo 'Product' 
// definido en '../types/product.types'
function ProductCard({ product, onClick }) {
  return (
    <div className="product-card">
      {/* Contenedor de Imagen usando product.thumbnail */}
      <div className="product-image-container">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="product-image"
        />
      </div>
      
      {/* Información del producto */}
      <div className="product-info">
        <span className="product-category">
          {product.category}
        </span>

        <h3 className="product-name">
          {product.title}
        </h3>
        
        <p className="product-description">
          {product.description}
        </p>
      </div>

      {/* Botón con las propiedades requeridas */}
      <Button 
        titulo="Ir a detalles" 
        onClick={onClick} 
        secundario={false} 
      />
    </div>
  );
}


export default ProductCard;