// import { createNavbar } from './modules/dom.js';

document.getElementById('login-button').addEventListener('click', (event) => {
  event.preventDefault(); // method that cancels the event if it is cancelable
  localStorage.setItem(
    'token',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
  );
  window.open('../index.html', '_self');
});

// document.getElementById('nav-wrapper').innerHTML = createNavbar(token);

// document.getElementById('logout-button').addEventListener('click', async () => {
//   localStorage.removeItem('token');
//   window.open('../views/index.html', '_self');
// });

// document.getElementById('nav-wrapper').innerHTML = createNavbar(token);
