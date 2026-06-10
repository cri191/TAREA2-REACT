import { useState } from 'react';
import productsData from './products.json';

// Importamos los componentes externos
import Header from './components/Header.jsx';
import SearchBar from './components/SearchBar.jsx';
import ProductCard from './components/ProductCard.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  // Lógica para filtrar productos
  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '1200px', margin: '0 auto', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <Header />
      
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      <h2 style={{ color: '#333', borderBottom: '2px solid #ddd', paddingBottom: '10px' }}>
        {searchTerm ? `Resultados para "${searchTerm}"` : 'Nuestros Productos'}
      </h2>
      
      {filteredProducts.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px', marginTop: '20px' }}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p style={{ color: '#666', textAlign: 'center', marginTop: '30px', fontSize: '1.1rem' }}>
          No encontramos productos que coincidan con tu búsqueda. 🛠️
        </p>
      )}

      <Footer />
    </div>
  );
}

export default App;