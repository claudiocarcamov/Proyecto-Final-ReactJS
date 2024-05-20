import './App.css'
import Brand from './components/Brand';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {

  return(
  <div>
  <div className = "navbar">
    <Brand />
    <NavBar />
  </div>
    <ItemListContainer greeting="Bienvenidos!"/>
  </div>
  );
}

export default App;