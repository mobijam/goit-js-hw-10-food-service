import {refs, Theme} from './refs-data-module';

export const changeTheme = function (event) {
    
    if (event.target.checked) {
        refs.bodyColor.classList.add(Theme.DARK);
        refs.bodyColor.classList.remove(Theme.LIGHT);
        localStorage.setItem('Theme', 'dark');
    }

    else {
        refs.bodyColor.classList.add(Theme.LIGHT);
        refs.bodyColor.classList.remove(Theme.DARK);
        localStorage.setItem('Theme', 'light');
    }

};

refs.toogleBtn.addEventListener('change', changeTheme);

export const saveTheme = function () {
    if (localStorage.getItem('Theme') === 'dark') {
       
        refs.bodyColor.classList.add(Theme.DARK);
        refs.toogleBtn.checked = true;
    }
    else {
        refs.bodyColor.classList.add(Theme.LIGHT);
        refs.toogleBtn.checked = false;
    }
};

refs.toogleBtn.addEventListener('change', saveTheme);