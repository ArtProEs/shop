'use strict'

const _renderDropDownItem = (text, data, index) => {
    const dropDownItem = document.createElement('li')
    dropDownItem.classList.add('dropdown__item')
    dropDownItem.dataset.value = data[index]
    dropDownItem.textContent = text
    return dropDownItem
}

const _renderDropDownMenu = (object) => {
    const elements = document.querySelectorAll(`.${object.element}`);
    const elementsMenu = [];
    elements.forEach( element => {
        element.innerHTML = `
            <div class="dropdown">
                <button class="dropdown__btn" data-categories="${object.value[0]}" >${object.text[0]}</button>
                <ul class="dropdown__list"></ul>
            </div>
        `
        if (element.querySelector('.dropdown__list')) {
            object.text.forEach((text, index) => {
            element.querySelector('.dropdown__list')
            .append(_renderDropDownItem(text, object.value, index))
            })
        }
        elementsMenu.push(element.querySelector('.dropdown')) 
    })
    return elementsMenu
}

/**
 * @param {
 *  element, - куда 
 *  text,
 *  value,
 * }
 */
export class DropDownMenu {

    constructor(object) {
        this.dropDownMenu = _renderDropDownMenu(object)
        this.selected = object.value[0]
        this.events = {
            'update': [],
        }
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
    _emit( name, object = this) {
        if ( this.events[name] && name == 'update' ) {
            this.events[name].forEach( event => event.callback(this.selected, object))
        }
    }
    init() {
        const updateSelected = (value) => {
            this.selected = value
            this._emit('update')
            return this.selected
        }
        updateSelected(this.selected);
        this.dropDownMenu.forEach(menuItem => {
            const btns = this.dropDownMenu.map(menuItem => menuItem.children[0])
            const btn = menuItem.children[0];
            const list = menuItem.children[1];
            const items = [...list.children];

            btn.addEventListener('click', () => {
                menuItem.classList.toggle('_active');
                btn.classList.add('_focus');
            })

            items.forEach(element => {
                element.addEventListener('click', (e)=> {
                    e.stopPropagation();
                    updateSelected(element.dataset.value);
                    if (btns.length >= 1) {
                        btns.forEach(btn => {
                            btn.textContent = element.textContent;
                            btn.dataset.categories = this.selected;
                        })
                    } else {
                        btn.textContent = element.textContent;
                        btn.dataset.categories = this.selected;
                    }
                    menuItem.classList.remove('_active');
                })
            })

            document.addEventListener('click', e => {
                if(e.target !== btn) {
                    menuItem.classList.remove('_active');
                    btn.classList.remove('_focus');
                }
            })

            document.addEventListener('keydown', e => {
                if (e.key === 'Tab' || e.key === 'Escape') {
                    menuItem.classList.remove('_active');
                    btn.classList.remove('_focus');
                }
            })

        })
        return this;
    }
}
