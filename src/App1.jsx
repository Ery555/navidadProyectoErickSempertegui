import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Historia from './pages/Historia';
import Deseos from './pages/Deseos';

function App1() {
  // IMPORTANTE: Reemplaza 'nombre-de-tu-repo' con el nombre EXACTO de tu repositorio en GitHub
  // Si estás en desarrollo local (localhost), deja esto como '/'
  const repoName = '/navidadProyectoErickSempertegui'; 
  
  // Detectamos si estamos en producción (GitHub Pages) o local
  const basename = import.meta.env.MODE === 'production' ? repoName : '/';

  return (
    <BrowserRouter basename={basename}>
      <div style={{ fontFamily: 'Arial, sans-serif', minHeight: '100vh', backgroundColor: '#fffafa' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/deseos" element={<Deseos />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;