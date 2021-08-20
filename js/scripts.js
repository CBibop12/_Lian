$(document).ready(function(){

    $(".fa-search").click(function(){
        $(".wrap, .input").toggleClass("active");
        $("input[type='text']").focus();
    });

});
$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
});
$('.slider').owlCarousel({
    nav : true,
    pagination : true
});

$(document).ready(function(){

    $(".logo, .pages_h3").click(function(){
        $(".all, .branding").toggleClass("active");
    });
});