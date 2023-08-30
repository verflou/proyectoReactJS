import React from 'react';
import './App.css';
import Cartas from './componentes/Cartas';

const iconUrl = 'URL_DE_TU_ICONO'; // Reemplaza con la URL correcta

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">
          <img src={iconUrl} alt='' />
        </div>
        <ul className="nav-list">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
      <Cartas />
      <footer className="footer">
        <div className="footer-content">
                <p>© 2023</p>
          <p>  Pagina creada por Joaquin Suarez</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
