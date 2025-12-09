function Footer() {
  const footerStyle = {
    backgroundColor: '#1a472a', // Verde Navidad oscuro
    color: 'white',
    textAlign: 'center',
    padding: '20px',
    marginTop: 'auto', // Esto empuja el footer al fondo
    width: '100%'
  };

  return (
    <footer style={footerStyle}>
      <p style={{ margin: 0, fontWeight: 'bold' }}>Web 2 - Erick Sempertegui Flores</p>
    </footer>
  );
}

export default Footer;
