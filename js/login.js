//PARA GENERAR IMAGEN ALEATORIA
const randomImage = () => {
  const images = [
    'https://yt3.googleusercontent.com/ytc/AOPolaSS99flGOVjbXL1KxlWI1B_-Sv5dUKzRlNtAASbJQ=s900-c-k-c0x00ffffff-no-rj',
    'https://pyxis.nymag.com/v1/imgs/9df/b83/f19d6669aa713c1330ee8cf21c43d72078-12-mr-robot-music.rsquare.w700.jpg',
    'https://i.imgur.com/AtjuEkK.png',
  ];

  return images[Math.floor(Math.random() * 3)];
};

//PONER EN LOCALSTORAGE COMO "image" y despues poner el campo de usuario de login en author
/*
localStorage.setItem('image', randomImage())
localStorage.setItem('author', 'VALUE DE USER/NOMBRE')
*/
