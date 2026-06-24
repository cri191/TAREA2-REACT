import React from 'react';
import './Button.css'; // Importamos los estilos que acabamos de mover

function Button({ children, type = 'primary', onClick }) {
  // Determinamos dinámicamente qué clase aplicar según la prop 'type'
  const variantClass = type === 'primary' ? 'btn-primary' : 'btn-secondary';

  return (
    <button 
      onClick={onClick} 
      className={`custom-button ${variantClass}`} // Aplicamos la clase base y la variante
    >
      {children}
    </button>
  );
}

export default Button