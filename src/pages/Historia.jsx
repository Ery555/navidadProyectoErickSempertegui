function Historia() {
  // 1. Aquí definimos los datos de las tarjetas
  const tarjetas = [
    {
      titulo: "El Origen",
      texto: "La Navidad conmemora el nacimiento de Jesucristo en Belén. Se celebra el 25 de diciembre en la Iglesia católica y en otras denominaciones cristianas.",
      imgPlaceholder: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUUt_-54m3YwsQ-wfJ9EBnmOMQgbOaIj1iFw&s" 
    },
    {
      titulo: "Santa Claus",
      texto: "Inspirado en San Nicolás, un obispo cristiano de origen griego conocido por su generosidad con los necesitados y por dar regalos a los niños.",
      imgPlaceholder: "https://img.freepik.com/vector-gratis/saludo-alegre-santa-claus-dibujos-animados-celebracion-navidena_1308-153957.jpg?semt=ais_hybrid&w=740&q=80"
    },
    {
      titulo: "El Árbol",
      texto: "La costumbre de adornar un árbol se originó en Alemania. Representa la vida eterna y las luces simbolizan la luz de Cristo en el mundo.",
      imgPlaceholder: "https://media.istockphoto.com/id/1830071610/es/foto/%C3%A1rbol-de-navidad-decorado-con-regalos-para-el-a%C3%B1o-nuevo-aislado-en-blanco.jpg?s=612x612&w=0&k=20&c=QwLQsn147VBhHWIP7h26O1BJMbX2wEacLKdiOuCJsQ0="
    }
  ];

  return (
    <div style={{ width: '100%', paddingBottom: '40px' }}>
      <h2 style={{ color: '#b3000c', fontSize: '2.5rem', marginBottom: '40px' }}>Historia de la Navidad</h2>
      
      {/* 2. Aquí está el Grid que contiene las tarjetas */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '30px',
        justifyItems: 'center',
        width: '100%'
      }}>
        
        {/* 3. Aquí usamos .map para dibujar cada tarjeta. ¡Esta es la parte vital! */}
        {tarjetas.map((item, index) => (
          <div key={index} style={{
            border: '2px solid #1a472a',
            borderRadius: '15px',
            padding: '20px',
            backgroundColor: 'white',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            maxWidth: '350px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <img 
              src={item.imgPlaceholder} 
              alt={item.titulo} 
              style={{ width: '100%', borderRadius: '10px', marginBottom: '15px', objectFit: 'cover' }} 
            />
            <h3 style={{ color: '#1a472a', marginBottom: '10px' }}>{item.titulo}</h3>
            <p style={{ textAlign: 'justify', lineHeight: '1.5' }}>{item.texto}</p>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Historia;