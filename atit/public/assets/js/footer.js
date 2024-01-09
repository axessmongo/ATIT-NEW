document.addEventListener("DOMContentLoaded", function () {
    // Your footer HTML code
    var footerCode = `
    <footer id="footer" className ="footer pt-5 pb-3 ">


    <div className ="container">
        <div className ="position-relative d-none d-lg-block">
             <div className ="comet row ">
                <div className =" col-lg-3"><div className =""></div></div>
                 <div className =" col-lg-3 cometlines"><div className ="cometline"></div></div>
                 <div className =" col-lg-3 cometlines"><div className ="cometline"></div></div>
                 <div className =" col-lg-3 cometlines"><div className ="cometline"></div></div>           
            </div>
        </div>
        
        <div className ="lines d-lg-none">   
            <div className ="line"></div>
            <div className ="line"></div>
            <div className ="line"></div>

        </div>

        <div className ="row gy-3 mt-3">
            
            <div className ="col-lg-3 col-md-6 d-flex address" data-aos="fade-up" data-aos-duration="700">
           <i className ="bi bi-geo-alt icon"></i>
                <div>
                    <h4>Address</h4>
                    <p>
                    <a href="https://maps.app.goo.gl/Cx14du1boxQ4R8MY9" target="_blank" className ="map text-decoration-none">
                        Tidel Park, GF-04,<br>
                        No-4, Rajiv Gandhi Salai,<br>
                        Taramani,<br>
                        Chennai - 600113.<br>
                        </a>
                    </p>
                </div>

            </div>

            <div className ="col-lg-3 col-md-6 footer-links d-flex" data-aos="fade-up" data-aos-duration="800">
                <i className ="bi bi-telephone icon"></i>
                <div>
                    <h4>Connect</h4>
                    <p>
                        <strong>Phone:</strong><a href="tel:7845721438">78457 21438</a>
                        <br>
                        <strong>Phone:</strong> <a href="tel:7358107180">73581 07180</a>
                        <br>
                        <strong>Email:</strong><a href="mailto:info@turn-ai.in">info@turn-ai.in</a><br>
                    </p>
                </div>
            </div>

            <div className ="col-lg-3 col-md-6 footer-links d-flex" data-aos="fade-up" data-aos-duration="900">
                <i className ="bi bi-book-half icon"></i>
                <div className ="text-decoration-none">
                    <h4>Courses</h4>
                    <div className ="text-decoration-none courses-links">
                        <a href="courses.html" onclick="sessionStorage.setItem('cousrelist', '2')" className ="text-decoration-none"><strong>Software Developement</strong></a>
                        <br>
                        <a href="courses.html" onclick="sessionStorage.setItem('cousrelist', '1')" className ="text-decoration-none"><strong>Software Testing</strong></a>
                        <br>
                        <a href="courses.html" onclick="sessionStorage.setItem('cousrelist', '3')" className ="text-decoration-none"><strong>Devops</strong></a>
                        <br>
                        <a href="courses.html" onclick="sessionStorage.setItem('cousrelist', '4')" className ="text-decoration-none"><strong>Machine Learning & AI</strong></a>
                    </div>
                </div>
            </div>

            <div className ="col-lg-3 col-md-6 footer-links " data-aos="fade-up" data-aos-duration="1000">
                <h4 className ="text-center text-md-start">Follow Us</h4>
                <div className ="social-links d-flex justify-content-center justify-content-md-start">
                    <!-- <a href="#" className ="twitter"><i className ="bi bi-twitter"></i></a> -->
                    <a href="https://www.facebook.com/atitchennai/" target="_blank" className ="facebook"><i className ="bi bi-facebook"></i></a>
                    <a href="https://www.instagram.com/atitchennai/" target="_blank" className ="instagram"><i className ="bi bi-instagram"></i></a>
                    <a href=" https://www.youtube.com/@ATITchennai" target="_blank" className ="youtube"><i className ="bi bi-youtube"></i></a>
                    <!-- <a href="#" className ="linkedin"><i className ="bi bi-linkedin"></i></a> -->
                </div>
            </div>

        </div>
    </div>
    <div className ="container">
        <div className ="copyright">
            Copyrights  &copy; <strong><span>ATIT. </span></strong>All Rights Reserved. <a href="./privacy-policy.html" className = "d-block d-md-inline position-relative">Privacy policy</a>
        </div>

    </div>


</footer>
    `;

    var footerElement = document.getElementById("footerElement");
    if (footerElement) {
        footerElement.innerHTML = footerCode;
        AOS.init();
    }
});


$(document).ready(function () {
    // Change the href to a new value
    // $("footer .courses-links a").attr("href", "one");
    var link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'icon';
    link.href = './assets/imagesandvectors/vectors/logo.png'; 
    
    if ($('.coursesList').length > 0) {      
        $('footer .courses-links a').attr('href', '../../courses.html');
        $('.copyright a').attr('href', '../../privacy-policy.html');
             link.href = '../../assets/imagesandvectors/vectors/logo.png';
    }
    else if ($('.individualBlogs').length > 0) {
        $('footer .courses-links a').attr('href', '../courses.html');
        $('.copyright a').attr('href', '../privacy-policy.html');
             link.href = '../assets/imagesandvectors/vectors/logo.png'; 
        }
    document.head.appendChild(link);
});

