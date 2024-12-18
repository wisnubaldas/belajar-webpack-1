// Import only the Bootstrap components we need
import { Popover } from 'bootstrap';
import './router';

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]').forEach((popover) => {
  new Popover(popover);
});