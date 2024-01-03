AOS.init();

$(document).ready(function () {
    var rocketClicked = false;

    $('#rocket-container').click(function () {
        
        if (rocketClicked) {
            return; // Ignore clicks while the animation is running
        }
        rocketClicked = true; // Set the flag to true to prevent additional clicks

        $('html, body').stop().animate({ scrollTop: 0 }, 'fast', function () {
            var rocket = $('#rocket-container');
            rocket.stop().animate({
                'bottom': `${$(window).height()}px`, // Move the rocket to the top of the screen
            }, {
                duration: 1200,
                step: function (now, fx) {
                    if (fx.prop === 'bottom' && now > $(window).height()) {
                        rocket.show();
                    }
                },
                complete: function () {
                    // Reset the rocket to its default position
                    rocket.css({
                        'bottom': '10px',
                        'transform': 'translate(0)',
                        'display':'none'
                    });

                    // Re-enable the click event
                    rocketClicked = false;
                }
            });
        });
    });
});

$(window).scroll(function() {
    if ($(this).scrollTop() > $(window).height()/2) {
        $('#rocket-container').css('display', 'block');
    }
});





var mbnew = $('.card-img-overlay').height() + 100;

$('.hero-banner').css("margin-bottom", mbnew, '+px')

$(document).ready(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() >= 100) {
            $('.nav-holder').addClass('nav-animate');
            if ($(this).scrollTop() > 500) {
                $('.nav-holder').addClass('nav-fixed');
            }
        }
        else {
            // Scrolling up
            $('.nav-holder').removeClass('nav-animate nav-fixed');
        }
    });
});

new FinisherHeader({
    "count": 13,
    "size": {
        "min": 2,
        "max": 10,
        "pulse": 0
    },
    "speed": {
        "x": {
            "min": 0,
            "max": 0.8
        },
        "y": {
            "min": 0,
            "max": 0.2
        }
    },
    "colors": {
        "background": "#15182e",
        "particles": [
            "#ff926b",
            "#87ddfe",
            "#acaaff",
            "#1bffc2",
            "#f9a5fe"
        ]
    },
    "blending": "screen",
    "opacity": {
        "center": 1,
        "edge": 1
    },
    "skew": -0.5,
    "shapes": [
        "c"
    ]
});


// side bar script

$(document).ready(function () {
    function startAnimation() {
        // Remove the animation class to reset the animation
        $('.cloud').addClass('animated-element');

        // Add the animation class after a delay of 5 seconds
        setTimeout(function () {
            $('.cloud').removeClass('animated-element');
        }, 5000);
    }

    // Set up a loop to restart the animation every 30 seconds
    setInterval(startAnimation, 30000);

    setTimeout($('.cloud').addClass('animated-element'), 5000)
    setTimeout($('.cloud').removeClass('animated-element'), 10000)
});

$(document).ready(function () {

    setTimeout(function () {
        $('.popup').removeClass('pop-ani');
    }, 2000);


    setInterval(function () {
        $('.popup').addClass('pop-ani');
    }, 5000);

    setInterval(function () {
        $('.popup').removeClass('pop-ani');
    }, 10000);

});


$('.course .tab-pane .card').attr({
    'data-aos': 'fade-up',
    'data-aos-duration': '600'
});

$(document).ready(function () {
    $('.nav-link').on('click', function () {
        // Remove the 'show' class from all tab contents
        $('.tab-pane').removeClass('show');

        // Add the 'show' class to the selected tab content
        var targetId = $(this).data('bs-target').substring(1);
        $(targetId).addClass('data-aos');
    });
});
$('.nav-pills .nav-link').click(function () {
    AOS.refresh();
});

var continueTimeouts = true; 
var timeouts = [];
function openAccordionsOneByOne() {
  var accordionButtons = document.querySelectorAll('.accordion-button');
  accordionButtons.forEach(function (button, index) {
    var timeout = setTimeout(function () {
      if (continueTimeouts) {
        button.click();
      }
    }, index * 3000);

    timeouts.push(timeout);

    button.addEventListener('mousedown', function (event) {
      if (event.button === 0) {
        continueTimeouts = false;
        clearTimeouts();
      }
    });
  });
}
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}
function handleScroll() {
  var section = document.getElementById('placement-accordion');
  if (isElementInViewport(section)) {
    openAccordionsOneByOne();
    window.removeEventListener('scroll', handleScroll);
  }
}
function clearTimeouts() {
  timeouts.forEach(function (timeout) {
    clearTimeout(timeout);
  });
  timeouts = [];
}
window.addEventListener('scroll', handleScroll);



$(".atit-card-1").hover(function () {
    // Mouseenter event
    $(".atit-card-1").removeClass('active');
    $(this).addClass('active');
});



let getCourseList = sessionStorage.getItem('cousrelist');
if (getCourseList == 1) {
    $('.course #pills-tab  button.nav-link').removeClass('active')
    $('.course #pills-tab > div:nth-child(2) button.nav-link').addClass('active')
    $('.course .tab-content .tab-pane').removeClass('active')
    $('.course .tab-content #pills-Testing').addClass('active')
} else if (getCourseList == 2) {
    $('.course #pills-tab  button.nav-link').removeClass('active')
    $('.course #pills-tab > div:nth-child(3) button.nav-link').addClass('active')
    $('.course .tab-content .tab-pane').removeClass('active')
    $('.course .tab-content #pills-Development').addClass('active')
} else if (getCourseList == 3) {
    $('.course #pills-tab  button.nav-link').removeClass('active')
    $('.course #pills-tab > div:nth-child(4) button.nav-link').addClass('active')
    $('.course .tab-content .tab-pane').removeClass('active')
    $('.course .tab-content #pills-Devops').addClass('active')
} else if (getCourseList == 4) {
    $('.course #pills-tab  button.nav-link').removeClass('active')
    $('.course #pills-tab > div:nth-child(5) button.nav-link').addClass('active')
    $('.course .tab-content .tab-pane').removeClass('active')
    $('.course .tab-content #pills-science').addClass('active')
} else {
    $('.course #pills-tab  button.nav-link').removeClass('active')
    $('.course #pills-tab > div:nth-child(1) button.nav-link').addClass('active')
    $('.course .tab-content .tab-pane').removeClass('active')
    $('.course .tab-content .tab-pane:nth-child(1)').addClass('active')
} 