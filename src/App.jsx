import { useState,useEffect } from 'react';
import productsData from './products.json';

import Header from './components/Header.jsx';
import Staff from './components/Staff.jsx';
import ProductList from './components/productList.jsx';
import Footer from './components/Footer.jsx';
import Button from './components/ButtonComponent/Button.jsx';

// Importamos los estilos separados
import './App.css'; 




function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Traemos los productos de la API aquí
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Filtramos la lista que vino de la API usando el searchTerm
  const filteredProducts = products.filter((product) =>
    product.title?.toLowerCase().includes(searchTerm.toLowerCase()) || 
    product.description?.toLowerCase().includes(searchTerm.toLowerCase()) // DummyJSON usa 'title' en vez de 'name'
  );

  return (
    <div className="app-container">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      <Staff />

      <main className="main-content">
        <h2 className="section-title">Productos recomendados</h2>
        
        {/* Le pasamos los estados y la lista filtrada a ProductList */}
        <ProductList 
          products={filteredProducts} 
          loading={loading} 
          error={error} 
        />
      </main>
    </div>
  );
}
export default App;