import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery

export default function Rocket() {
    useEffect(() => {
        $(document).ready(function () {
            var rocketClicked = false;

            $('#rocket-container').click(function () {
                if (rocketClicked) {
                    return; // Ignore clicks while the animation is running
                }
                rocketClicked = true;

                $('html, body').stop().animate({ scrollTop: 0 }, 'fast', function () {
                    var rocket = $('#rocket-container');
                    rocket.stop().animate({
                        'bottom': $(window).height() + 'px', // Fix syntax and use jQuery for window height
                    }, {
                        duration: 1200,
                        step: function (now, fx) {
                            if (fx.prop === 'bottom' && now > $(window).height()) {
                                rocket.show();
                            }
                        },
                        complete: function () {
                            rocket.css({
                                'bottom': '10px',
                                'transform': 'translate(0)',
                                'display': 'none'
                            });

                            rocketClicked = false;
                        }
                    });
                });
            });
        });

        $(window).scroll(function () {
            if ($(this).scrollTop() > $(window).height() / 2) {
                $('#rocket-container').css('display', 'block');
            }
        });
    }, [])

    return (
        <div>
            <div id="rocket-container" className="cursor" data-aos="zoom-in">
                <dotlottie-player
                    src="https://lottie.host/a3930b1d-eaf8-4fc4-a6b4-7ba7c5654523/tqWYmbEE3y.json"
                    background="transparent"
                    speed="1"
                    id="rocket"
                    loop
                    autoplay
                ></dotlottie-player>
            </div>
        </div>
    );
}
