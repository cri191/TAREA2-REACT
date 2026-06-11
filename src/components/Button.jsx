function Button({ children, type = 'primary', onClick }) {
  const isPrimary = type === 'primary';
  
  return (
    <button 
      onClick={onClick}
      style={{
        backgroundColor: isPrimary ? '#0070f3' : '#1e293b',
        color: '#fff',
        border: 'none',
        padding: '6px 12px',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '0.75rem',
        width: '100%',
        transition: 'background-color 0.2s'
      }}
    >
      {children}
    </button>
  );
}

export default Button;