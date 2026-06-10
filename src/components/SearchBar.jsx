function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Buscar herramientas, medición, almacenamiento..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: '100%', padding: '12px', fontSize: '1rem', borderRadius: '6px', border: '2px solid #ddd', boxSizing: 'border-box' }}
      />
    </div>
  );
}
export default SearchBar;