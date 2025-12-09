// Fíjate que ahora importamos HashRouter en lugar de BrowserRouter
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Historia from './pages/Historia';
import Deseos from './pages/Deseos';

function App() {
  return (
    // Con HashRouter NO necesitamos configurar el "basename" ni el repoName
    <HashRouter>
      <div style={{ fontFamily: 'Arial, sans-serif', minHeight: '100vh', backgroundColor: '#fffafa' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/deseos" element={<Deseos />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;