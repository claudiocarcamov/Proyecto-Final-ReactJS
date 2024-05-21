import './App.css'
import Brand from './components/Brand';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return(
  <div>
    return <BrowserRouter>
  <div className = "navbar">
    <Brand />
    <NavBar />
    </div>
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
    </Routes>

    <ItemListContainer greeting="Bienvenidos! a todos"/>
    <footer>
    <Footer />
    </footer>
    </BrowserRouter>
  </div>
  );
}

export default App;