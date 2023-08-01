// import { createNavbar } from './modules/dom.js';

document.getElementById('logout-button').addEventListener('click', (event) => {
  event.preventDefault(); // method that cancels the event if it is cancelable
  localStorage.removeItem('token');
  localStorage.removeItem('author');
  localStorage.removeItem('image');
  window.open('../index.html', '_self');
});
