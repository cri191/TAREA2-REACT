function Footer() {
  const menuItems = [
    { name: 'Página principal', icon: '🏠' },
    { name: 'Categorías', icon: '🎛️' },
    { name: 'Pedidos', icon: '🛍️' },
    { name: 'Cliente', icon: '👤' }
  ];

  return (
    <footer style={{ 
      position: 'fixed', 
      bottom: 0, 
      left: 0, 
      width: '100%', 
      backgroundColor: '#0a0e14', 
      borderTop: '1px solid #1e293b',
      display: 'flex', 
      justifyContent: 'space-around', 
      padding: '10px 0',
      zIndex: 100
    }}>
      {menuItems.map((item) => (
        <button 
          key={item.name} 
          style={{ 
            background: 'none', 
            border: 'none', 
            color: item.name === 'Página principal' ? '#ffb703' : '#a0aec0', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            fontSize: '0.7rem',
            cursor: 'pointer'
          }}
        >
          <span style={{ fontSize: '1.2rem', marginBottom: '2px' }}>{item.icon}</span>
          {item.name}
        </button>
      ))}
    </footer>
  );
}

export default Footer;