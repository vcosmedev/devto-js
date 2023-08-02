import { createLogoutedButtons, createLoggedButtons } from './navbar.js';

const token = localStorage.getItem('token');
const tokenValidation = () =>
  token ? createLoggedButtons() : createLogoutedButtons();

const booleanAuth = () => (token ? true : false);

export { tokenValidation, booleanAuth };
