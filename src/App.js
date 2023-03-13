import {
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Aside from "./componentes/Aside";
import Calendario from "./componentes/Calendario";
import EditarNotas from './componentes/EditarNotas';
import Header from "./componentes/Header";
import Inicio from "./componentes/Inicio/index.jsx";
import LeerNotas from "./componentes/LeerNotas";
import MenuNotas from "./componentes/MenuNotas";

function App() {
  return (
    <div className="App">
      <Header/>
      <Aside/>
      <fieldset className="App-marco">
      <Routes>
        <Route exact path="/" element= {<Inicio/>}/>
        <Route exact path="/notas/leer/:id" element= {<LeerNotas/>}/>
        <Route exact path="/notas/editar/:id" element= {<EditarNotas/>}/>
        <Route path="/notas/buscar" element= {<MenuNotas/>}/>
        <Route path="/calendario" element= {<Calendario/>}/>
      </Routes>
      </fieldset>
      
    </div>
  );
}

export default App;
