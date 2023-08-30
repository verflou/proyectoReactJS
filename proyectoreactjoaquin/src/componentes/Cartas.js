import React from 'react';
import './card.css';
import Card from './Card';
const cartasData = [
  {
    title: 'Chocotorta',
    imgUrl: 'https://fedecocina.net/static/c8e26faac2588db05907e4249047293f/02dff/chocotorta-1x1.jpg',
    descripcion: 'Comenzar a batir el dulce de leche y cuando esté de un color más claro agregar la crema. Batir en el punto más bajo de la batidora hasta que esté a punto letra. Tener sumo cuidado en que no se pase del punto porque sino se corta! Si por esas tragedias de la vida se llegase a cortar: agregarle un chorrito de crema e integrar. Reservar a un costado. Remojar cada galletita y colocar en una fuente hasta formar una capa. Colocar una capa de la crema de dulce de leche. Otra capa de galletitas humedecidas y así 4 veces. Llevar a enfriar por 1 hora en refrigerador. Espolvorear con cacao en polvo. Al servir, rallar un poco de chocolate amargo por encima y a ser felices y comer chocotorta',
    icons: []
  },
  {
    title: 'Torta selva negra',
    imgUrl: 'https://media.pilaradiario.com/p/a0eed7049ca9d6856d7a8c63711d2700/adjuntos/352/imagenes/100/109/0100109978/1200x675/smart/torta-selva-negra-foto-gastrolabjpg.jpg',
    descripcion: '',
    icons: []
  },
  {
    title: 'Flan',
    imgUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiM1oC2GcSEXeQOQd0P8KlNvpIqMIxNnqsEwOZ470cYGVCfepzo1IF2rfHGp9JtFajz9JVCtiC_6Ot4S-ECmhQkK0OecfpPSqR6mX67AXay0e7jrnTU2ilDKr_NvNhohTz9RrsGabXi3tuOofcCI_rlf9iMG0n819BVoqVRPm1mOcZ2CBuRREMNjxL_Ow/s1600/flan-queso-crema-receta.JPG',
    descripcion: 'Precalentar el horno en mínimo. Hacer un caramelo con azúcar y un poco de agua. Que quede rubio claro. Volcar en el molde Savarín, distribuir bien y dejar enfriar. Mezclar, sin batir, los huevos con las yemas, el azúcar y la leche. Agregar la esencia de vainilla. Volcar la mezcla de flan en el molde acaramelado. Colocar el molde en una placa sobre un papel absorbente y cubrir hasta la mitad con agua caliente. Cubrir el molde con aluminio. Hornear a temperatura baja por una hora aproximadamente o hasta que el flan haya coagulado. Dejar enfriar y guardar en la heladera por varias horas antes de desmoldar.',
    icons: ["n"]
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

