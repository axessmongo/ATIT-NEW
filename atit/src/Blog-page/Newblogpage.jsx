import { React, useEffect } from "react";
import Footer from "../Components/Footer";
import Company from "../Components/Company";
import { Link } from "react-router-dom";
import AOS from "aos";

function Newblogpage() {
  useEffect(() => {
    const handleNavLinkClick = () => {
      AOS.refresh();
    };

    // Assuming you have a similar HTML structure and class names in your React component
    const navLinks = document.querySelectorAll(".nav-pills .nav-link");

    navLinks.forEach((navLink) => {
      navLink.addEventListener("click", handleNavLinkClick);
    });

    return () => {
      // Cleanup event listeners when the component unmounts
      navLinks.forEach((navLink) => {
        navLink.removeEventListener("click", handleNavLinkClick);
      });
    };
  }, []);
  return (
    <div>
      <div>
        <div>
          {/* blog banner */}
          <section
            className="hero-banner new-hero vh-500px header finisher-header text-center text-md-start text-white mb-5"
            style={{
              background: "linear-gradient(270deg,rgb(25 151 236) 0,#000 100%)",
            }}
          >
            <div className="container z-3 text-center">
              <div className="row d-flex justify-content-center align-items-center flex-row-reverse flex-lg-row">
                <div>
                  <h1
                    data-aos="fade-up"
                    data-aos-duration="500"
                    className="primary-header"
                  >
                    <span className="primary-color">Blog</span>
                  </h1>
                  <p
                    className="text-light fs-6 text-capitalize fw-light"
                    data-aos="fade-up"
                    data-aos-duration="700"
                  >
                    Embarking on the journey from academia to the professional
                    world is an exhilarating experience, marked by the
                    transition from classrooms to boardrooms. We will explore
                    the significance of placement and training, providing
                    valuable insights for both students and organizations.
                  </p>
                  <nav
                    data-aos="fade-up"
                    data-aos-duration="800"
                    style={{
                      "--bs-breadcrumb-divider":
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E\")",
                    }}
                    aria-label="breadcrumb"
                  >
                    <ol className="breadcrumb justify-content-center">
                      <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                      </li>
                      <li
                        className="breadcrumb-item active text-white"
                        aria-current="page"
                      >
                        Blog
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="col-11 col-xl-10 mx-auto">
          <div className="row">
            <div className="col-md-7 col-xxl-8">
              <img
                src="https://cdn.pixelgrade.com/wp-content/uploads/2022/03/xCrafting-furniture-that-lasts-and-tells-a-story-Eterra-Atelier-1024x538.jpg.pagespeed.ic.sGtsLtYfs_.webp"
                alt=""
              />
              <p className="secondary-text py-3 mb-0">People like you — 9 min</p>

              <p className="display-6 fw-bold mb-0">
                read Crafting furniture that lasts and tells a story{" "}
              </p>
              <p className="pt-3 secondary-text">
                Discover the story of a small furniture design where each piece
                has a story to tell. Read More
              </p>
              <div className="row align-items-center">
                <div className="col-md-6">
                  <img
                    src="https://cdn.pixelgrade.com/wp-content/uploads/2021/11/xHand-full-of-coffee-beans-from-Finca-Roasters-1024x682.jpeg.pagespeed.ic.2HsGJhxezr.webp"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-6">
                  <p className="secondary-text fw-bold">
                    People like you — 9 min read
                  </p>
                  <p className="secondary-text fw-bold">
                    read Running a coffee shop and driving positive change
                  </p>{" "}
                  <p className="secondary-text">
                    Finca Roasters is a two-folks specialty coffee business in
                    Baden, Germany, with a strong desire to make a positive
                    change in their part of the world.
                  </p>
                  <Link to={""}> Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-xxl-4">
              <img
                src="https://cdn.pixelgrade.com/wp-content/uploads/2021/07/xSabrina-Goethals-Interview-min-1024x538.jpg.pagespeed.ic.W-UixxVsCC.webp"
                className="mt-1"
                alt=""
              />
              <p className="fw-bold secondary-text py-3 mb-0">
                People like you — 11 min read
              </p>
              <h5 className="secondary-text fw-bold mb-3">
                Rethinking the way we travel and wander
              </h5>
              <p className="secondary-text">
                We can do better when it comes to traveling and exploring the
                world. Learn how you can do it more mindfully.
              </p>
              <Link to={""}>Read More</Link>
              <div className="row">
                <div className="col-md-6">
                  <img
                    src="https://cdn.pixelgrade.com/wp-content/uploads/2021/04/xRoo-Interview-from-pompomcooks.com_-1024x538.jpg.pagespeed.ic.Jr-N70tSm_.webp"
                    alt=""
                    className="mt-3"
                  />
                </div>
                <div className="col-md-6">
                  <p className="secondary-text fw-bold">
                    People like you — 11 min read
                  </p>
                  <p className="secondary-text">
                    Cooking as a form of self-expression People like you — 19
                  </p>
                </div>
                <div className="col-md-6">
                  <img
                    src="https://cdn.pixelgrade.com/wp-content/uploads/2021/03/xContributing-to-humanity-through-architecture-1024x538.png.pagespeed.ic.SMZFqkxbv0.webp"
                    alt=""
                    className="mt-3"
                  />
                </div>
                <div className="col-md-6">
                  <p className="secondary-text fw-bold">
                    People like you — 11 min read
                  </p>
                  <p className="secondary-text">
                    Cooking as a form of self-expression People like you — 19
                  </p>
                </div>
                <div className="col-md-6">
                  <img
                    src="https://cdn.pixelgrade.com/wp-content/uploads/2020/12/xBeing-creative-is-seeing-potential-in-people-and-things-1024x538.jpg.pagespeed.ic.erz-EDfkwy.webp"
                    alt=""
                    className="mt-3"
                  />
                </div>
                <div className="col-md-6">
                  <p className="secondary-text fw-bold">
                    People like you — 11 min read
                  </p>
                  <p className="secondary-text">
                    Cooking as a form of self-expression People like you — 19
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="row">
              <div className="col-md-4">
                <img
                  src="https://cdn.pixelgrade.com/wp-content/uploads/2022/03/xSix-years-at-Pixelgrade_-the-adventure-comes-to-an-end-1024x538.jpg.pagespeed.ic.9WHA6PJHsu.webp"
                  alt=""
                />
                <p className="py-3 secondary-text fw-bold">Along our way — 9 min read </p>
                <p className="secondary-text">
                  Six years at Pixelgrade: the adventure comes to an end
                </p>
                <p className="secondary-text">
                  Being the glue that kept the pieces together at pixelgrade for
                  more than six years was honoring. I am genuinely grateful for
                  everything I experienced here, and I’ll remain a believer.
                  Thank you! Read More
                </p>
                <Link to={""}>Read more</Link>
              </div>
              <div className="col-md-4">
                <img
                  src="https://cdn.pixelgrade.com/wp-content/uploads/2019/09/xHow-to-write-your-first-blog-post-with-confidence-min-1024x538.jpg.pagespeed.ic.5WfiQUWCCJ.webp"
                  alt=""
                />
                <p className="py-3 secondary-text fw-bold">Along our way — 9 min read </p>
                <p className="secondary-text">
                  Six years at Pixelgrade: the adventure comes to an end
                </p>
                <p className="secondary-text">
                  Being the glue that kept the pieces together at pixelgrade for
                  more than six years was honoring. I am genuinely grateful for
                  everything I experienced here, and I’ll remain a believer.
                  Thank you! Read More
                </p>
                <Link to={""}>Read more</Link>
              </div>
              <div className="col-md-4">
                <img
                  src="https://cdn.pixelgrade.com/wp-content/uploads/2022/01/xtransparency-report-14-featured-1-1024x525.png.pagespeed.ic.e5LE3tew0n.webp"
                  alt=""
                />
                <p className="py-3 secondary-text fw-bold">Along our way — 9 min read </p>
                <p className="secondary-text">
                  Six years at Pixelgrade: the adventure comes to an end
                </p>
                <p className="secondary-text">
                  Being the glue that kept the pieces together at pixelgrade for
                  more than six years was honoring. I am genuinely grateful for
                  everything I experienced here, and I’ll remain a believer.
                  Thank you! Read More
                </p>
                <Link to={""}>Read more</Link>
              </div>
              <div className="col-md-4 mt-3 pt-3">
                <img
                  src="https://cdn.pixelgrade.com/wp-content/uploads/2021/02/xLaunching-a-website-1024x538.jpg.pagespeed.ic.hm2_KcJ2J7.webp"
                  alt=""
                />
                <p className="py-3 secondary-text fw-bold ">Along our way — 9 min read </p>
                <p className="secondary-text">
                  Six years at Pixelgrade: the adventure comes to an end
                </p>
                <p className="secondary-text">
                  Being the glue that kept the pieces together at pixelgrade for
                  more than six years was honoring. I am genuinely grateful for
                  everything I experienced here, and I’ll remain a believer.
                  Thank you! Read More
                </p>
                <Link to={""}>Read more</Link>
              </div>
              <div className="col-md-4 mt-3 pt-3">
                <img
                  src="https://cdn.pixelgrade.com/wp-content/uploads/2021/02/xLaunching-a-website-1024x538.jpg.pagespeed.ic.hm2_KcJ2J7.webp"
                  alt=""
                />
                <p className="py-3 secondary-text fw-bold ">Along our way — 9 min read </p>
                <p className="secondary-text">
                  Six years at Pixelgrade: the adventure comes to an end
                </p>
                <p className="secondary-text">
                  Being the glue that kept the pieces together at pixelgrade for
                  more than six years was honoring. I am genuinely grateful for
                  everything I experienced here, and I’ll remain a believer.
                  Thank you! Read More
                </p>
                <Link to={""}>Read more</Link>
              </div>
              <div className="col-md-4 mt-3 pt-3">
                <img
                  src="https://pixelgrade.com/wp-content/uploads/2021/02/Creating-your-website%E2%80%94get-your-priorities-straight-1024x538.jpg"
                  alt=""
                />
                <p className="py-3 secondary-text fw-bold ">Along our way — 9 min read </p>
                <p className="secondary-text">
                  Six years at Pixelgrade: the adventure comes to an end
                </p>
                <p className="secondary-text">
                  Being the glue that kept the pieces together at pixelgrade for
                  more than six years was honoring. I am genuinely grateful for
                  everything I experienced here, and I’ll remain a believer.
                  Thank you! Read More
                </p>
                <Link to={""}>Read more</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-5 pt-4">
            <div className="col-md-3">
              <img
                src="https://cdn.pixelgrade.com/wp-content/uploads/2021/08/xCreating-About-page-for-website-1-min-1024x538.png.pagespeed.ic.F3meBa0Xq3.webp"
                alt=""
              />
              <p className="fw-bold py-3 secondary-text">Imagine your website — 8 min read</p>
              <p className="secondary-text">About page examples for different team structures</p>

              <img
                src="https://cdn.pixelgrade.com/wp-content/uploads/2021/08/xCreating-About-page-for-website-1-min-1024x538.png.pagespeed.ic.F3meBa0Xq3.webp"
                alt=""
              />
              <p className="fw-bold py-3 secondary-text">Imagine your website — 8 min read</p>
              <p className="secondary-text">About page examples for different team structures</p>
             
            </div>

            <div className="col-md-6">
              <img
                src="https://cdn.pixelgrade.com/wp-content/uploads/2021/10/xHow-to-sell-your-crafts-online-using-WordPress-Plus-a-Case-Study-min-1024x538.jpg.pagespeed.ic.eOJn5u0UFf.webp"
                alt=""
              />
              <p className="py-3 secondary-text fw-bold">
                Build up your website — 12 min read
              </p>
              <h6 className="mt-2">
                How to sell your crafts online using WordPress{" "}
              </h6>
              <p className="secondary-text">
                Showcasing and selling online your creative products might look
                like a danger zone you are about to enter. We help you be safe
                and shine.
              </p>
              <Link to={""}>read more</Link>
              
            </div>
            <div className="col-md-3">
              <img
                src="https://cdn.pixelgrade.com/wp-content/uploads/2021/07/xCreating-a-company-blog-that-serves-business-goals-min-1024x538.jpg.pagespeed.ic.wbxUK7Wt9J.webp"
                alt=""
              />
              <p className="fw-bold py-3 secondary-text">Imagine your website — 8 min read</p>
              <p className="secondary-text">About page examples for different team structures</p>
              <img
                src="https://cdn.pixelgrade.com/wp-content/uploads/2021/08/xCreating-About-page-for-website-1-min-1024x538.png.pagespeed.ic.F3meBa0Xq3.webp"
                alt=""
              />
              <p className="fw-bold py-3 secondary-text">Imagine your website — 8 min read</p>
              <p className="secondary-text">About page examples for different team structures</p>
             
            </div>
          </div>
        </div>
        <div className="container-fluid">
            <Footer/>
        </div>
      </div>
    </div>
  );
}

export default Newblogpage;
