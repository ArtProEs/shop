'use strict'
export const burrgerMenu =() => {
    const iconMenu = document.querySelector('.menu__icon');
    let statusBurgerMenu = false;

    if(iconMenu) {
        const menuBody = document.querySelector('.menu__body');
        iconMenu.addEventListener('click', ()=>{
            document.body.classList.toggle('_lock')
            iconMenu.classList.toggle('_active');
            menuBody.classList.toggle('_active');
            statusBurgerMenu = !statusBurgerMenu
            console.log('statusBurgerMenu→', statusBurgerMenu)
        })
    }
    return {
        status : statusBurgerMenu,
    }
}


