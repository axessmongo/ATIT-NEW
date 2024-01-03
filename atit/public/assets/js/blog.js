    document.addEventListener("DOMContentLoaded", function () {
        const loadMoreBtn = document.getElementById("loadMoreBtn");
        const loadMoreSection = document.getElementById("loadMoreSection");
        // const contentContainer = document.getElementById("content");

        // Additional content
        const additionalContent = [
            `<div class="col-md-4 pb-5" data-aos="fade-right" data-aos-duration="900">
            <a href="./blog/here-the-framework-to-launch-your-it-career-a-complete-guide.html" class="">
            <div class="box rounded-5 ">
                <img src="./assets/img/Blog/Blog5.png" alt="Employment opportunities image">
                <div class="box-content">                           
                   <h2 class="text-decoration-none text-dark mt-3 ms-2 blog-category">  IT Jobs</h2>                   
                </div>
            </div>
            </a>
            <a href="./blog/here-the-framework-to-launch-your-it-career-a-complete-guide.html" class="text-decoration-none blog-title blog-title">
            Employment opportunities
            </a>
        </div>
        <div class="col-md-4 pb-5" data-aos="fade-right" data-aos-duration="900">
            <a href="./blog/what-is-this-post-about.html" class="">
            <div class="box rounded-5 ">
                <img src="./assets/img/Blog/Blog8.png" alt="The Job Market In 2023 image">
                <div class="box-content">                           
                   <h2 class="text-decoration-none text-dark mt-3 ms-2 blog-category">Interviews</h2>                   
                </div>
            </div>
            </a>
            <a href="./blog/what-is-this-post-about.html" class="text-decoration-none blog-title blog-title">
               The Job Market In 2023
            </a>
        </div>
        <div class="col-md-4 pb-5" data-aos="fade-right" data-aos-duration="900">
            <a href="./blog/want-to-get-ahead-of-the-job-race.html" class="">
            <div class="box rounded-5 ">
                <img src="./assets/img/Blog/Blog6.png" alt="Get Ahead Of The Job Race image">
                <div class="box-content">                           
                   <h2 class="text-decoration-none text-dark mt-3 ms-2 blog-category"> IT Jobs</h2>                   
                </div>
            </div>
            </a>
            <a href="./blog/want-to-get-ahead-of-the-job-race.html" class="text-decoration-none blog-title blog-title">
              Get Ahead Of The Job Race
            </a>
        </div>
        <div class="col-md-4 pb-5" data-aos="fade-right" data-aos-duration="900">
            <a href="./blog/how-to-clear-any-professional-exam-a-proven-strategy-for-success.html" class="">
            <div class="box rounded-5 ">
                <img src="./assets/img/Blog/blogimg.jpg" alt=" Clear Any Professional Exam image">
                <div class="box-content">                           
                   <h2 class="text-decoration-none text-dark mt-3 ms-2 blog-category">Others</h2>                   
                </div>
            </div>
            </a>
            <a href="./blog/how-to-clear-any-professional-exam-a-proven-strategy-for-success.html" class="text-decoration-none blog-title blog-title">
            Clear Any Professional Exam
            </a>
        </div>
        <div class="col-md-4 pb-5" data-aos="fade-right" data-aos-duration="900">
            <a href="./blog/how-to-ace-your-first-it-job-interview.html" class="">
            <div class="box rounded-5 ">
                <img src="./assets/img/Blog/Blog7.png" alt="Your First IT Job Interview image">
                <div class="box-content">                           
                   <h2 class="text-decoration-none text-dark mt-3 ms-2 blog-category">  IT Jobs</h2>                   
                </div>
            </div>
            </a>
            <a href="./blog/how-to-ace-your-first-it-job-interview.html" class="text-decoration-none blog-title blog-title">
            Your First IT Job Interview
            </a>
        </div>
        <div class="col-md-4 pb-5" data-aos="fade-right" data-aos-duration="900">
        <a href="./blog/the-booming-it-sector-in-india.html" class="">
        <div class="box rounded-5 ">
            <img src="./assets/img/Blog/Blog4.png" alt="Dynamic Indian Job Market image">
            <div class="box-content">                           
               <h2 class="text-decoration-none text-dark mt-3 ms-2 blog-category">Interviews</h2>                   
            </div>
        </div>
        </a>
        <a href="./blog/the-booming-it-sector-in-india.html" class="text-decoration-none blog-title blog-title">
            Dynamic Indian Job Market
        </a>
    </div>
    <div class="col-md-4 pb-5" data-aos="fade-right" data-aos-duration="900">
        <a href="./blog/introduction-to-the-dynamics-of-the-it-job-market-and-fresh-graduates.html" class="">
        <div class="box rounded-5 ">
            <img src="./assets/img/Blog/Blog11.png" alt="Dynamics Of IT image">
            <div class="box-content">                           
               <h2 class="text-decoration-none text-dark mt-3 ms-2 blog-category">IT Jobs</h2>                   
            </div>
        </div>
        </a>
        <a href="./blog/introduction-to-the-dynamics-of-the-it-job-market-and-fresh-graduates.html" class="text-decoration-none blog-title blog-title">
        Dynamics Of IT 
        
        </a>
    </div>
    <div class="col-md-4 pb-5" data-aos="fade-right" data-aos-duration="900">
        <a href="./blog/mastering-technical-interviews.html" class="">
        <div class="box rounded-5 ">
            <img src="./assets/img/Blog/Blog12.png" alt="Clear Technical Interviews image">
            <div class="box-content">                           
               <h2 class="text-decoration-none text-dark mt-3 ms-2 blog-category">Interviews</h2>                   
            </div>
        </div>
        </a>
        <a href="./blog/mastering-technical-interviews.html" class="text-decoration-none blog-title blog-title">
        Clear Technical Interviews
        </a>
    </div>`,
            // Add more content here
        ];
        let currentContentIndex = 0;
        const itemsToShow = 2;
    
        const showMoreContent = () => {
            for (let i = 0; i < itemsToShow; i++) {
                if (currentContentIndex < additionalContent.length) {
                    const content = additionalContent[currentContentIndex];
                    loadMoreSection.insertAdjacentHTML('beforeend', content); // Insert content at the end of loadMoreSection
                    currentContentIndex++;
                } else {
                    loadMoreBtn.style.display = "none"; // Hide button when all content is loaded
                    break;
                }
            }
            AOS.refresh();
    
        };
    
        loadMoreBtn.addEventListener("click", showMoreContent);
    });
    
    