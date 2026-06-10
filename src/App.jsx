import { useState } from 'react';
import productsData from './products.json';

import Header from './components/Header.jsx';
import Staff from './components/Staff.jsx';
import ProductCard from './components/ProductCard.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  // Lógica de filtrado dinámico por texto
  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{
      backgroundColor: '#0a0e14',
      minHeight: '100vh',
      color: '#fff',
      fontFamily: 'sans-serif',
      paddingBottom: '80px' // Espacio para que el footer fijo no tape el contenido
    }}>

      {/* Header (Integra el Buscador interno) */}
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Bloque de atención de los 2 vendedores */}
      <Staff />

      {/* Espacio principal de Productos Recomendados */}
      <main style={{
        padding: '0 15px 15px 15px',
        maxWidth: '500px', // 💡 Limitamos el ancho total para simular una app móvil compacta
        margin: '0 auto'   // 💡 Centra la grilla en la pantalla
      }}>
        <h2 style={{ fontSize: '1.1rem', margin: '15px 0', color: '#a0aec0', fontWeight: '600' }}>
          Productos recomendados
        </h2>

        {filteredProducts.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)', // Mantiene las 2 columnas de tu foto
            gap: '10px' // Reducimos ligeramente el espacio entre tarjetas
          }}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p style={{ color: '#4a5568', textAlign: 'center', marginTop: '20px' }}>
            No hay productos que coincidan con la búsqueda.
          </p>
        )}
      </main>

      {/* Barra de menú inferior fija */}
      <Footer />
    </div>
  );
}

export default App;