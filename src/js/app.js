import { isWebp, tabs } from './modules/functions.js';
import { burrgerMenu } from './modules/burrger.js';
import { DynamicAdapt } from './modules/dynamicAdapt.js';
import { PageMenu } from './modules/menu_page.js';
import { Search } from './modules/search-page.js';
import { mainSwiper, productSwiper, brendsSwiper, productCatalogSwiper, gallerySwiper } from './modules/swiper.js';
import { RangeSlider } from './modules/nouislider.js';
import { filtersMenu, pageFilter } from './modules/filter-menu.js';
import { DropDownMenu } from './modules/dropdown.js';
import { viewChain } from './modules/viewChain.js';
import { Quantity } from './modules/quantity.js';

// ======================== вызов функций ========================
// определение поддержки webp
isWebp();
// появление открытее и закрыте бурер меню
burrgerMenu()
// динамический адаптив
const dynamicAdapt = new DynamicAdapt("max");  
dynamicAdapt.init();
// открытее закрытее покового меню
PageMenu();
// обект поиска
const search = new Search('search-page');
search.init();
// евент при открытии
// search.on( 'check', 'test2', ( target, elevents, categories ) => console.log(target , elevents, categories))

const rangeSlider = new RangeSlider({
    slider: 'price-filter__slider',
    inputs: 'price-filter__input'
}); rangeSlider.init()

// слайдер главного экрана
mainSwiper()
// слайдер популярных продуктов
productSwiper()
// слайдер бркндов
brendsSwiper()
// 
productCatalogSwiper()
//
gallerySwiper()

pageFilter()
filtersMenu()


const sortCatalog = new DropDownMenu({
    element: 'order__select',
    text: [
        'По умолчанию',
        'Цена',
        'Название'
    ],
    value: [
        'def',
        'prise',
        'name',
    ]
})

const viewCatalog = new DropDownMenu({
    element: 'control-catalog__select',
    text: [
        '9',
        '16',
        '24',
    ],
    value: [
        '9',
        '16',
        '24',
    ]
})

sortCatalog.init()
viewCatalog.init()
// переключение сетки товаров
viewChain()
const productQuantity = new Quantity('product-info__quantity',)

const orderQuantity = new Quantity('allprise-product__quantity',)

console.log(productQuantity);


tabs()