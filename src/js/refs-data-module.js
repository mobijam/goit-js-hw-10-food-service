const refs = {
    bodyColor: document.querySelector('body'),
    toogleBtn: document.querySelector('#theme-switch-toggle'),
    menuList: document.querySelector('.js-menu'),
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

export { refs, Theme };