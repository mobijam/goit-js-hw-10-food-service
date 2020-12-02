import { refs } from './refs-data-module';

import menuItems from '../menu.json';

import menuTemplate from '../templates/menu.hbs';

const markup = menuTemplate(menuItems);

const menuBlock = refs.menuList.insertAdjacentHTML('beforeend', markup);