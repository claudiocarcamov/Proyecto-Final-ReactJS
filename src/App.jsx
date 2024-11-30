import './App.css'
import Brand from './components/Brand';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
   <div>
  <BrowserRouter>
  <div className = "navbar">
    <Brand />
    <NavBar />
  </div>
    <Routes>
      <Route path="/" element={<ItemListContainer greeting="Bienvenidos!" />} />
      <Route path="/category/:category" element={<ItemListContainer />} />
      <Route path="*" element={<h1>404. No existe el enlace</h1>} />
    </Routes>

    <Footer />

    </BrowserRouter>
    </div> 
  );
}

export default App;