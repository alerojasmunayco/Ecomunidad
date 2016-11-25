var heightWindow;
var url;

$(document).ready(function () {

    var windowHeight = $(window).height() - 180;
    var href = "";
    var currentNav = "";
    url = document.location.toString();
    heightWindow = $(window).height();


    $(".nav > li > a").click(function (e) {
        var href = $(this).attr("href");

        if (href != "#") {
            return scrollAnimate(href);
        }
    });


    function scrollAnimate(href) {
        var element = $(href);
        if (element.length > 0) {
            var position = element.offset().top - 70;


            $("html, body").animate({
                scrollTop: position
            }, 700);

            if ($(window).width() < 616) {
                $('.navbar-collapse').animate({
                    height: '1px'
                }, 'fast', function () {
                    $(this).removeClass('in');
                });
            }

            return false;
        } else {
            location.href = "/" + href;
        }
    }
    $(window).scroll(function () {
        for (var i = 5; i >= 0; i--) {
            href = $(".navbar-nav > li:eq(" + i + ") > a").attr("href");

            if ($(this).scrollTop() >= $(href).offset().top - 90) {
                $(".navbar-nav > li > a").removeClass("navColor");
                $(".navbar-nav > li:eq(" + i + ") > a").addClass("navColor");
                break;
            }
        }
    });


});
$(document).ready(function () {

    $('.carousel-container').each(function (index, element) {
        var carouselLine = $(element).find('.carousel-line');
        var carouselLargeLine = $(element).find('.carousel-large-line');
        var carouselLargeLineItems = carouselLargeLine.find(".box-customize");
        var stopCar = carouselLine.width();
        var carouselLargeLineItemWidth = carouselLargeLine.find('.box-customize').outerWidth(true);
        var lArrow = $(element).find(".l-arrow");
        var rArrow = $(element).find(".r-arrow");
        var pushLeft = 0;

        if (carouselLine.length > 0) {
            carouselLargeLine.width(carouselLargeLineItems.length * carouselLargeLineItems.outerWidth(true));

            lArrow.click(function (e) {
                e.preventDefault();

                if (!carouselLargeLine.is(':animated')) {
                    if (carouselLargeLine.position().left < 0) {
                        carouselLargeLine.animate({
                            left: "+=" + carouselLargeLineItemWidth + "px"
                        }, 500);
                    } else {
                        carouselLargeLine.css('left', -(carouselLargeLineItemWidth));
                        carouselLargeLine.find('.box-customize:last').prependTo(carouselLargeLine);
                        carouselLargeLine.animate({
                            left: "+=" + carouselLargeLineItemWidth + "px"
                        });
                    }
                }
            });

            rArrow.click(function (e) {
                e.preventDefault();

                var posLeft = (carouselLargeLine.outerWidth() - (carouselLargeLine.position().left * -1));

                if (!carouselLargeLine.is(':animated')) {
                    pushLeft = ((posLeft - stopCar) > carouselLargeLineItemWidth) ? carouselLargeLineItemWidth : (posLeft - stopCar);

                    console.log(pushLeft + " - " + carouselLargeLineItemWidth);
                    if (pushLeft >= carouselLargeLineItemWidth) {
                        console.log("bien");
                        carouselLargeLine.animate({
                            left: "-=" + carouselLargeLineItemWidth + "px"
                        });
                    } else {
                        console.log("mal");
                        carouselLargeLine.css('left', "+=" + (carouselLargeLineItemWidth) + "px");
                        carouselLargeLine.find('.box-customize:first').appendTo(carouselLargeLine);
                        carouselLargeLine.animate({
                            left: "-=" + carouselLargeLineItemWidth + "px"
                        });
                    }
                }
            });

            if ($(element).attr("id") == "carouselblog") {
                setInterval(runSlideToRight, 7000);
            }
            $('#myCarousel').carousel({
                interval: 7000,
                cycle: true
            });
        }

        function runSlideToRight() {
            var posLeft = (carouselLargeLine.outerWidth() - (carouselLargeLine.position().left * -1));

            if (!carouselLargeLine.is(':animated')) {
                pushLeft = ((posLeft - stopCar) > carouselLargeLineItemWidth) ? carouselLargeLineItemWidth : (posLeft - stopCar);

                console.log(pushLeft + " - " + carouselLargeLineItemWidth);
                if (pushLeft >= carouselLargeLineItemWidth) {
                    console.log("bien");
                    carouselLargeLine.animate({
                        left: "-=" + carouselLargeLineItemWidth + "px"
                    });
                } else {
                    console.log("mal");
                    carouselLargeLine.css('left', "+=" + (carouselLargeLineItemWidth) + "px");
                    carouselLargeLine.find('.box-customize:first').appendTo(carouselLargeLine);
                    carouselLargeLine.animate({
                        left: "-=" + carouselLargeLineItemWidth + "px"
                    });
                }
            }
        }
    });


});