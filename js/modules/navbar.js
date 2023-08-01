import { createPost } from './elements';

const createNavbar = () => {
  const nav = document.createElement('nav');
  nav.classList.add('navbar', 'p-0', 'px-3', 'bg-white', 'nav__container');

  const divContainer = document.createElement('div');
  divContainer.classList.add(
    'container-xl',
    'p-0',
    'justify-content-between',
    'flex-nowrap'
  );

  const divFlex = document.createElement('div');
  divFlex.classList.add('d-flex');

  // DEVTO LOGO
  const devtoButton = document.createElement('button');
  devtoButton.classList.add(
    'navbar-toggler',
    'mx-md-1',
    'me-2',
    'border-0',
    'd-md-none',
    'px-0'
  );
  devtoButton.setAttribute('type', 'button');
  devtoButton.setAttribute('data-bs-toggle', 'offcanvas');
  devtoButton.setAttribute('data-bs-target', '#offcanvasNavbar');
  devtoButton.setAttribute('aria-controls', 'offcanvasNavbar');

  const devtoSpan = document.createElement('span');
  devtoSpan.classList.add('navbar-toggler-icon');

  const devtoAnchor = document.createElement('a');
  devtoAnchor.classList.add('navbar-brand');

  const devtoLogo = document.createElement('img');
  devtoLogo.src =
    'https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png';

  devtoLogo.setAttribute('height', '40');

  // SEARCH INPUT
  const searchContainer = document.createElement('div');
  searchContainer.classList.add(
    'd-none',
    'd-md-block',
    'm-auto',
    'nav__form__container'
  );

  const searchForm = document.createElement('form');
  searchForm.classList.add('d-flex', 'd-flex form__search');
  searchForm.setAttribute('role', 'search');

  const searchInputGroup = document.createElement('div');
  searchInputGroup.classList.add('input-group');

  const searchInput = document.createElement('input');
  searchInput.setAttribute('id', 'search-input');
  searchInput.setAttribute('type', 'text');
  searchInput.setAttribute('class', 'form-control border-end-0');
  searchInput.setAttribute('placeholder', 'Search...');
  searchInput.setAttribute('aria-label', 'Buscar');
  searchInput.setAttribute('aria-describedby', 'basic-addon1');

  const searchButton = document.createElement('button');
  searchButton.classList.add('border-0', 'bg-white', 'p-0', 'search__button');

  const searchButtonSpan = document.createElement('span');
  searchButtonSpan.classList.add(
    'bg-white',
    'border-1',
    'border-start-0',
    'rounded-0',
    'rounded-end',
    'input-group-text',
    'search__hover'
  );
  searchButtonSpan.setAttribute('id', 'basic-addon1');

  const searchSVG = document.createElement('svg');
  searchSVG.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  searchSVG.setAttribute('width', '24');
  searchSVG.setAttribute('height', '24');
  searchSVG.setAttribute('viewbox', '0 0 24 24');
  searchSVG.setAttribute('role', 'img');
  searchSVG.setAttribute('aria-labelledby', 'agtkixkainaiofuhj4o3hunp3uvwl1y6');
  searchSVG.classList.add('crayons-icon');

  const searchTitle = document.createElement('title');
  searchTitle.setAttribute('id', 'agtkixkainaiofuhj4o3hunp3uvwl1y6');
  searchTitle.innerText('Search');

  const searchPath = document.createElement('path');
  searchPath.setAttribute(
    'd',
    'M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z'
  );

  // LOGIN, CREATE ACCOUNT & LOGOUT BUTTONS
  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('d-flex', 'gap-3');
  buttonsContainer.setAttribute('id', 'authentication-top-nav-actions');

  // LOGIN BUTTON
  const loginButtonSpan = document.createElement('span');
  loginButtonSpan.classList.add('hidden', 'm:block');

  const loginButtonAnchor = document.createElement('a');
  loginButtonAnchor.setAttribute('href', '/views/login.html');
  loginButtonAnchor.classList.add(
    'c-link',
    'c-link--block',
    'mr-2',
    'whitespace-nowrap',
    'ml-auto',
    'text-decoration-none'
  );
  loginButtonAnchor.setAttribute('data-no-instant', '');

  const loginButton = document.createElement('button');
  loginButton.classList.add(
    'btn',
    'btn-outline-primary',
    'd-none',
    'd-md-block'
  );
  loginButton.innerText('Log in');

  // CREATE ACCOUNT BUTTON
  const createAccountAnchorButton = document.createElement('a');
  createAccountAnchorButton.setAttribute('href', '/enter?state=new-user');
  createAccountAnchorButton.setAttribute('data-tracking-id', 'ca_top_nav');
  createAccountAnchorButton.setAttribute('data-tracking-source', 'top_navbar');
  createAccountAnchorButton.classList.add(
    'c-cta',
    'c-cta--branded',
    'whitespace-nowrap',
    'mr-2',
    'text-decoration-none'
  );
  createAccountAnchorButton.setAttribute('data-no-instant', '');

  const createAccountButton = document.createElement('button');
  createAccountButton.classList.add(
    'btn',
    'btn-outline-primary',
    'd-none',
    'd-md-block'
  );
  createAccountButton.innerText('Create Account');

  // LOGOUT BUTTON
  const logoutButtonSpan = document.createElement('span');
  logoutButtonSpan.classList.add('hidden', 'm:block');

  const logoutButtonAnchor = document.createElement('a');
  logoutButtonAnchor.setAttribute('href', '#');
  logoutButtonAnchor.classList.add(
    'c-link',
    'c-link--block',
    'mr-2',
    'whitespace-nowrap',
    'ml-auto',
    'text-decoration-none'
  );
  logoutButtonAnchor.setAttribute('data-no-instant', '');

  const logoutButton = document.createElement('button');
  logoutButton.setAttribute('id', 'logout-button');
  logoutButton.classList.add(
    'btn',
    'btn-outline-primary',
    'd-none',
    'd-md-block'
  );
  logoutButton.innerText('Log out');

  // CREATE POST & NOTIFICATIONS CONTAINER
  const createPostAndNotificationsContainer = document.createAttribute('div');
  createPostAndNotificationsContainer.add('d-flex');

  const createPostAnchor = document.createElement('a');
  createPostAnchor.setAttribute('href', 'views/create.html');
  createPostAnchor.classList.add('text-decoration-none');

  const createPostButton = document.createElement('button');
  createPostButton.classList.add(
    'btn',
    'btn-outline-primary',
    'd-none',
    'd-md-block'
  );
  createPostButton.innerHTML('Create Post');

  const createPostSVG = document.createElement('svg');
  createPostSVG.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  createPostSVG.setAttribute('width', '24');
  createPostSVG.setAttribute('height', '24');
  createPostSVG.setAttribute('viewbox', '0 0 24 24');
  createPostSVG.setAttribute('role', 'img');
  createPostSVG.setAttribute(
    'aria-labelledby',
    'agtkixkainaiofuhj4o3hunp3uvwl1y6'
  );
  createPostSVG.classList.add('crayons-icon', 'd-md-none', 'my-auto');

  const createPostTitle = document.createElement('title');
  createPostTitle.setAttribute('id', 'agtkixkainaiofuhj4o3hunp3uvwl1y6');
  createPostTitle.innerText('Search');

  const createPostPath = document.createElement('path');
  createPostPath.setAttribute(
    'd',
    'M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z'
  );

  // NOTIFICATIONS
  const notificationsAnchor = document.createElement('a');
  notificationsAnchor.setAttribute('href', '#');
  notificationsAnchor.classList.add('navbar-nav', 'mx-3', 'my-auto');

  const notificationsTitle = document.createElement('title');
  notificationsTitle.setAttribute('id', 'a4gcjtvbhvh6eh4ee8qmpi1l37goznso');
  notificationsTitle.innerText('Notificatons');

  const notificationsPath = document.createElement('path');
  notificationsPath.setAttribute(
    'd',
    'M20 17h2v2H2v-2h2v-7a8 8 0 1116 0v7zm-2 0v-7a6 6 0 10-12 0v7h12zm-9 4h6v2H9v-2z'
  );

  const notificationsIMG = document.createElement('img');
  notificationsIMG.setAttribute('id', 'author-picture');
  notificationsIMG.setAttribute('alt', 'Notifications icon');
  notificationsIMG.classList.add('navbar-nav', 'rounded-circle', 'me-1');
  notificationsIMG.setAttribute('height', '40');
};
