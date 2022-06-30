'use strict'
import { SlideToggle } from "./functions.js";

export class Search {
    /**
     * @param {*} string - класс родителя
     */
    constructor(string) {
        this.status = false;
        this.page = document.querySelector(`.${string}`);  // .search-page 
        this.categories = this.page.querySelector('.categories-search');
        this.title = this.page.querySelector('.search-page__title');
        this.textTitle = this.title.querySelector('span');
        this.out = this.page.querySelector('.search-page__out');
        this.serchCheckboxs = [...this.page.querySelectorAll('.categories-search__checkbox')];
        this.chosenСategories = {
            elments: [],
            categories: [],
        };
        this.events = {
            'check': [],
            'open': [],
        };
    }
    /**
     * @param {string} name 
     * @param {*} subscriber 
     * @param {Function} callback 
     */
    on( name, subscriber, callback ) {
        if (!this.events[name]) this.events[name] = [];
        if (subscriber) this.events[name]
            .push({
                subscriber,
                callback,
            })
        ;
    }
    /**
     * @param {string} name 
     * @param {*} subscriber 
     */
    off( name, subscriber ) {
        if ( this.events[name] && subscriber ) 
            this.events[name].forEach(( object, index ) => {
                if ( object.subscriber == subscriber ) this.events[name].splice( index, 1 )
            })
        ;
    }
    /**
     * @param {string} name 
     * @param {object} object 
     */
    _emit( name, object ) {
        if ( this.events[name] && name == 'check' ) {
            const { elments, categories } = object.chosenСategories
            const { target } = object
            this.events[name].forEach( object => object.callback( target, elments, categories ))
        }
        if ( this.events[name] && name == 'open' ) {
            
            this.events[name].forEach( object => object.callback())
        }
    }

    init() {
        const slide = new SlideToggle(this.categories)
        slide.isOpen(this.status);
        const statusOut = () => 
            !this.status && this.chosenСategories.elments.length > 0 
            ? this.out.classList.add('_active') 
            : this.out.classList.remove('_active')
        ;

        const renderCategory = () => {
            this.chosenСategories.elments.forEach( element => {
                const span = document.createElement('span')
                span.textContent = element.textContent 
                this.out.append(span)
            })
        }

        this.title.addEventListener('click', ()=>{
            if ( !this.categories.classList.contains('_act')) {
                this.status = !this.status;
                this._emit('open')
                statusOut()
            }
            slide.init()
        })


        this.serchCheckboxs.forEach( checkbox => {
            checkbox.addEventListener('change', ()=> {
                checkbox.classList.toggle('_target');

                if(checkbox.classList.contains('_target') && checkbox.dataset.categories ) {
                    this.chosenСategories.elments.push(checkbox)
                    this.chosenСategories.categories.push(checkbox.dataset.categories);
                } else {
                    this.chosenСategories.elments.forEach( (element, index) => {
                        if ( element == checkbox ) {
                            this.chosenСategories.elments.splice(index, 1);
                            this.chosenСategories.categories.splice(index, 1);
                        }
                    })
                }

                this._emit('check', {
                    target: checkbox,
                    chosenСategories: this.chosenСategories,
                });

                if ( this.chosenСategories.elments.length > 0 ) {
                    this.textTitle.textContent = 'Категории';
                    this.out.innerHTML = '';
                    renderCategory();
                } else {
                    this.textTitle.textContent = 'Везде';
                    this.out.innerHTML = '';
                }
                statusOut()
            })
        })
    }
}