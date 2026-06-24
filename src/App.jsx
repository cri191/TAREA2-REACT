import { useState } from 'react';
import productsData from './products.json';

import Header from './components/Header.jsx';
import Staff from './components/Staff.jsx';
import ProductList from './components/ProductList.jsx';
import Footer from './components/Footer.jsx';
import Button from './components/ButtonComponent/Button.jsx';

// Importamos los estilos separados
import './App.css'; 

function App() {
  // Estado controlado para la búsqueda por texto
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrar productos de acuerdo al texto ingresado
  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      
      {/* Header con Input de búsqueda interno */}
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Fila de vendedores en línea */}
      <Staff />

      {/* Contenedor principal */}
      <main className="main-content">
        <h2 className="section-title">
          Productos recomendados
        </h2>

        {/* Renderiza el listado a través de su componente obligatorio */}
        <ProductList products={filteredProducts} />
      </main>

      {/* Barra de navegación fija inferior */}
      <Footer />
    </div>
  );
}

export default App;