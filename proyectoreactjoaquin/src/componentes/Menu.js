import React from 'react';
import './card.css'; // Asegúrate de que la ruta sea correcta y el nombre del archivo también

function Menu(props) {
  const { imgUrl, titulo, descripcion, ingredientes, icons } = props;

  return (
    <div className='conteiner'> 
      <div className='imagen'> 
        <img src={imgUrl} alt='' />
      </div>
      <div className='contenido'> 
        <div className='titulo'> 
          <h3>{titulo}</h3>
        </div>
        <div className='descripcion'> 
          <p>{descripcion}</p>
        </div>
      </div>
      <div className='ingredientes'> 
        
        <p>{ingredientes}</p>
      </div>
      <div className='icons'>  
        <div className='icon'>
          {icons.map((iconUrl, index) => (
            <img key={index} src={iconUrl} alt={`Icono ${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;

