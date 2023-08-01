import { createPost, createSimplePost } from './modules/elements.js';
import { getPosts } from './modules/api.js';
import { orderData } from './modules/orders.js';
import { renderAside } from './modules/Aside.js';

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

// PARA OBTENER TAGS ->
data.forEach((post, i) => console.log(i + 1, post['tags']));
//

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



renderAside(data, 'aside__main')
//Aside
const renderPostAside = (data) => {
  const random = Math.floor(Math.random() * data.length);
  const asidemain = document.getElementById('aside__main');
  const post = createSimplePost(data[random]);

  asidemain.prepend(post);
};

renderPostAside(data,'aside__main');
