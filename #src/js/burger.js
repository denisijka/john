console.log('hello');
$(document).ready(function () {
    $('.menu__icon').click(function (event) {
        $('.menu__icon,.menu__body').toggleClass('_active');
        $('body').toggleClass('lock');
    });
});