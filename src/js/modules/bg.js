'use strict'

export const backgroundImages = () => {
    const backgroundImages = [...document.querySelectorAll('[data-bg]')];
    backgroundImages.forEach( item => {
        item.style.backgroundImage = item.dataset.bg
    })
    return {
        dataBgElements : backgroundImages,
    }
}