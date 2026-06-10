function Header() {
  return (
    <header style={{
      backgroundColor: '#1a1a1a',
      color: '#ffffff',
      padding: '20px',
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      borderRadius: '8px',
      marginBottom: '20px'
    }}>
      <span style={{ fontSize: '2rem' }}>🛠️</span>
      <div>
        <h1 style={{ margin: 0, fontSize: '1.8rem' }}>Ferretería El Quisco</h1>
        <p style={{ margin: 0, color: '#aaa', fontSize: '0.9rem' }}>Calidad y confianza en tus manos</p>
      </div>
    </header>
  );
}
export default Header;