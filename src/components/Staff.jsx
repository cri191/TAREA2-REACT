function Staff() {
  const sellers = [
    { id: 1, name: 'Cristian', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150' },
    { id: 2, name: 'Dario', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150' }
  ];

  return (
    <div style={{ padding: '15px', backgroundColor: '#0a0e14' }}>
      <p style={{ margin: '0 0 10px 0', fontSize: '0.85rem', color: '#a0aec0', fontWeight: '500' }}>
        Atención de vendedores:
      </p>
      <div style={{ display: 'flex', gap: '20px' }}>
        {sellers.map((seller) => (
          <div key={seller.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img 
              src={seller.avatar} 
              alt={seller.name} 
              style={{ width: '55px', height: '55px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #ffb703' }} 
            />
            <span style={{ fontSize: '0.8rem', color: '#fff', marginTop: '4px' }}>{seller.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Staff;