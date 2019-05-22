$(document).ready(function () {
    $('#slides').superslides({
        animation: 'fade',
        play: 2000,
        animation_speed: 'normal',
        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: ["Web developer", "Learner"],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    })

    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 4,
        responsive: {
            0: {
                items: 2
            },
            360: {
                items: 4
            },
            // 768: {
            //     items: 3
            // },
            // 938: {
            //     items: 3
            // }
        }
    })

    $('.chart').easyPieChart({
        //your options goes here
        easing: 'easeInOut',
        barColor: '#fff',
        trackColor: false,
        scaleColor: false,
        lineWidth: 3,
        size: 152,
        onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent))
        }
    });

});