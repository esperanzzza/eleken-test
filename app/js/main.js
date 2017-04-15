$(document).ready(function() {

    var
        toggleDown = $('.header__toggle-down'),
        menuChoice = $('.header__choice-menu');
        menuChoiceCurrency = $(".header__choice-menu[data-menu='currency']"),
        menuChoiceLanguage = $(".header__choice-menu[data-menu='lang']"),
        menuChoiceToggle = 'header__choice-menu--js',
        itemDefaultCurrency = $('.header__choice--currency'),
        itemDefaultLanguage = $('.header__choice--language'),
        itemChosen = $('.header__choice'),
        toggleSearch = $('.header__search-icon'),
        formSearch = $('.header__search-field'),
        formHide = 'header__right-row--js',
        formShow = 'header__right-row--js';

    toggleDown.click(function(event) {
        if ($(event.target).is("[data-menu='currency']")) {
            menuChoiceCurrency.addClass(menuChoiceToggle);

            itemChosen.click(function(event) {
                itemDefaultCurrency.text($(event.target).attr('data-currency'));
                menuChoice.removeClass(menuChoiceToggle);
            });

        } else {

            menuChoiceLanguage.addClass(menuChoiceToggle);

            itemChosen.click(function(event) {
                itemDefaultLanguage.text($(event.target).attr('data-lang'));
                menuChoice.removeClass(menuChoiceToggle);
            });
        }

    });

    toggleSearch.click(function() {
        formSearch.focus();


});

});