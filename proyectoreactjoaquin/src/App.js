import React from 'react';
import './App.css';
import Cartas from './componentes/Card';
import Navbar from './componentes/Navbar';



function App() {
  return (
    <div className="App">
      <Navbar/>
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
