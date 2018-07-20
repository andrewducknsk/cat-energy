(function () {
    var menu = document.querySelector('.menu'),
        menuBtn = document.querySelector('.menu__btn');

    menu.classList.remove('menu--no-js');
    menu.classList.add('menu--closed');

    menuBtn.addEventListener('click', function () {
        if (menu.classList.contains('menu--closed')) {
            menu.classList.remove('menu--closed');
        } else {
            menu.classList.add('menu--closed');
        }
    });
}());

(function () {
    var pageHeader = document.querySelector('.page-header'),
        currentPage = document.location.pathname,
        companyContact = document.querySelector('.contact'),
        indexPageLink = document.querySelector('.menu__link--index'),
        catalogPageLink = document.querySelector('.menu__link--catalog'),
        formPageLink = document.querySelector('.menu__link--form');

    pageHeaderWidth = pageHeader.offsetWidth;

    if (currentPage === '/index.html' || currentPage === '/') {
        companyContact.classList.remove('contact--grey');
        indexPageLink.classList.add('menu__link--active-green');
        if (pageHeaderWidth >= 1300) {
            indexPageLink.classList.add('menu__link--active-white');
        }
    } else if (currentPage === '/catalog.html') {
        catalogPageLink.classList.add('menu__link--active-green');
    } else if (currentPage === '/form.html') {
        formPageLink.classList.add('menu__link--active-green');
    }
}());

(function () {
    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [59.938696, 30.323060],
                zoom: 17,
                controls: ['fullscreenControl', 'geolocationControl', 'trafficControl', 'zoomControl', 'typeSelector']
            }, {
                searchControlProvider: 'yandex#search'
            }),


            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                balloonContent: '<b>HTML Academy</b>'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'img/index/map-pin.png',
                // Размеры метки.
                iconImageSize: [55, 53],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-24, -50]
            });

        myMap.behaviors.disable('scrollZoom');
        myMap.behaviors.disable('drag');
        myMap.geoObjects.add(myPlacemark);

    });
}());