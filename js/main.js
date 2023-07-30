// Importar las funciones necesarias desde los módulos
import { createPost } from './modules/elements.js';
import { getPosts, getUniquePost } from './modules/api.js';
import { orderData } from './modules/orders.js';

// Obtener la imagen del autor del post desde el almacenamiento local y mostrarla
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

// Obtener los datos de los posts y renderizar los principales
const data = await processData();
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

// Renderizar los posts principales ordenados por relevancia
renderData(orderData(data, 'relevant'));

// Función para limpiar el contenido principal
const cleanMain = () => {
  main.innerHTML = '';
};

// Manejo del filtrado de los posts al hacer clic en los elementos del aside
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

// Función para crear un elemento de tarjeta (card) para un post
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

// Función para renderizar el aside con los posts filtrados por los tags
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

  // Renderizamos los títulos y comentarios para cada categoría en la lista "Discuss"
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

    // Agregar el manejador de eventos para el elemento de la lista
    listItem.addEventListener('click', () => {
      redirectToPostDetail(post.id);
    });
  });

  // Renderizamos los títulos y comentarios para cada categoría en la lista "Watercooler"
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

    // Agregar el manejador de eventos para el elemento de la lista
    listItem.addEventListener('click', () => {
      redirectToPostDetail(post.id);
    });
  });

  // Agregamos las listas al aside
  asideContainer.appendChild(discussList);
  asideContainer.appendChild(watercoolerList);
};

// Llamamos a la función para renderizar el aside con los posts filtrados por los tags
renderAside(data);

// Función para redireccionar a la página de detalle del post con el ID correspondiente
const redirectToPostDetail = (postId) => {
  window.location.href = `views/post.html?id=${postId}`;

};
