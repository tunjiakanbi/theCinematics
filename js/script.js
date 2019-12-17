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
         $('.animated-icon').toggleClass('open');
         $('#navbar-brand-span').toggleClass('hide');
    });
 
 $('.navbar-toggler').on('click', function(){
    $('#navbar-brand-span').toggleClass('hide');
    $('.collapse').addClass('no-transition').collapse('toggle');
    $('.animated-icon').toggleClass('open');
 });
 //*************************about section animation starts here*********************////////
 var controller= new ScrollMagic.Controller();
    var scene= new ScrollMagic.Scene({
      triggerElement:'.thecinematics'
    })
    .setClassToggle('.thecinematics','show')
    .addTo(controller)


 var controller1= new ScrollMagic.Controller();
    var scene1= new ScrollMagic.Scene({
      triggerElement:'.col-12 p'
    })
    .setClassToggle('.col-12 p','show')
    .addTo(controller1)

    var controller2= new ScrollMagic.Controller();
    var scene2= new ScrollMagic.Scene({
      triggerElement:'#mybios'
    })
    .setClassToggle('#mybios','show')
    .addTo(controller2)

 //***********************About section animation ends here*************************** */



    //document.ready ends here
});