'use strict'
import { isMobail, isScreenWidth, SlideToggle } from "./functions.js";

export const pageFilter = () => {
    if (document.querySelector('.filters-page')) {
        const pageFilter = document.querySelector('.filters-page');
        const slider = new SlideToggle(pageFilter.querySelector('.filters-page__body'));

        const changMenu = (el) => {
            if ( el.target.classList.contains('filters-page__title')) { 
                slider.init()
            }
        }

        isScreenWidth('(max-width: 992px)', value => {
            if (isMobail() || value && pageFilter && slider)  {
                slider.isOpen(false)
                return pageFilter.addEventListener('click', changMenu)
            } else {
                slider.isOpen(true)
                return pageFilter.removeEventListener('click', changMenu)
            }
        })
    }
}

export const filtersMenu = () => {
    const menu = [...document.querySelectorAll('.filter__header')];
    menu.forEach(el => {
        const parent = el.parentNode
        const body = parent.querySelector('ul')
        const slider = new SlideToggle(body)
        slider.isOpen(false)
        el.addEventListener('click', ()=> {
            if (!body.classList.contains('_act')) {
                el.classList.toggle('_active')
            }
            slider.init()
        })
    })
}