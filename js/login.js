import { getImageAuthor } from './modules/api.js';

const randomImage = async () => {
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
