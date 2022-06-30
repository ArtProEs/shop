'use strict'
import { isScreenWidth } from "./functions.js";

export const viewChain = () => {
    if (document.querySelector('.chain')) {
        const chain = document.querySelector('.chain')
        const btns = [...chain.querySelectorAll('.chain__display')];
        const itemsProduct = [...document.querySelectorAll('.items-products__column')];

        const renderViewChain = (index) => {
            switch (index) {
            case 0:
                itemsProduct.forEach( item => item.classList.remove('_block') )
                break;
            case 1:
                itemsProduct.forEach( item => item.classList.add('_block') )
                break;
            default:
                itemsProduct.forEach( item => item.classList.remove('_block') )
                break;
            }
        }

        function btnAction(index) {
            if (!this.classList.contains('_focus')) {
                btns.forEach( btni => btni.classList.remove('_focus'))
                this.classList.add('_focus')
                renderViewChain(index)
            }
        }

        isScreenWidth('(max-width:540px)', value => {
            if (value) {
                console.log(value);
                btns.forEach((btn, index) => {
                    btn.classList.remove('_focus')
                    btn.removeEventListener('click', btnAction.bind(btn,index))
                })
                itemsProduct.forEach( item => {
                    item.classList.remove('_block')
                })
                chain.style.display = 'none'
            } else {
                btns.forEach((btn, index) => {
                    if (index == 0) btn.classList.add('_focus');
                    btn.addEventListener('click', btnAction.bind(btn,index));
                })
                chain.style.removeProperty('display');
            }
        })
    }
}