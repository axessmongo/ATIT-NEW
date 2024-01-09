// HTML code to insert after the existing div
var htmlCode = `
<div id="rocket-container" className ="cursor" data-aos="zoom-in">
<img src="../../assets/img/rocket.gif" height="120px" alt="">
</div>

<div
className ="position-fixed z-3 bottom-0 d-flex align-items-center flex-column justify-content-center overflow-visible">

<div className ="h-250px">
    <div className =" bell d-none overflow-visible position-relative" data-aos="fade-right" data-aos-duration="1000">
        <dotlottie-player src="https://lottie.host/7eea6db9-f536-4f25-9f36-55e284faf207/afUTIVqW70.json"
            background="transparent" speed="1" style="width: 90px;" loop autoplay></dotlottie-player>
        <span className ="position-absolute top-0 start-50 d-none translate-middle badge rounded-pill bg-danger">
            New
        </span>
        <div className ="cloud">
            <a href="pay-after-placement.html"
                className ="shadow1 cloud-text primary-text py-3 py-1 rounded-3 text-decoration-none d-block text-light">
                Pay After Placement
                <i className ="fa-solid fa-caret-left"></i>
            </a>
        </div>
    </div>
    <a href="pay-after-placement.html" className ="popup pop-ani text-decoration-none">
        <span>P</span>
        <span>a</span>
        <span>y</span>
        <span> </span>
        <span>A</span>
        <span>f</span>
        <span>t</span>
        <span>e</span>
        <span>r</span>
        <span> </span>
        <span>P</span>
        <span>l</span>
        <span>a</span>
        <span>c</span>
        <span>e</span>
        <span>m</span>
        <span>e</span>
        <span>n</span>
        <span>t</span>
    </a>
    <div className ="overflow-visible class-ico" data-aos="fade-right" data-aos-duration="1000" data-bs-toggle="modal"
        data-bs-target="#contact">
        <!-- <dotlottie-player src="https://lottie.host/c5554bef-2ea2-439f-ba03-150ec726c96e/0TSDow76Wl.json"
            background="transparent" speed="1" style="width: 80px;" loop autoplay></dotlottie-player>  -->

        <dotlottie-player title="contact"
            src="https://lottie.host/a335969b-c315-4035-be6b-d18bed4b5831/l73y30ZFSl.json"
            background="transparent" speed="1" style="width: 80px;" loop autoplay></dotlottie-player>
    </div>
</div>

<a href="https://api.whatsapp.com/send/?phone=%2B917845721438&text&app_absent=0" target="_blank" id="wa"
    className ="cursor" >
    <img src="../whatsapp.png" alt="whatsapp" className ="img-fluid"
        style="width:70px">
</a>
</div>

<!-- course Modal -->
<div className ="modal fade" id="contact" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div className ="modal-dialog modal-dialog-centered p-5">
    <div className ="modal-content">
        <div className ="modal-header">
            <h1 className ="modal-title fs-5 linear-gradient-text text-center" id="exampleModalLabel">Contact Form
            </h1>
            <button type="button" className ="btn-close shadow-none" data-bs-dismiss="modal"
                aria-label="Close"></button>
        </div>
        <div className ="modal-body p-3">
            <form id="contactForm" name="contactForm">
                <div className ="form-floating">
                    <input type="text" className ="form-control" id="name" name="name" placeholder="Enter your name" required>
                    <label for="name">Name <span className ="text"> *</span></label>
                </div>
                <div className ="form-floating">
                    <input type="email" className ="form-control" id="email" name="email" placeholder="Enter your email" required>
                    <label for="email">Email <span className ="text"> *</span></label>
                </div>
                <div className ="form-floating">
                    <input type="number" className ="form-control" id="phone" name="phone" placeholder="Enter your phone number"
                        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                        maxlength="10" required>
                    <label for="phone">Phone Number <span className ="text"> *</span></label>
                </div>
                <div className ="form-floating">
                    <textarea className ="form-control" id="message" name="message" rows="3" placeholder="Enter your message"
                        style="height: 80px"></textarea>
                    <label for="message">Message <span>(Optional)</span></label>
                </div>
                <div id="output" className ="text-center"></div>
                <div className ="text-center"> <button type="submit"
                        className ="btn btn-primary btn-block">Submit</button></div>
            </form>

        </div>
    </div>
</div>
</div>


<!-- Google tag (gtag.js) -->
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-E4L74X1L7V"
    ></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-E4L74X1L7V");
    </script>

<script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script>

`;

var existingDiv = document.getElementById("footerElement");
existingDiv.insertAdjacentHTML("afterend", htmlCode);

$(document).ready(function () {
  // Change the href to a new value
  // $("footer .courses-links a").attr("href", "one");
  if ($(".individualBlogs").length > 0) {
    $(".popup").attr("href", "../pay-after-placement.html");
    $(".copyright a").attr("href", "../privacy-policy.html");
  } else if ($(".coursesList").length > 0) {
    $(".popup").attr("href", "../../pay-after-placement.html");
    $(".copyright a").attr("href", "../../privacy-policy.html");
  }
});


AOS.init();
