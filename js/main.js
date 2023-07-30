import { createPost } from './modules/elements.js';
import { getPosts } from './modules/api.js';
import { orderData } from './modules/orders.js';

const authorpic = document.getElementById('author-picture');
authorpic.src = localStorage.getItem('image');
authorpic.classList.remove('d-none');

// Función para obtener los datos de los posts
const processData = async () => {
  const dataposts = await getPosts();
  const keys = Object.keys(dataposts);
  const array = keys.reduce((accum, key) => {
    const currobj = dataposts[key];
    currobj['id'] = key;
    return [...accum, currobj];
  }, []);
  return array;
};

const data = await processData();

// Función para renderizar los posts principales
const main = document.getElementById('cards-main');

const renderData = (array) => {
  let count = 0;
  array.forEach((post) => {
    let isfirst = false;
    count === 0 && (isfirst = true);
    count++;
    const cardpost = createPost(post, isfirst);
    main.appendChild(cardpost);
  });
};

renderData(orderData(data, 'relevant'));

const cleanMain = () => {
  main.innerHTML = '';
};

// Manejo del filtrado de los posts
const order = document.querySelectorAll('.data-item');
let orderactive = document.querySelector('.main__title__selected');
let currentData;

order.forEach((item) => {
  item.addEventListener('click', ({ target }) => {
    if (orderactive !== item) {
      orderactive.classList.remove('main__title__selected');
      item.classList.add('main__title__selected');
      currentData = orderData(data, target.id);

      cleanMain();
      renderData(currentData);

      orderactive = item;
    }
  });
});


const createCard = (post) => {
  const card = document.createElement('div');
  card.classList.add('card', 'mb-4');

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-title', 'd-flex', 'justify-content-between');
  cardTitle.textContent = post.title;

  cardBody.appendChild(cardTitle);

  // Contenedor de comentarios
  const commentsContainer = document.createElement('div');
  let commentsCount = 0;

  if (post.comments && Array.isArray(post.comments)) {
    commentsCount = post.comments.length;
  }

  const commentsText = commentsCount === 1 ? `${commentsCount} Comentario` : `${commentsCount} Comentarios`;
  commentsContainer.textContent = commentsText;

  cardBody.appendChild(commentsContainer);

  card.appendChild(cardBody);
  return card;
};







const renderAside = (data) => {
  const asideContainer = document.getElementById('asideContainer');

  // Limpiamos el aside para evitar duplicados
  asideContainer.innerHTML = '';

  // Creamos una lista para "Discuss"
  const discussList = document.createElement('ul');
  discussList.classList.add('list-group', 'mb-4');

  const discussTitle = document.createElement('li');
  discussTitle.classList.add('list-group-item', 'fw-bold');
  discussTitle.textContent = '#discuss';
  discussList.appendChild(discussTitle);

  // Creamos una lista para "Watercooler"
  const watercoolerList = document.createElement('ul');
  watercoolerList.classList.add('list-group', 'mb-4');

  const watercoolerTitle = document.createElement('li');
  watercoolerTitle.classList.add('list-group-item', 'fw-bold');
  watercoolerTitle.textContent = '#watercooler';
  watercoolerList.appendChild(watercoolerTitle);

  // Función para crear un elemento <p> con el texto de comentarios
  const createCommentsElement = (commentsCount) => {
    const commentsElement = document.createElement('p');
    commentsElement.classList.add('mb-0', 'comments-text'); // Agregar la clase "comments-text"
    const commentsText = commentsCount === 1 ? `${commentsCount} Comentario` : `${commentsCount} Comentarios`;
    commentsElement.textContent = commentsText;
    return commentsElement;
  };
  

  // Filtramos los posts por las categorías "Discuss" y "Watercooler"
  const discussPosts = data.filter(post => post.tags.includes('#discuss')).slice(0, 3);
  const watercoolerPosts = data.filter(post => post.tags.includes('#watercooler')).slice(0, 3);

  // Renderizamos los títulos y comentarios para cada categoría en la lista
  discussPosts.forEach((post) => {
    const listItem = document.createElement('li');
    listItem.classList.add('list-group-item');

    const titleElement = document.createElement('h5');
    titleElement.textContent = post.title;

    const commentsCount = post.comments ? post.comments.length : 0;
    const commentsElement = createCommentsElement(commentsCount);

    listItem.appendChild(titleElement);
    listItem.appendChild(commentsElement);

    discussList.appendChild(listItem);
  });

  watercoolerPosts.forEach((post) => {
    const listItem = document.createElement('li');
    listItem.classList.add('list-group-item');

    const titleElement = document.createElement('h5');
    titleElement.textContent = post.title;

    const commentsCount = post.comments ? post.comments.length : 0;
    const commentsElement = createCommentsElement(commentsCount);

    listItem.appendChild(titleElement);
    listItem.appendChild(commentsElement);

    watercoolerList.appendChild(listItem);
  });

  // Agregamos las listas al aside
  asideContainer.appendChild(discussList);
  asideContainer.appendChild(watercoolerList);
};


// Llamamos a la función para renderizar el aside con los post filtrados por los tags
renderAside(data);