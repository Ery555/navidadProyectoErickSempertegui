function Historia() {
  // Datos para las 3 tarjetas
  const tarjetas = [
    {
      titulo: "El Origen",
      texto: "La Navidad conmemora el nacimiento de Jesucristo en Belén. Se celebra el 25 de diciembre en la Iglesia católica y en otras denominaciones cristianas.",
      imgPlaceholder: "https://via.placeholder.com/300x200?text=Pon+tu+imagen+1+aqui" 
    },
    {
      titulo: "Santa Claus",
      texto: "Inspirado en San Nicolás, un obispo cristiano de origen griego conocido por su generosidad con los necesitados y por dar regalos a los niños.",
      imgPlaceholder: "https://via.placeholder.com/300x200?text=Pon+tu+imagen+2+aqui"
    },
    {
      titulo: "El Árbol",
      texto: "La costumbre de adornar un árbol se originó en Alemania. Representa la vida eterna y las luces simbolizan la luz de Cristo en el mundo.",
      imgPlaceholder: "https://via.placeholder.com/300x200?text=Pon+tu+imagen+3+aqui"
    }
  ];

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ color: '#b3000c', fontSize: '2.5rem', marginBottom: '40px' }}>Historia de la Navidad</h2>
      
      {/* Contenedor de las tarjetas (Grid) */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', // Se adapta a pantallas
        gap: '30px',
        justifyItems: 'center'
      }}>
        {tarjetas.map((item, index) => (
          <div key={index} style={{
            border: '2px solid #1a472a',
            borderRadius: '15px',
            padding: '20px',
            backgroundColor: 'white',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            maxWidth: '350px'
          }}>
            {/* AQUÍ CAMBIARÁS EL SRC POR TU IMAGEN REAL */}
            <img 
              src={item.imgPlaceholder} 
              alt={item.titulo} 
              style={{ width: '100%', borderRadius: '10px', marginBottom: '15px' }} 
            />
            <h3 style={{ color: '#1a472a' }}>{item.titulo}</h3>
            <p style={{ textAlign: 'justify' }}>{item.texto}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Historia;