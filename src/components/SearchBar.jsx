function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Buscar productos..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        width: '100%',
        padding: '8px 12px',
        fontSize: '0.9rem',
        borderRadius: '20px',
        border: '1px solid #2d3748',
        backgroundColor: '#1a202c',
        color: '#fff',
        outline: 'none'
      }}
    />
  );
}

export default SearchBar;