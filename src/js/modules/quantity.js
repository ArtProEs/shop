'use strict'
const _renderQuantity = (string) => {
    const parentQuantity = [...document.querySelectorAll(`.${string}`)];
    const elementsQuantity = []
    if (parentQuantity) {
        parentQuantity.forEach((element, index) => {
            element.innerHTML = `
                <div class="quantity">
                    <button class="quantity__btn quantity__btn_prev">←</button>
                    <input type="number" class="quantity__input" value="1" max="5">
                    <button class="quantity__btn quantity__btn_next">→</button>
                </div>
            `
            const object = {
                el: element.querySelector('.quantity'),
                index: index,
                btnPrev: element.querySelector('.quantity__btn_prev'),
                btnNext: element.querySelector('.quantity__btn_next'),
                out: element.querySelector('.quantity__input'),
            }
            elementsQuantity.push(object)
        })

        return elementsQuantity
    }
}

export class Quantity {
    constructor(string, object) {
        this.elementsQuantity = _renderQuantity(string)
        this.init()
    }

    init() {
        this.elementsQuantity.forEach((object, i) => {
            const {el, index, btnPrev, btnNext, out } = object

            btnPrev.addEventListener('click', () => {
                out.value <= 0 ? out.value = 0 : out.value--
            })

            btnNext.addEventListener('click', () => {
                out.value >= out.max ? out.value = out.max : out.value++
            })
        })
    }
}