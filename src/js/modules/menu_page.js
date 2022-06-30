'use strict'
import { isMobail, SlideToggle } from "./functions.js";
/** info
 * * открывает главное меню, 
 * * в зависимости от устройства добавляет { addEventListener } 
 * *   на Елементы имеющие подменю
 * @returns {
 *      status - статус меню,
 *      elements - {
 *          menu - главый родитель,
 *          menuBody - тело менюшки,
 *          itemsParent - Елементы имеющие подменю,
 *      },
 * }
 */
export const PageMenu = () => {
    const menu = document.querySelector('.menu-page'); // главый родитель
    const burger = menu.querySelector('.menu-page__burger'); // кнопка
    const menuBody = menu.querySelector('.menu-page__body'); // тело менюшки
    const itemsParent = [...menu.querySelectorAll('.menu-page__item-parent')]; // Елементы имеющие подменю

    let statusPageMenu = false;
   
    const slider = new SlideToggle(menuBody)

    slider.isOpen(statusPageMenu)
    
    const burgerActive = () => {
        if ( !menuBody.classList.contains('_act') ) {
            burger.classList.toggle('_active')
            statusPageMenu = !statusPageMenu;
            submenu()
        }
        slider.init()
    };

    function submenuActive() { this.classList.toggle('_active'); } 

    burger.addEventListener('click', burgerActive);

    const submenu = () => {
        if(isMobail()) {
            itemsParent.forEach( item => {
                item.addEventListener('click', (el) => {
                    el.preventDefault()
                    item.classList.toggle('_active')
                })
            });
        } else if (statusPageMenu) {
            itemsParent.forEach( item => {
                item.addEventListener('mouseover', submenuActive.bind(item))
                item.addEventListener('mouseout', submenuActive.bind(item))
            });
        } else {
            itemsParent.forEach( item => {
                item.removeEventListener('mouseover', submenuActive.bind(item))
                item.removeEventListener('mouseout', submenuActive.bind(item))
            });
        }
    };submenu()
    return {
        status: statusPageMenu,
        elements: {
            menu: menu,
            menuBody: menuBody,
            itemsParent: itemsParent,
        },
    }
}