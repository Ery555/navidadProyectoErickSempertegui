import { Link } from 'react-router-dom';
function Navbar() {
  const navStyle = {
    backgroundColor: '#b3000c',
    padding: '15px',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1.2rem'
  };

  return (
    <nav style={navStyle}>
      <Link style={linkStyle} to="/">🎄 Inicio</Link>
      <Link style={linkStyle} to="/historia">📖 Historia</Link>
      <Link style={linkStyle} to="/deseos">✨ Mis Deseos</Link>
    </nav>
  );
}

export default Navbar;