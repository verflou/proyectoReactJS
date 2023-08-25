import React from 'react';
import './App.css';
import Card from './componentes/Card';
import imagenCarta1 from './img/1005_CocContigo_PastelPapa.jpg'; import imagenCarta2 from './img/Milanesa-con-papas-fritas.jpg';

function App() {
  return (
    <header className="App-header">
    <Card imagenSrc={imagenCarta1} nombre="comida 1" />
    <Card imagenSrc={imagenCarta2} nombre="comida 2" />
  </header>
  );
}

export default App;
