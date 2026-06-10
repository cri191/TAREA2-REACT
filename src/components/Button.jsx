function Button({ text, type }) {
  const isPrimary = type === 'primary';
  return (
    <button style={{
      backgroundColor: isPrimary ? '#007bff' : '#6c757d',
      color: '#fff',
      border: 'none',
      padding: '10px',
      borderRadius: '4px',
      cursor: 'pointer',
      fontWeight: 'bold',
      marginTop: 'auto'
    }}>
      {text}
    </button>
  );
}

export default Button;  