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

    //fix navcar collapse
<<<<<<< HEAD
    $('.navbar-toggler').on('click', function () {
        $('.navbar-collapse').collapse('hide');
         $('.animated-icon').toggleClass('open');
    });
 
$('.navbar-toggler').on('click', function(){
    $('.collapse').addClass('no-transition').collapse('toggle');
    $('.animated-icon').toggleClass('open');
});
=======
$('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
        $('.animated-icon').toggleClass('open');
        $('#navbar-brand-span').toggleClass('hide');
    });

    $('.navbar-toggler').on('click', function () {
        $('#navbar-brand-span').toggleClass('hide');
        $('.collapse').addClass('no-transition').collapse('toggle');
        $('.animated-icon').toggleClass('open');
    });


>>>>>>> master
    //document.ready ends here
});