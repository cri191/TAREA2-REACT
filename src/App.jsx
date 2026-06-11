import { useState } from 'react';
import productsData from './products.json';

import Header from './components/Header.jsx';
import Staff from './components/Staff.jsx';
import ProductList from './components/ProductList.jsx';
import Footer from './components/Footer.jsx';

function App() {
  // Estado controlado para la búsqueda por texto
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrar productos de acuerdo al texto ingresado
  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ 
      backgroundColor: '#0a0e14', 
      minHeight: '100vh', 
      color: '#fff',
      fontFamily: 'sans-serif',
      paddingBottom: '80px'
    }}>
      
      {/* Header con Input de búsqueda interno */}
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Fila de vendedores en línea */}
      <Staff />

      {/* Contenedor principal limitado estilo app móvil */}
      <main style={{ padding: '0 15px 15px 15px', maxWidth: '500px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.1rem', margin: '15px 0', color: '#a0aec0', fontWeight: '600' }}>
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