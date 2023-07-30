import { createPost } from './modules/elements.js';
import { getPosts } from './modules/api.js';
import { orderData } from './modules/orders.js';

const authorpic = document.getElementById('author-picture');
authorpic.src = localStorage.getItem('image');
authorpic.classList.remove('d-none');
//variable global del array de post
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

const order = document.querySelectorAll('.data-item');
let orderactive = document.querySelector('.main__title__selected');
let curentdata;

order.forEach((item) => {
  item.addEventListener('click', ({ target }) => {
    if (orderactive !== item) {
      orderactive.classList.remove('main__title__selected');
      item.classList.add('main__title__selected');
      curentdata = orderData(data, target.id);

      cleanMain();
      renderData(curentdata);

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

  const separator = document.createElement('hr');
  separator.classList.add('my-2');

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(separator);

  const tags = post.tags.filter(tag => tag === 'discuss' || tag === 'watercooler');
  const tagsContainer = document.createElement('div');
  tagsContainer.textContent = `Tags: ${tags.join(', ')}`;

  const readTime = document.createElement('div');
  readTime.textContent = `Read Time: ${post.readtime} min`;

  const commentsContainer = document.createElement('div');
  const commentsLink = document.createElement('a');
  commentsLink.classList.add('comment__vinc');
  commentsLink.href = '#';
  commentsLink.textContent = `${post.comments.length} Comentarios`;

  commentsContainer.appendChild(commentsLink);

  cardBody.appendChild(tagsContainer);
  cardBody.appendChild(readTime);
  cardBody.appendChild(commentsContainer);

  card.appendChild(cardBody);
  return card;
};

// Función para renderizar el aside
const renderAside = (data) => {
  const asideContainer = document.getElementById('asideContainer');

  const filteredPosts = data.filter(post => post.tags.includes('#discuss') || post.tags.includes('#watercooler'));
  filteredPosts.forEach((post) => {
    const card = createCard(post);
    asideContainer.appendChild(card);
  });
};

// Llamamos a la función para renderizar el aside con los post filtrados por los tags
renderAside(data);
