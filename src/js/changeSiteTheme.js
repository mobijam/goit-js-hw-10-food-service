import { bodyColor, toogleBtn } from './refs-data-module';
import { DARK, LIGHT } from './themes';

export const changeTheme = function (event) {
    
    if (event.target.checked) {
        bodyColor.classList.add(DARK);
        bodyColor.classList.remove(LIGHT);
        localStorage.setItem('theme', 'dark');
    }

    else {
        bodyColor.classList.add(LIGHT);
        bodyColor.classList.remove(DARK);
        localStorage.setItem('theme', 'light');
    }

};

toogleBtn.addEventListener('change', changeTheme);

export const saveTheme = function () {
    if (localStorage.getItem('theme') === 'dark') {
       
        bodyColor.classList.add(DARK);
        toogleBtn.checked = true;
    }
    else {
        bodyColor.classList.add(LIGHT);
        toogleBtn.checked = false;
    }
};

toogleBtn.addEventListener('change', saveTheme);