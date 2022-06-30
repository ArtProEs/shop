import Swiper, { Navigation, Pagination, Thumbs } from 'swiper';

export const mainSwiper = () => {
    const mainSwiper = new Swiper('.main-slider', {
        modules: [Navigation, Pagination],
        // loop: true, //→----------------------| зацикленность слайдера!
        // simulateTouch: true, //→-----------| включение/выклчение перетаскиваия на пк
        // touchRatio: 1, //→------------------| чувствительность свайпа
        // touchAngle: 45, //→----------------| угол сробатывание
        grabCursor: true, // →--------------| курсор руки 
        // slideToClickedSlide: false, //→----- | переключение при клике на слайд 
        // autoHeight: false, //→--------------| автовысота слайдера
        slidesPerView: 'auto', //→---------------| колличество показаных слайдов можно указывать не целые числа
        slidesPerGroup: 1,//→--------------| Колличество пролистываемых слайдов
        // watchOverFlow: true,//→---------- | Отключение функционала если слайдов меньше чем нужно
        spaceBetween: 5,//→------------- | Отступ между слайдами
        // centeredSlides: false,//→-----------| Активный слад по центру
        // slidesPerColumn: 2,//→-----------| Мультирядность
        speed: 300,//→--------------------- | скорость прокрутки слайдов
        // direction: 'vertical',//→------------- | оринтация сладера деф горизонтально

    /*-----------------------------------------
        navigation: {// →--------------------- | Кнопки навигации
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
    */
        pagination: {  //→-----------------------| Навигация
            el: '.main-slider__dots', 
            type: 'bullets', //→ { 'bullets' , 'fraction' или 'progressbar' 'custom'}
            clickable: true,//→------------------- | переключение слайдев булетами
            // dynamicBullets: true,//→------------ | Динамические буллеты
            renderBullet: function (Index, className) { //→ Кастомные буллеты 
                return `<span class="${className} dots-item">${Index+1}</span>`
            },
            // renderFraction: function (currentClass, totalClass) { //→Кастомные Фракции
            //     return `Хуй`
            // }
        },
    /*------------------------------------------
        scrollbar: {//→-------------------------- | скролл бар
            el: '.swiper-scrollbar',
            draggable: true,// →----------------| возможность перетаскивать скролл
        },
    */
    /* ----------------------------------------
        keyboard: {//→------------------------| управлеие Клавиотурой 
            enabled: true, //→------------------| включить/выключить
            onlyInViewpot: true, //→-----------| включить/выключить в приделах вьюпорта

            pageUpDown: false,//→----------- | включить/выключить уравление клафишами pageUp pageDown
        },
    */
    /* ----------------------------------------
        mousewheel: {//→--------------------| Управление колесом мыши 
            sensitivity: 1, //→-------------------|чувствительность
            eventTarget: '.class', //→-----------| класc объекта на котором будет сробатывать прокрутка мыши
        },
    */
    /*--------------------------------------
        autoplay: {//→-----------------------| автопрокрутков слайдов
            delay: 1000, //→------------------| пауза между прокруткой
            stopOnLastSlide: true,//→-------- | закончить на последнем слайде
            disableOnInteraction: false,//→---| отключать после ручного переключения
        },
    */
    /*--------------------------------------
        breakpoints: {// адаптив 
            320: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            }
        }
    */
    });

    mainSwiper.on('slideChange', function () {        imagesDots()    });

    const imagesDots = () =>{
        const slides = mainSwiper.slides;
        const bullets = mainSwiper.pagination.bullets;
        bullets.forEach( (bullet, index) => bullet.style.backgroundImage = !bullet.classList.contains('swiper-pagination-bullet-active') ?
            slides[index].style.backgroundImage :
            bullet.style.backgroundImage = 'none'
        )
    }
    imagesDots()
}

export const productSwiper = () => {
    const productSwiper = new Swiper('.products-slider__item', {
        // loop: true, //→----------------------| зацикленность слайдера!
        // simulateTouch: false, //→-----------| включение/выклчение перетаскиваия на пк
        // touchRatio: 1, //→------------------| чувствительность свайпа
        // touchAngle: 45, //→----------------| угол сробатывание
        // grabCursor: true, // →--------------| курсор руки 
        // slideToClickedSlide: false, //→----- | переключение при клике на слайд 
        // autoHeight: false, //→--------------| автовысота слайдера
        slidesPerView: 1, //→---------------| колличество показаных слайдов можно указывать не целые числа
        slidesPerGroup: 1,//→--------------| Колличество пролистываемых слайдов
        watchOverFlow: true,//→---------- | Отключение функционала если слайдов меньше чем нужно
        spaceBetween: 5,//→------------- | Отступ между слайдами
        // centeredSlides: false,//→-----------| Активный слад по центру
        // slidesPerColumn: 2,//→-----------| Мультирядность
        speed: 300,//→--------------------- | скорость прокрутки слайдов
        // direction: 'vertical',//→------------- | оринтация сладера деф горизонтально
        // slideClass: 'products-slider__slide', //→ установит класс слайдера, и добавить его в CSS swiper
    /*----------------------------------------- */
        navigation: {// →--------------------- | Кнопки навигации
            nextEl: '.products-slider__arrow_next',
            prevEl: '.products-slider__arrow_prev'
        },
    /*-----------------------------------------    */
        pagination: {  //→-----------------------| Навигация
            el: '.products-slider__info', 
            type: 'fraction', //→ { 'bullets' , 'fraction' или 'progressbar' 'custom'}
            // clickable: true,//→------------------- | переключение слайдев булетами
            // dynamicBullets: true,//→------------ | Динамические буллеты
            // renderBullet: function (Index, className) { //→ Кастомные буллеты 
            //     return `<span class="${className} dots-item">${Index+1}</span>`
            // },
            // renderFraction: function (currentClass, totalClass) { //→Кастомные Фракции
            //     return `Хуй`
            // }
        },

    /*------------------------------------------
        scrollbar: {//→-------------------------- | скролл бар
            el: '.swiper-scrollbar',
            draggable: true,// →----------------| возможность перетаскивать скролл
        },
    */
    /* ----------------------------------------
        keyboard: {//→------------------------| управлеие Клавиотурой 
            enabled: true, //→------------------| включить/выключить
            onlyInViewpot: true, //→-----------| включить/выключить в приделах вьюпорта

            pageUpDown: false,//→----------- | включить/выключить уравление клафишами pageUp pageDown
        },
    */
    /* ----------------------------------------
        mousewheel: {//→--------------------| Управление колесом мыши 
            sensitivity: 1, //→-------------------|чувствительность
            eventTarget: '.class', //→-----------| класc объекта на котором будет сробатывать прокрутка мыши
        },
    */
    /*--------------------------------------
        autoplay: {//→-----------------------| автопрокрутков слайдов
            delay: 1000, //→------------------| пауза между прокруткой
            stopOnLastSlide: true,//→-------- | закончить на последнем слайде
            disableOnInteraction: false,//→---| отключать после ручного переключения
        },
    */
    /*--------------------------------------
        breakpoints: {// адаптив 
            320: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            }
        }
    */
    modules: [Navigation, Pagination],
    })
}

export const productCatalogSwiper = () => {
    if (document.querySelector('.catalog-page__swiper')) {
        const productCatalogSwiper = new Swiper('.catalog-page__swiper', {
            // loop: true, //→----------------------| зацикленность слайдера!
            // simulateTouch: false, //→-----------| включение/выклчение перетаскиваия на пк
            // touchRatio: 1, //→------------------| чувствительность свайпа
            // touchAngle: 45, //→----------------| угол сробатывание
            // grabCursor: true, // →--------------| курсор руки 
            // slideToClickedSlide: false, //→----- | переключение при клике на слайд 
            // autoHeight: false, //→--------------| автовысота слайдера
            slidesPerView: 1, //→---------------| колличество показаных слайдов можно указывать не целые числа
            slidesPerGroup: 1,//→--------------| Колличество пролистываемых слайдов
            watchOverFlow: true,//→---------- | Отключение функционала если слайдов меньше чем нужно
            spaceBetween: 50,//→------------- | Отступ между слайдами
            // centeredSlides: false,//→-----------| Активный слад по центру
            // slidesPerColumn: 2,//→-----------| Мультирядность
            speed: 300,//→--------------------- | скорость прокрутки слайдов
            // direction: 'vertical',//→------------- | оринтация сладера деф горизонтально
            // slideClass: 'products-slider__slide', //→ установит класс слайдера, и добавить его в CSS swiper
        /*----------------------------------------- */
            navigation: {// →--------------------- | Кнопки навигации
                nextEl: '.control-catalog__arrow_next',
                prevEl: '.control-catalog__arrow_prev'
            },
        /*----------------------------------------- */
            pagination: {  //→-----------------------| Навигация
                el: '.cotolog-pogination_header', 
                // type: 'bullets', //→ { 'bullets' , 'fraction' или 'progressbar' 'custom'}
                clickable: true,//→------------------- | переключение слайдев булетами
                // dynamicBullets: true,//→------------ | Динамические буллеты
                // dynamicMainBullets: 1,
                renderBullet: function (Index, className) { //→ Кастомные буллеты 
                    return `<span class="${className}">${Index+1}</span>`
                },
                // renderFraction: function (currentClass, totalClass) { //→Кастомные Фракции
                //     return `Хуй`
                // }
            },

        /*------------------------------------------
            scrollbar: {//→-------------------------- | скролл бар
                el: '.swiper-scrollbar',
                draggable: true,// →----------------| возможность перетаскивать скролл
            },
        */
        /* ----------------------------------------
            keyboard: {//→------------------------| управлеие Клавиотурой 
                enabled: true, //→------------------| включить/выключить
                onlyInViewpot: true, //→-----------| включить/выключить в приделах вьюпорта

                pageUpDown: false,//→----------- | включить/выключить уравление клафишами pageUp pageDown
            },
        */
        /* ----------------------------------------
            mousewheel: {//→--------------------| Управление колесом мыши 
                sensitivity: 1, //→-------------------|чувствительность
                eventTarget: '.class', //→-----------| класc объекта на котором будет сробатывать прокрутка мыши
            },
        */
        /*--------------------------------------
            autoplay: {//→-----------------------| автопрокрутков слайдов
                delay: 1000, //→------------------| пауза между прокруткой
                stopOnLastSlide: true,//→-------- | закончить на последнем слайде
                disableOnInteraction: false,//→---| отключать после ручного переключения
            },
        */
        /*--------------------------------------    */
            breakpoints: {// адаптив 
                320: {
                    pagination: {
                        type: 'fraction', //→ { 'bullets' , 'fraction' или 'progressbar' 'custom'}
                    },
                    updatePagination: (swiper) => {
                        swiper.pagination.render()
                        swiper.pagination.init()
                        swiper.pagination.update()
                        botBullets.update()
                    }
                },
                555: {
                    pagination: {
                        type: 'bullets', //→ { 'bullets' , 'fraction' или 'progressbar' 'custom'}
                    },
                    updatePagination: (swiper) => {
                        swiper.pagination.render()
                        swiper.pagination.init()
                        swiper.pagination.update()
                        topBullets.update(swiper.activeIndex, [...swiper.pagination.bullets])
                        botBullets.update()
                    }
                },
            },

            modules: [Navigation, Pagination],
        })

        const appBullets = (swiper) => {

            const renderbullets = (bullets = [...swiper.pagination.bullets]) => {

                const firstRenderBullets = (bulls = bullets) => {
                    if (bulls.length > 5) {
                        bulls.forEach((bullet, index) => {
                            bullet.classList.remove('_firstbullet')
                            bullet.style.removeProperty('display')
                            if (index > 4 && index < (bulls.length-1)) bullet.style.display = 'none'
                            if (index == 4 ) bullet.classList.add('_firstbullet')
                        })
                    }
                }; firstRenderBullets()
                return { 
                    bullets: bullets,
                    update: (namber, bullets = [...swiper.pagination.bullets]) => {
                        firstRenderBullets(bullets)
                        if (namber >= 4 && bullets.length > 5) {
                            bullets.forEach((bullet, index) => {
                                bullet.classList.remove('_firstbullet')
                                bullet.style.display = 'none'
                                if (namber >= bullets.length-4 && index >= bullets.length-5 ) {
                                    bullet.style.removeProperty('display')
                                    bullets[bullets.length-1].classList.remove('_lastbullet')
                                    return
                                }
                            })

                            bullets[bullets.length-1].style.removeProperty('display');
                            bullets[0].style.removeProperty('display');
                            bullets[0].classList.add('_firstbullet');
                            if (namber < bullets.length-4) {
                                bullets[bullets.length-1].classList.add('_lastbullet')
                            }
        
                            bullets[namber-1].style.removeProperty('display');
                            bullets[namber].style.removeProperty('display');
                            bullets[namber+1] && bullets[namber+1].style.removeProperty('display');
                        } else {
                            firstRenderBullets(bullets);
                        }
                    }
                }
            }

            const renderFooterPogination = (swiper) => {
                const footerPogination = document.querySelector('.cotolog-pogination_footer');
                const classList = [...swiper.pagination.el.classList];
        
                classList.forEach( (string, index) => {
                    if (index > 1) footerPogination.classList.add(string)
                })
        
                footerPogination.innerHTML = swiper.pagination.el.innerHTML
        
                return {
                    el: footerPogination,
                    update: () => {
                        footerPogination.innerHTML = swiper.pagination.el.innerHTML
                    }
                }
            }

            return {
                topBullets: renderbullets(),
                botBullets: renderFooterPogination(swiper),
            }
        }

        const { topBullets , botBullets } = appBullets(productCatalogSwiper);

        botBullets.el.addEventListener('click', (el) => {
            [...botBullets.el.children].forEach((element, index) => {
                if(el.target == element) {
                    productCatalogSwiper.slideTo(index, productCatalogSwiper.params.speed);
                }
            })
        })

        productCatalogSwiper.on('slideChange', (swiper) => {
            topBullets.update(swiper.activeIndex);
            botBullets.update();
        })

        productCatalogSwiper.on('breakpoint', (swiper, breakpointParams) => {
            breakpointParams.updatePagination(swiper);
        })
    }
}

export const brendsSwiper = () => {
    const brendsSwiper = new Swiper('.brends-slider__swiper', {
        loop: true, //→----------------------| зацикленность слайдера!
        simulateTouch: false, //→-----------| включение/выклчение перетаскиваия на пк
        // touchRatio: 1, //→------------------| чувствительность свайпа
        // touchAngle: 45, //→----------------| угол сробатывание
        // grabCursor: true, // →--------------| курсор руки 
        // slideToClickedSlide: false, //→----- | переключение при клике на слайд 
        // autoHeight: false, //→--------------| автовысота слайдера
        slidesPerView: 5, //→---------------| колличество показаных слайдов можно указывать не целые числа
        slidesPerGroup: 1,//→--------------| Колличество пролистываемых слайдов
        watchOverFlow: false,//→---------- | Отключение функционала если слайдов меньше чем нужно
        spaceBetween: 73,//→------------- | Отступ между слайдами
        // centeredSlides: false,//→-----------| Активный слад по центру
        // slidesPerColumn: 2,//→-----------| Мультирядность
        speed: 300,//→--------------------- | скорость прокрутки слайдов
        // direction: 'vertical',//→------------- | оринтация сладера деф горизонтально
        // slideClass: 'products-slider__slide', //→ установит класс слайдера, и добавить его в CSS swiper
    /*----------------------------------------- */
        navigation: {// →--------------------- | Кнопки навигации
            nextEl: '.brends-slider__arrow_next',
            prevEl: '.brends-slider__arrow_prev'
        },
    /*-----------------------------------------
        pagination: {  //→-----------------------| Навигация
            el: '.products-slider__info', 
            type: 'fraction', //→ { 'bullets' , 'fraction' или 'progressbar' 'custom'}
            // clickable: true,//→------------------- | переключение слайдев булетами
            // dynamicBullets: true,//→------------ | Динамические буллеты
            // renderBullet: function (Index, className) { //→ Кастомные буллеты 
            //     return `<span class="${className} dots-item">${Index+1}</span>`
            // },
            // renderFraction: function (currentClass, totalClass) { //→Кастомные Фракции
            //     return `Хуй`
            // }
        },
    */
    /*------------------------------------------
        scrollbar: {//→-------------------------- | скролл бар
            el: '.swiper-scrollbar',
            draggable: true,// →----------------| возможность перетаскивать скролл
        },
    */
    /* ----------------------------------------
        keyboard: {//→------------------------| управлеие Клавиотурой 
            enabled: true, //→------------------| включить/выключить
            onlyInViewpot: true, //→-----------| включить/выключить в приделах вьюпорта

            pageUpDown: false,//→----------- | включить/выключить уравление клафишами pageUp pageDown
        },
    */
    /* ----------------------------------------
        mousewheel: {//→--------------------| Управление колесом мыши 
            sensitivity: 1, //→-------------------|чувствительность
            eventTarget: '.class', //→-----------| класc объекта на котором будет сробатывать прокрутка мыши
        },
    */
    /*--------------------------------------
        autoplay: {//→-----------------------| автопрокрутков слайдов
            delay: 1000, //→------------------| пауза между прокруткой
            stopOnLastSlide: true,//→-------- | закончить на последнем слайде
            disableOnInteraction: false,//→---| отключать после ручного переключения
        },
    */
    /*--------------------------------------    */
        breakpoints: {// адаптив 
            320: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },

            640: {
                slidesPerView: 3,
            },

            992: {
                slidesPerView: 4,
            },

            1180: {
                slidesPerView: 5,
            }
        },

    modules: [Navigation, Pagination],
    })
}

export const gallerySwiper = () => {
    if (document.querySelector('.product-swiper') && document.querySelector('.product-subswiper')) {

        const gallerySubSwiper = new Swiper('.product-subswiper', {
            // loop: true, //→----------------------| зацикленность слайдера!
            spaceBetween: 10,//→------------- | Отступ между слайдами
            slidesPerView: 4,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            freeMode: false,
        })

        const gallerySwiper = new Swiper('.product-swiper', {
            modules: [Thumbs,],
            slidesPerView: 1,
            spaceBetween: 10,
            thumbs: {
                swiper: gallerySubSwiper,
            },
        })
    }
}