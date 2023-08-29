import React from 'react';
import './card.css';
import Card from './Card';

const cartasData = [
  {
    title: 'Asado',
    imgUrl: '',
    descripcion: '',
    icons: []
  },
  {
    title: 'Milanesa con papas fritas',
    imgUrl: '../img/Milanesa-con-papas-fritas.jpg',
    descripcion: '',
    icons: []
  },
  {
    title: 'Pastel de papas',
    imgUrl: '../img/1005_CocContigo_PastelPapa.jpg',
    descripcion: '',
    icons: []
  }
];

function Cartas() {
  return (
    <div className='Cartas'>
      {cartasData.map((carta, index) => (
        <Card
          key={index}
          titulo={carta.title}
          imgUrl={carta.imgUrl}
          descripcion={carta.descripcion}
          icons={carta.icons}
        />
      ))}
    </div>
  );
}

export default Cartas;

