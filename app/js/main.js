$(document).ready(function() {

    var
        toggleDown = $('.header__toggle-down, .menu-mobile__toggle-down'),
        menuChoice = $('.header__choice-menu, .menu-mobile__choice-menu');
        menuChoiceCurrency = $(".header__choice-menu[data-menu='currency'], .menu-mobile__choice-menu[data-menu='currency']"),
        menuChoiceLanguage = $(".header__choice-menu[data-menu='lang'], .menu-mobile__choice-menu[data-menu='lang']"),
        menuChoiceToggle = 'header__choice-menu--js, menu-mobile__choice-menu--js',
        itemDefaultCurrency = $('.header__choice--currency, .menu-mobile__choice--currency'),
        itemDefaultLanguage = $('.header__choice--language, .menu-mobile__choice--language'),
        itemChosen = $('.header__choice, .menu-mobile__choice'),
        menuClose = $('.header__close-icon, .menu-mobile__close-icon'),
        toggleSearch = $('.header__search-icon, .menu-mobile__search-icon'),
        searchClose = 'header__search-icon--close, menu-mobile__search-icon--close',
        formSearch = $('.header__search-field, .menu-mobile__search-field'),
        searchSubmit = $('.header__search-submit, .menu-mobile__search-submit'),
        searchSubmitToggle = 'header__search-submit--active, menu-mobile__search-submit--active',
        burgerToggle = $('.burger'),
        burgerActive = 'burger--active',
        modal = $('.modal'),
        modalOpen = 'modal--open',
        catalogItem = $('.catalog__item'),
        itemCurrent = 'catalog__item--current',
        left = $('.catalog__control--left'),
        right = $('.catalog__control--right'),
        catalog = $('.catalog_gallery'),
        currentSlide = $('.catalog__item--current').index();


    toggleDown.click(function(event) {

        if ($(event.target).is("[data-menu='currency']")) {
            menuChoiceCurrency.addClass(menuChoiceToggle);

            itemChosen.click(function(event) {
                itemDefaultCurrency.text($(event.target).attr('data-currency'));
                menuChoiceCurrency.removeClass(menuChoiceToggle);
            });

            menuClose.click(function(event) {
                if ($(event.target).is("[data-menu='currency']")) {
                    menuChoiceCurrency.removeClass(menuChoiceToggle);
                }
            });

        } else {

            menuChoiceLanguage.addClass(menuChoiceToggle);

            itemChosen.click(function(event) {
                itemDefaultLanguage.text($(event.target).attr('data-lang'));
                menuChoiceLanguage.removeClass(menuChoiceToggle);
            });
        }

        menuClose.click(function(event) {
            if ($(event.target).is("[data-menu='lang']")) {
                menuChoiceLanguage.removeClass(menuChoiceToggle);
            }
        });

    });

    toggleSearch.click(function() {
        formSearch.focus();
        toggleSearch.addClass(searchClose) && searchSubmit.addClass(searchSubmitToggle);
    });


    burgerToggle.click(function() {

        $(this).toggleClass(burgerActive) && modal.toggleClass(modalOpen);

    });

    right.click(function() {
        moveRight.movebackward();
    });


    moveRight = {

        movebackward: function() {
            if (currentSlide < 7) {

                catalogItem.eq(currentSlide).removeClass(itemCurrent).next().addClass(itemCurrent);
                currentSlide++;
            } else {
                moveLeft();
            }
        }

    }

    left.click(function() {
        moveLeft();
    });

    function moveLeft() {
        if (currentSlide >= 1) {

            catalogItem.eq(currentSlide).removeClass(itemCurrent).prev().addClass(itemCurrent);
            currentSlide--;

        } else {
            catalogItem.first().addClass(itemCurrent);
            moveRight.movebackward();
        }

    };


});