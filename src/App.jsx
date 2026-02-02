import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepagina from './pages/Homepagina'
import Projectpagina from './pages/Projectpagina';
import Overmijpagina from './pages/Overmijpagina';
import Contactpagina from './pages/Contactpagina';
import Navigationbar from './components/Navigationbar';
import ProjectDetails from './pages/ProjectDetails';


function App() {
  return (
    <>

      <BrowserRouter>
        <Navigationbar />
        <Routes>
          <Route path="/" element={<Homepagina />} />
          <Route path="/Homepagina" element={<Homepagina />} />
          <Route path="/Projectpagina" element={<Projectpagina />} />
          <Route path="/Overmijpagina" element={<Overmijpagina />} />
          <Route path="/Contactpagina" element={<Contactpagina />} />
           <Route path="/projects/:projectId" element={<ProjectDetails />} />

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;