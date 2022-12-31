// Function that when clicking on the menu hides and makes the submenu visible
$(document).ready(function(){
    $('.s-menu__btn').click(function(){
        $(this).next('.s-submenu').slideToggle();
        $(this).find('.dropdown').toggleClass('rotate');
    });
});