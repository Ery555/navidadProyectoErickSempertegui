import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Importamos el nuevo footer
import Home from './pages/Home';
import Historia from './pages/Historia';
import Deseos from './pages/Deseos';

function App() {
  return (
    <HashRouter>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh', // Ocupa toda la altura de la pantalla
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#fffafa'
      }}>
        
        <Navbar />

        {/* Contenedor principal centrado */}
        <main style={{ 
          flex: 1, // Esto hace que el contenido ocupe el espacio disponible y empuje el footer
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', // Centra horizontalmente
          width: '100%',
          textAlign: 'center' // Asegura que textos simples se centren
        }}>
          {/* El Routes envuelve el contenido cambiante */}
          <div style={{ width: '100%' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/historia" element={<Historia />} />
              <Route path="/deseos" element={<Deseos />} />
            </Routes>
          </div>
        </main>

        <Footer />
        
      </div>
    </HashRouter>
  );
}

export default App;