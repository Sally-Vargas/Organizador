import {
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import EditarNotas from './componentes/EditarNotas';
import MenuNotas from "./componentes/MenuNotas";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <fieldset className="App-marco">
      <Routes>
        <Route exact path="/notas/editar/:id" element= {<EditarNotas/>}/>
        <Route path="/notas/buscar" element= {<MenuNotas/>}/>
      </Routes>
      </fieldset>
      
    </div>
  );
}

export default App;
