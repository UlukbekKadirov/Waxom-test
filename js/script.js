$(document).ready(function () {
    $('.burger').on('click',function(){
        $('.menu').toggle('active');
    });
})
$( document ).ready(function() {
    $('.slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $('.popup').magnificPopup();
});
