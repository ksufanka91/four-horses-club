(function () {
    // подключение слайдера
    new Swiper('.participant__slider', {
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: true,
        },
        navigation: {
            prevEl: '.participant .slider-arrow_prev',
            nextEl: '.participant .slider-arrow_next',
        },
        pagination: {
            el: '.participant__pagination',
            type: 'fraction',
        },
        breakpoints: {
            320: {
                autoHeight: false,
                slidesPerView: 1,
                spaceBetween: 10,
            },
            768: {
                autoHeight: false,
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1200: {
                autoHeight: false,
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });

    // todo тут по хорошему надо отслеживать ресайз окна и делать инициализацию слайдера для мобилы,
    //      в задании это не уточнялось, оставила так
    if (window.innerWidth < 1024) {
        new Swiper('.steps__slider', {
            navigation: {
                prevEl: '.steps .slider-arrow_prev',
                nextEl: '.steps .slider-arrow_next',
            },
            pagination: {
                el: '.steps__pagination',
            },
            breakpoints: {
                430: {
                    autoHeight: false,
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                768: {
                    autoHeight: false,
                    slidesPerView: 1,
                    spaceBetween: 20,
                }
            },
        });
    }

    // бегущая строка
    function marquee(selector, speed) {
        const parents = document.querySelectorAll(selector);

        parents.forEach(function (parent) {
            const clone = parent.innerHTML;
            const firstElement = parent.children[0];
            let i = 0;

            parent.insertAdjacentHTML('beforeend', clone);
            parent.insertAdjacentHTML('beforeend', clone);

            setInterval(function () {
                firstElement.style.marginLeft = `-${i}px`;
                if (i > firstElement.clientWidth) {
                    i = 0;
                }
                i = i + speed;
            }, 0);
        });
    }

    window.addEventListener('load', function () {
        marquee('.marquee', 0.2);
    })
})();
