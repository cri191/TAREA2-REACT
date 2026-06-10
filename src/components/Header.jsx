import SearchBar from './SearchBar.jsx';

function Header({ searchTerm, setSearchTerm }) {
  return (
    <header style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '15px', 
      backgroundColor: '#0a0e14',
      borderBottom: '1px solid #1e293b'
    }}>
      <h1 style={{ margin: 0, fontSize: '1.3rem', color: '#ffb703', fontWeight: 'bold' }}>
        Esmasequipo tienda online
      </h1>
      <div style={{ width: '55%', maxWidth: '200px' }}>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </header>
  );
}

export default Header;