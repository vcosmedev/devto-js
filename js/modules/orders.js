/*En resumen, este código contiene funciones que permiten ordenar
y filtrar un arreglo de publicaciones según diferentes criterios:
relevancia, fecha de publicación y rango. La función orderData es
la función principal que determina qué función de ordenamiento o
filtrado se debe utilizar según el tipo de orden especificado.*/


const orderTop = (array) => {
  const newarray = [...array];
  return newarray.sort((a, b) => b['rank'] - a['rank']);
};

const orderRelevant = (array) => {
  const newarray = [...array];
  return newarray.filter((post) => post['relevant']);
};

const orderLatest = (array) => {
  const newarray = [...array];
  return newarray.toReversed();
};

const orderData = (array, typeorder) => {
  let processarray;
  switch (typeorder) {
    case 'relevant':
      processarray = orderRelevant(array);
      break;
    case 'latest':
      processarray = orderLatest(array);
      break;
    case 'top':
      processarray = orderTop(array);
      break;
  }
  return processarray;
};

export { orderData };
