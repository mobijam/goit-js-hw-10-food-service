import menuItems from '../menu.json';

import menuTemplate from '../templates/menu.hbs';

const markup = menuTemplate(menuItems);

const menuBlock = document.querySelector('.js-menu').insertAdjacentHTML('beforeend', markup);