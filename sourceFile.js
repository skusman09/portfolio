$(window).on('resize reload load', function () {

    if ($(window).innerWidth() <= 360) {

        $('.changed').each(function (index, element) {
            let height = $(element).data('resize-height'), width = $(element).data('resize-width'), x = $(element).data('move-x'), y = $(element).data('move-y');
            $(element).css('height', `auto`);
            if (width) $(element).css('width', `100%`);
            if (x && y) $(element).css('transform', `translate(0px, 0px)`);

        });
    }

    else if ($(window).innerWidth() <= 770) {
        // console.log("Hello Tablet");

        $('.changed').each(function (index, element) {
            let height = $(element).data('resize-height'), width = $(element).data('resize-width'), x = $(element).data('move-x'), y = $(element).data('move-y');
            $(element).css('height', `auto`);

            if (width) {
                if ($(window).innerWidth() <= width) $(element).css('width', `100%`);
                else $(element).css('width', `${width}px`);
            }

            if (x && y) $(element).css('transform', `translate(0px, 0px)`);

        });
    }

    else {

        $('.changed').each(function (index, element) {
            let height = $(element).data('resize-height'), width = $(element).data('resize-width'), x = $(element).data('move-x'), y = $(element).data('move-y');
            if (height) $(element).css('height', `${height}px`);
            if (width) $(element).css('width', `${width}px`);
            if (x && y) $(element).css('transform', `translate(${x}px, ${y}px)`);
        });
    }
});

$(document).on('load reload', function () {
    $.getScript("https://cdnjs.cloudflare.com/ajax/libs/jquery.lazy/1.7.10/jquery.lazy.min.js", function () {
        $.getScript("https://cdnjs.cloudflare.com/ajax/libs/jquery.lazy/1.7.10/jquery.lazy.plugins.min.js", function () {
            $('img').lazy();
        });
    });
});

$(document).on('change load reload', function () {
    $("*[class*='animate__']").addClass('wow');
});

(($) => {

    // Include Stylesheets
    $('head').append($('<link rel="stylesheet" type="text/css" />').attr('href', 'https://startbootstrap.github.io/startbootstrap-landing-page/vendor/simple-line-icons/css/simple-line-icons.css'));

    $('.full-year').html(new Date().getFullYear());

    $("body").scrollspy({
        target: "#sideNav",
    });

    $(".js-scroll-trigger").click(function () {
        $(".sidebar").collapse("hide");
    });


    $.getScript("https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll/dist/smooth-scroll.polyfills.min.js", function () {
        const scroll = new SmoothScroll('a[href*="#"]');
    });

    $("form").submit(function (eventObj) {
        let uemail = $('meta[name="author_email"]').attr('content');
        $("<input />").attr("type", "hidden").attr("name", "user_email").attr("value", uemail).appendTo(this);
        return true;
    });

})(jQuery);
