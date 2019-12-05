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
    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
    var clicked = false;
$('.navbar-toggler').on('click', function(){
    clicked == true;
    if(clicked==true){
        $('#navbar-brand-span').addClass('hide');
    }
    else {
        $('#navbar-brand-span').removeClass('hide');
    }
    //  $('#navbar-brand-span').toggle();
    // $('#navbar-brand-span').toggleClass('hide');
    $('.collapse').addClass('no-transition').collapse('toggle');
    //to hide logo when hamburger is clicked, still needs some tweaking
});
// $('.collapse').addClass('no-transition').collapse('toggle');

    //document.ready ends here
});