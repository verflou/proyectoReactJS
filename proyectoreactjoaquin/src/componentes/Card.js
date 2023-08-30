
import React from 'react';
import '../componentes/card.css';  // Asegúrate de que esta importación sea correcta y que el archivo CSS exista
import Menu from './Menu';

const cartasData = [
  {
    title: 'Chocotorta', 
    imgUrl: 'https://www.paulinacocina.net/wp-content/uploads/2020/04/whatsapp-image-2020-04-03-at-03.00.55-e1586451007998.jpeg',
    descripcion: 'Comenzar a batir el dulce de leche y cuando esté de un color más claro agregar la crema. Batir en el punto más bajo de la batidora hasta que esté a punto letra. Tener sumo cuidado en que no se pase del punto porque sino se corta! Si por esas tragedias de la vida se llegase a cortar: agregarle un chorrito de crema e integrar. Reservar a un costado. Remojar cada galletita y colocar en una fuente hasta formar una capa. Colocar una capa de la crema de dulce de leche. Otra capa de galletitas humedecidas y así 4 veces. Llevar a enfriar por 1 hora en refrigerador. Espolvorear con cacao en polvo. Al servir, rallar un poco de chocolate amargo por encima y a ser felices y comer chocotorta',
    ingredientes: '400gr de dulce deleche, 400gr de crema de leche, 750 gr de galletitas de chocolate, 50 gr de cacao en polvo',
    icons: ['https://cdn-icons-png.flaticon.com/128/442/442487.png',
            'https://cdn-icons-png.flaticon.com/128/2290/2290581.png','https://png.pngtree.com/png-vector/20220609/ourmid/pngtree-chocolate-square-biscuit-icon-png-image_4948763.png','https://cdn-icons-png.flaticon.com/128/3811/3811855.png']
  },
  {
    title: 'Torta Rogel',
    imgUrl: 'https://www.paulinacocina.net/wp-content/uploads/2021/11/torta-rogel.jpg',
    descripcion: 'En un bol colocar la harina junto con la sal y el azúcar, mezclar esto y continuar; hacer una corona con la harina y colocar ahí las yemas, el agua y la manteca derretida. Mezclar todo hasta formar una masa. Volcar en la preparación en la mesada y amasar a mano por un minuto. Cubrir con papel film y dejar reposar por 1 hora. Pasado este tiempo, separar la masa en 8 o 10 partes, dependiendo de la cantidad de tapitas con las que quieras armar tu torta rogel. Con parte hacer un bollito y estirar de 2 a 3 ml. de espesor. Pueden colocar encima de la masa la base del molde en el que harán la torta para tener una referencia y cortarlos con esta forma. Tener en cuenta que la tapas se encogerán un poco. Colocar las masas cortadas en una placa para horno previamente enharinada y pinchar la superficie de la masa con un tenedor. Cocinar a 200 grados por 8 a 10 minutos, hasta que la tapa esté dorada. Una vez cocinadas las tapas comenzar con el armado: Untar cada tapa con dulce de leche repostero colocando la cantidad necesaria y por encima otra tapa y aplastamos ambas. Repetir la acción hasta completar todas las tapas. La última tapa no lleva dulce de leche.',
    ingredientes:'130 g. de manteca, 4 yemas, 600 gr. de harina 0000, 200 ml. de agua, 5 gr. de sal, 10 gr. de azúcar',
    icons: ['https://cdn-icons-png.flaticon.com/128/4278/4278180.png','https://cdn-icons-png.flaticon.com/128/6539/6539249.png','https://cdn-icons-png.flaticon.com/128/3082/3082019.png','https://cdn-icons-png.flaticon.com/128/2447/2447774.png','https://cdn-icons-png.flaticon.com/128/581/581763.png','https://cdn-icons-png.flaticon.com/128/5900/5900648.png']  // Puedes dejarlo así si no tienes íconos
  },
  {
    title: 'Flan',
    imgUrl: 'https://www.paulinacocina.net/wp-content/uploads/2019/05/oookkk.jpg',
    descripcion: 'Precalentar el horno en mínimo. Hacer un caramelo con azúcar y un poco de agua. Que quede rubio claro. Volcar en el molde Savarín, distribuir bien y dejar enfriar. Mezclar, sin batir, los huevos con las yemas, el azúcar y la leche. Agregar la esencia de vainilla. Volcar la mezcla de flan en el molde acaramelado. Colocar el molde en una placa sobre un papel absorbente y cubrir hasta la mitad con agua caliente. Cubrir el molde con aluminio. Hornear a temperatura baja por una hora aproximadamente o hasta que el flan haya coagulado. Dejar enfriar y guardar en la heladera por varias horas antes de desmoldar',
    ingredientes:'5 huevos, 200g de azúcar, 500cc. de leche',
    icons: ['https://cdn-icons-png.flaticon.com/128/2168/2168010.png','https://cdn-icons-png.flaticon.com/128/5900/5900648.png','https://cdn-icons-png.flaticon.com/128/5125/5125512.png']  // Puedes dejarlo así si no tienes íconos
  }
];

function Cartas() {
  return (
    <div className='Cartas'>
      {cartasData.map((carta, index) => (
        <Menu
          key={index}
          titulo={carta.title}
          imgUrl={carta.imgUrl}
          descripcion={carta.descripcion}
          ingredientes={
            carta.ingredientes && carta.ingredientes.split(', ').map((ingrediente, idx) => (
              <p key={idx}>
                {ingrediente}
              </p>
            ))
          }
          icons={carta.icons}
        />
      ))}
    </div>
  );
}

export default Cartas;
