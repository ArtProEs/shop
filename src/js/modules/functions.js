'use strict'
// Проверка поддержки webp, добавление класса webp или no-webp для html
export function isWebp() {
    // проверка поддежки webp 
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    // добавление класса 
    testWebP(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
}
// Добавление к елементу плавное появление
export class SlideToggle {

    constructor(target, duration = 500) {
        this.target = target;
        this.duration = duration;
    }
    
    up() {
        this.target.classList.add('_act')
        this.target.style.transitionProperty = 'height, margin, padding';
        this.target.style.transitionDuration = this.duration + 'ms';
        this.target.style.boxSizing = 'border-box';
        this.target.style.height = this.target.offsetHeight + 'px';
        this.target.offsetHeight;
        this.target.style.overflow = 'hidden';
        this.target.style.height = 0;
        this.target.style.paddingTop = 0;
        this.target.style.paddingBottom = 0;
        this.target.style.marginTop = 0;
        this.target.style.marginBottom = 0;
        window.setTimeout( () => {
            this.target.style.display = 'none';
            this.target.style.removeProperty('height');
            this.target.style.removeProperty('padding-top');
            this.target.style.removeProperty('padding-bottom');
            this.target.style.removeProperty('margin-top');
            this.target.style.removeProperty('margin-bottom');
            this.target.style.removeProperty('overflow');
            this.target.style.removeProperty('transition-duration');
            this.target.style.removeProperty('transition-property');
            this.target.classList.remove('_act')
        }, this.duration);
        return this
    }

    down() {
        this.target.classList.add('_act')
        this.target.style.removeProperty('display');
        let display = window.getComputedStyle(this.target).display;
        if (display === 'none') display = 'block';
        this.target.style.display = display;
        let height = this.target.offsetHeight;
        this.target.style.overflow = 'hidden';
        this.target.style.height = 0;
        this.target.style.paddingTop = 0;
        this.target.style.paddingBottom = 0;
        this.target.style.marginTop = 0;
        this.target.style.marginBottom = 0;
        this.target.offsetHeight;
        this.target.style.boxSizing = 'border-box';
        this.target.style.transitionProperty = "height, margin, padding";
        this.target.style.transitionDuration = this.duration + 'ms';
        this.target.style.height = height + 'px';
        this.target.style.removeProperty('padding-top');
        this.target.style.removeProperty('padding-bottom');
        this.target.style.removeProperty('margin-top');
        this.target.style.removeProperty('margin-bottom');
        window.setTimeout( () => {
            this.target.style.removeProperty('height');
            this.target.style.removeProperty('overflow');
            this.target.style.removeProperty('transition-duration');
            this.target.style.removeProperty('transition-property');
            this.target.classList.remove('_act')
        }, this.duration);
        return this
    }

    isOpen(open = false) {
        if (open) {
            this.target.style.removeProperty('display')
        } else {
            this.target.style.display = 'none';
        }
    }

    init() {
        let display = window.getComputedStyle(this.target).display;
        if (display === 'none' && !this.target.classList.contains('_act')) {
            return this.down();
        } else if (!this.target.classList.contains('_act')) {
            return this.up();
        }
    }
}
// Проверка Устройства
export const isMobail = () => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) 
        return true
    else return false
}
// медизапрос callback - функция при изменении медиа запроса
export const isScreenWidth = (string, callback) => {
    const mediaQueryList = window.matchMedia(string);
    if (typeof callback === 'function') {
        mediaQueryList.addEventListener('change', () => callback(mediaQueryList.matches))
        callback(mediaQueryList.matches)
    }
    return mediaQueryList.matches
}

export const tabs = () => {
    const nav = document.querySelector('.tabs-nav');
    const body = document.querySelector('.tabs-body');
    const btns = [...nav.children];
    const tabs = [...body.children];
    
    tabs.forEach(tab => tab.style.display = 'none')
    btns.forEach((btn, index) => {
        if(btn.classList.contains('_active')) {
            tabs[index].style.removeProperty('display');
        }
    })

    nav.addEventListener('click', function(el) {
        if (
            el.target.classList.contains('tabs-btn')
             && 
            !el.target.classList.contains('_active')
        ) {
            btns.forEach(btn => btn.classList.remove('_active'))
            el.target.classList.add('_active')
            tabs.forEach(tab => tab.style.display = 'none')
            tabs[btns.indexOf(el.target)].style.removeProperty('display');
        }
    })
}