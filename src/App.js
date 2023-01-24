//import Example from './Componentes/Example.jsx'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Componentes/Header.jsx";
import MiApi from"./Componentes/MiApi.jsx";

function App() {
   const [valorBusqueda, setValorBusqueda] = useState('');



  return (
    <div className="App">
       <Header setValorBusqueda={setValorBusqueda}></Header>
       <MiApi valorBusqueda={valorBusqueda}></MiApi>
    </div>
  );
}

export default App;
