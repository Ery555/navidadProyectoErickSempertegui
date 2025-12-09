import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Historia from './pages/Historia';
import Deseos from './pages/Deseos';

function App() {
  return (
    <HashRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
        
        <Navbar />

        {/* CONTENEDOR PRINCIPAL: Aquí está el truco para que no baile */}
        <main style={{ 
          flex: 1,           // Empuja el footer hacia abajo si hay poco contenido
          width: '100%',     // Ocupa todo el ancho disponible
          display: 'flex',   // Permite centrar el contenido interno
          flexDirection: 'column',
          alignItems: 'center', // Centra las páginas horizontalmente
          padding: '20px 0'     // Un poco de aire arriba y abajo
        }}>
          
          {/* Este div limita el ancho máximo para que no se vea estirado en pantallas gigantes */}
          <div style={{ width: '100%', maxWidth: '1200px', padding: '0 20px' }}>
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