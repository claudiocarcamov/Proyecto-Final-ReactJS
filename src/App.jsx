import './App.css'
import Brand from './components/Brand';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
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
      <Route path="/category/:category" element={<ItemListContainer greeting ="Filtro por categoría" />} />
      <Route path="/product/:id" element={<ItemDetailContainer />} /> 
      <Route path="*" element={<h1>404 : Enlace no encontrado</h1>} />
    </Routes>

    <Footer />

    </BrowserRouter>
    </div> 
  );
}

export default App;