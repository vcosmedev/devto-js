import { getImageAuthor } from './modules/api.js';

//PARA GENERAR IMAGEN ALEATORIA
const randomImage = async () => {
  /* const images = [
    'https://yt3.googleusercontent.com/ytc/AOPolaSS99flGOVjbXL1KxlWI1B_-Sv5dUKzRlNtAASbJQ=s900-c-k-c0x00ffffff-no-rj',
    'https://pyxis.nymag.com/v1/imgs/9df/b83/f19d6669aa713c1330ee8cf21c43d72078-12-mr-robot-music.rsquare.w700.jpg',
    'https://i.imgur.com/AtjuEkK.png',
  ];

  return images[Math.floor(Math.random() * 3)]; */

  const image = await getImageAuthor();

  return image['results'][0]['picture']['thumbnail'];
};

document
  .getElementById('login-button')
  .addEventListener('click', async (event) => {
    event.preventDefault(); // method that cancels the event if it is cancelable
    localStorage.setItem(
      'token',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    );

    const getAuthor = document.getElementById('user_email');
    const getValueAuthor = getAuthor.value.split('@')[0].toLowerCase();
    const capitalizeFirstLetter =
      getValueAuthor.charAt(0).toUpperCase() + getValueAuthor.slice(1);

    localStorage.setItem('image', await randomImage());
    localStorage.setItem('author', capitalizeFirstLetter);
    window.open('../index.html', '_self');
  });
