import ContentSwapper from './asaa-components/swap-template.js';
import PasswordEye from './asaa-components/password-eye.js';

const contentSwapper = new ContentSwapper();

const passwordInputs = document.querySelectorAll('[data-as-trigger="password-eye"]');
passwordInputs.forEach((input) => {
  new PasswordEye(input);
});