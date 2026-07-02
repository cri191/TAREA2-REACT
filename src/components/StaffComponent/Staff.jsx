
import React from 'react';
import Button from '../ButtonComponent/Button'; 
import './Staff.css'; // <--- Importamos el archivo CSS aquí

function Staff() {
  const sellers = [
    { 
      id: 1, 
      name: 'Cristian', 
      phone: '5691287230', 
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150' 
    },
    { 
      id: 2, 
      name: 'Dario', 
      phone: '56991287230', 
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150' 
    }
  ];

  const handleWhatsAppClick = (name, phone) => {
    const message = encodeURIComponent(`Hola ${name}, me gustaría hacerte una consulta.`);
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <div className="staff-container">
      <p className="staff-title">Atención de vendedores:</p>
      
      <div className="staff-grid">
        {sellers.map((seller) => (
          <div key={seller.id} className="staff-card">
            <img 
              src={seller.avatar} 
              alt={seller.name} 
              className="staff-avatar"
            />
            <span className="staff-name">{seller.name}</span>

            <Button 
              type="primary" 
              onClick={() => handleWhatsAppClick(seller.name, seller.phone)}
            >
              Contactar
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Staff;