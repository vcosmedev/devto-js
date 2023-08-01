import { getExplicitDate, getPPM } from './modules/time.js';
import { postPosts } from './modules/api.js';

let data = {};
let validate = true;

const randomImage = () => {
  const images = [
    'https://yt3.googleusercontent.com/ytc/AOPolaSS99flGOVjbXL1KxlWI1B_-Sv5dUKzRlNtAASbJQ=s900-c-k-c0x00ffffff-no-rj',
    'https://pyxis.nymag.com/v1/imgs/9df/b83/f19d6669aa713c1330ee8cf21c43d72078-12-mr-robot-music.rsquare.w700.jpg',
    'https://i.imgur.com/AtjuEkK.png',
  ];

  return images[Math.floor(Math.random() * 3)];
};

document
  .getElementById('form-control-post')
  .addEventListener('keyup', ({ target }) => {
    const { value, name } = target;
    data[name] = value;
  });

const createData = (dataobj) => {
  const random = Math.floor(Math.random() * 10) + 1;
  dataobj['author'] = localStorage.getItem('author');
  dataobj['profilePic'] = localStorage.getItem('image');
  dataobj['date'] = getExplicitDate(new Date());
  dataobj['comments'] = 0;
  dataobj['relevant'] = random % 2 == 0 ? true : false;
  dataobj['rank'] = random;

  const processtags = dataobj['tags'].split(', ');
  dataobj['tags'] = processtags;

  const words = '' + dataobj['content'];
  dataobj['readtime'] = getPPM(words);

  return dataobj;
};

document.getElementById('btn-submit').addEventListener('click', () => {
  if (validate) {
    const objfin = createData(data);
    postPosts(objfin);
    window.open('../index.html');
  }
});
