import { createPost, createSimplePost } from './modules/elements.js';
import { getPosts } from './modules/api.js';
import { orderData } from './modules/orders.js';
import { renderAside } from './modules/Aside.js';


import { tokenValidation } from './modules/auth.js';

let loggedButtonsValidation = document.getElementById(
  'authentication-top-nav-actions'
);
loggedButtonsValidation.innerHTML = '';
loggedButtonsValidation.append(tokenValidation());


/* const authorpic = document.getElementById('author-picture');
authorpic.src = localStorage.getItem('image');
authorpic.classList.remove('d-none'); */

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

  document.getElementById('no-data').classList.add('d-none');
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

// Registrar lo que se escribe en el input
document.getElementById('search-input').addEventListener('keyup', (event) => {
  let value = event.target.value;
  let filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(value.toLowerCase())
  );
  cleanMain();
  // renderData(orderData(filteredData, 'relevant'));
  renderData(filteredData);

  const nodata = document.getElementById('no-data');

  if (filteredData.length === 0) {
    nodata.classList.remove('d-none');
  } else {
    nodata.classList.add('d-none');
  }
});

renderAside(data, 'aside__main');
//Aside
const renderPostAside = (data) => {
  const random = Math.floor(Math.random() * data.length);
  const asidemain = document.getElementById('aside__main');
  const post = createSimplePost(data[random]);

  asidemain.prepend(post);
};

renderPostAside(data, 'aside__main');
