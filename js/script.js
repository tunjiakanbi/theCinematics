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
    //document.ready ends here
});