$(document).ready(function () {

    $('.carousel').carousel({
        interval: 1500,
        pause: "hover"
    });

    //Int scrollspy
    $("body").scrollspy({
        target: "#navigation"
    });

    $("#navigation a").on("click", function (e) {
        if (this.hash !== "") {
            e.preventDefault();

            const hash = this.hash;

            $("html, body").animate({
                    scrollTop: $(hash).offset().top
                },
                800,
                function () {
                    window.location.hash = hash;
                });
        }
    });
    var winWidth = $(window).width();
    console.log(winWidth);
    //fix navcar collapse
    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
         $('.animated-icon').removeClass('open');
         $('#navbar-brand-span').removeClass('hide');
    });
 
$('.navbar-toggler').on('click', function(){
    $('#navbar-brand-span').toggleClass('hide');
    $('.collapse').addClass('no-transition').collapse('toggle');
    $('.animated-icon').toggleClass('open');
});
$(window).resize(function(){
    $('.animated-icon').removeClass('open');
    $('#navbar-brand-span').removeClass('hide');
    $('.navbar-collapse').collapse('hide'); 
})
    //document.ready ends here
});