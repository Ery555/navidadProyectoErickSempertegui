import { useState } from 'react';

function Deseos() {
  const [deseo, setDeseo] = useState('');
  const [lista, setLista] = useState(['Aprobar todas las materias', 'Una nueva laptop']);

  const agregarDeseo = (e) => {
    e.preventDefault();
    if (deseo.trim()) {
      setLista([...lista, deseo]);
      setDeseo('');
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h2 style={{ color: '#1a472a' }}>Lista de Deseos 🌟</h2>
      
      <form onSubmit={agregarDeseo} style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Escribe un deseo..." 
          value={deseo}
          onChange={(e) => setDeseo(e.target.value)}
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: '10px 20px', marginLeft: '10px', background: '#b3000c', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Agregar
        </button>
      </form>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {lista.map((item, index) => (
          <li key={index} style={{ background: '#f0f0f0', margin: '5px auto', padding: '10px', maxWidth: '300px', borderRadius: '8px' }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Deseos;