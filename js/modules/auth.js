import { createLogoutedButtons, createLoggedButtons } from './navbar.js';

const token = localStorage.getItem('token');
const tokenValidation = () =>
  token ? createLoggedButtons() : createLogoutedButtons();

export { tokenValidation };
