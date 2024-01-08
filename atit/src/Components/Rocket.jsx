import React, { useState, useEffect } from 'react';
export default function Rocket() {
    console.log("rocket")
    const [rocketClicked, setRocketClicked] = useState(false);

    useEffect(() => {
        const handleRocketClick = () => {
            console.log("click rocket")
            if (rocketClicked) {
                return; // Ignore clicks while the animation is running
            }
            setRocketClicked(true);

            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        };

        const handleScroll = () => {
            if (window.scrollY > window.innerHeight / 2) {
                document.getElementById('rocket-container').style.display = 'block';
            } else {
                document.getElementById('rocket-container').style.display = 'none';
            }
        };

        const rocketContainer = document.getElementById('rocket-container');

        if (rocketContainer) {
            rocketContainer.addEventListener('click', handleRocketClick);
            window.addEventListener('scroll', handleScroll);

        }
        return () => {
            // Cleanup event listeners when component unmounts
            if (rocketContainer) {
              rocketContainer.removeEventListener('click', handleRocketClick);
              window.removeEventListener('scroll', handleScroll);
            }
          };
        }, [rocketClicked]);
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
