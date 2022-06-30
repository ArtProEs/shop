'use strict'

export class RangeSlider {

    constructor(object) {
        this.slider = document.querySelector(`.${object.slider}`);
        this.inputs = [...document.querySelectorAll(`.${object.inputs}`)];
        this.MIN = 0;
        this.MAX = 100000;
        this.noUiSlider;
    }

    getMin() { return this.MIN }
    getMax() { return this.MAX }

    setMin(value) {
        this.MIN = Number(value);
        this.slider.noUiSlider.destroy();
        this.init();
    }

    setMax(value) {
        this.MAX = Number(value);
        this.slider.noUiSlider.destroy();
        this.init();
    }

    init() {
        const setRangeSlider = (index, value) =>{
            let arr = [null, null];
            arr[index] = value;
            this.slider.noUiSlider.set(arr);
        }

        if (this.slider) {
            noUiSlider.create(this.slider, {
                start: [0, 100000],
                connect: true,
                tooltips: true, // [ true, true ] - для отдельных элементов
                step: 1,
                format:{
                    to: (value) => Math.round(value),
                    from: (value) => Number(value),
                },
                range: {
                    'min': this.MIN,
                    'max': this.MAX,
                }
            });

            this.noUiSlider = this.slider.noUiSlider

            if (this.inputs) {
                this.inputs.forEach((input, index) => {
                    input.max = this.MAX
                    input.min = this.MIN
                    input.addEventListener('change', (el) => {
                        setRangeSlider(index, el.currentTarget.value)
                    })
                })
            } else console.log("inputs не найден");
    
            /**
             * @param { value } Array - 0 - значение левого ползунка
             * @param { value } Array  - 1 - значение правого ползунка
             * @param { handle } Number - индекс выбранного ползунка  
             * @param { unencoded } Array: Значения слайдера без форматирования
             * @param { tap } Boolean : Событие было вызвано тем, что пользователь коснулся ползунка
             * @param { positions } Array : Левое смещение ручек
             * @param { noUiSlider } Object: slider public Api
             */
             this.slider.noUiSlider.on('update', (values, handle) => {
                this.inputs[handle].value = values[handle];
            })
        } else console.log('error init slider');
    }
}