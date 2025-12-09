import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    backgroundColor: '#b3000c', // Rojo Navidad
    padding: '15px 40px', // Un poco más de espacio a los lados
    display: 'flex',
    justifyContent: 'space-between', // Separa título de enlaces
    alignItems: 'center',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    color: 'white'
  };

  const titleStyle = {
    fontSize: '1.8rem',
    margin: 0,
    fontFamily: 'Georgia, serif' // Fuente más elegante
  };

  const linksContainer = {
    display: 'flex',
    gap: '20px'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1.1rem'
  };

  return (
    <nav style={navStyle}>
      <h1 style={titleStyle}>🎄 Navidad</h1>
      <div style={linksContainer}>
        <Link style={linkStyle} to="/">Inicio</Link>
        <Link style={linkStyle} to="/historia">Historia</Link>
        <Link style={linkStyle} to="/deseos">Deseos</Link>
      </div>
    </nav>
  );
}

export default Navbar;