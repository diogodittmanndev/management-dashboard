// Function that when clicking on the menu hides and makes the submenu visible
$(document).ready(function(){
    $('.s-menu__btn').click(function(){
        $(this).next('.s-submenu').slideToggle();
        $(this).find('.dropdown').toggleClass('rotate');
    });
});

// Function for close and open sidebar
$('.sidebar__menu-btn').click(function(){
    $('.sidebar').addClass('active');
    // $('.sidebar__menu-btn').css("visibility", "hidden");
})

$('.sidebar__close-btn').click(function(){
    $('.sidebar').removeClass('active');
    // $('.sidebar__menu-btn').css("visibility", "hidden");
})

// Function to adjust main content
$('.sidebar__menu-btn').click(function(){
    $('.main').addClass('active');
    // $('.sidebar__menu-btn').css("visibility", "hidden");
})

$('.sidebar__close-btn').click(function(){
    $('main').removeClass('active');
    // $('.sidebar__menu-btn').css("visibility", "hidden");
})