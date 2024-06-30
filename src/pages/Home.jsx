import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  // const [firstName, setFirstName] = useState(null);
  // const [lastName, setLastName] = useState(null);
  // const [fname, setFname] = useState(null);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = [
    {
      name: `John Morgan`,
      img: `/students/John_Morgan.jpg`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      name: `Ellie Anderson`,
      img: `/students/Ellie_Anderson.jpg`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      name: `Nia Adebayo`,
      img: `/students/Nia_Adebayo.jpg`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      name: `Rigo Louie`,
      img: `/students/Rigo_Louie.jpg`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      name: `Mia Williams`,
      img: `/students/Mia_Williams.jpg`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
  ];

  return (
    <>
      <section>
        <div id="bannerCarousel" className="carousel slide banner-carousel">
          {/* <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div> */}
          <div className="carousel-inner">
            <div className="carousel-item banner-1 active">
              <div className="carousel-caption">
                <h1 className="text-white mb-25 fst-italic">
                  <q>
                    From Concept to Completion,
                    <br />
                    Excellence in Every Detail
                  </q>
                </h1>
                <a
                  href="#"
                  className="btn btn-primary banner-btn mb-15 mb-sm-0"
                >
                  See Projects
                </a>
                <a
                  href="#"
                  className="btn btn-primary banner-btn ms-0 ms-sm-20"
                >
                  Inquire Now
                </a>
              </div>
            </div>
            {/* <div className="carousel-item banner-2">
              <div className="carousel-caption d-none d-md-block">
                <h1 className="text-white mb-25 fw-lighter fw-lighter fst-italic">
                  <q>
                    From Concept to Completion,
                    <br />
                    Excellence in Every Detail
                  </q>
                </h1>
                <a
                  href="#"
                  className="btn btn-primary banner-btn"
                >
                  See Projects
                </a>
                <a
                  href="#"
                  className="btn btn-primary banner-btn ms-20"
                >
                  Inquire Now
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div> */}
          </div>
          {/* <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button> */}
        </div>
      </section>
      {/* mission section */}
      <section className="contact-details gray-bg py-25">
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-3">
            <div className="col mb-15 mb-lg-0">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 media-img address-icon"></div>
                    <div className="flex-grow-1 ms-10">
                      Sawant Builders Pvt. Ltd. 123 Main Street, Cityville,
                      Stateville 56789, Country
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col px-lg-0 px-xl-5 mb-15 mb-lg-0">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 media-img contact-icon"></div>
                    <div className="flex-grow-1 ms-10">
                      <span className="text-nowrap">
                        <span className="text-nowrap">+91-9921750813</span>
                      </span>
                      <br />
                      <span className="text-nowrap">
                        sawantbuilders@gmail.com
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 media-img visiting-open-icon"></div>
                    <div className="flex-grow-1 ms-10">
                      Monday To Friday <br />
                      9:00am To 5:00pm
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="about-us" id="about-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 order-2 order-lg-1">
              <img
                src="/assets/content-images/banner6.jpg"
                alt=""
                className="img-fluid mb-10 mb-lg-0"
              />
            </div>
            <div className="col-lg-8 order-1 order-lg-2">
              <h2 className="text-secondary">About Us</h2>
              <p>
                Welcome to Sawant Builders, where we're dedicated to crafting
                your dreams into reality. As a new entrant into the construction
                and development industry, Sawant Builders brings a fresh
                perspective and a commitment to quality and innovation.
              </p>
              <p>
                We aim to become a trusted name known for delivering superior
                quality homes and commercial spaces that exceed expectations.
              </p>
              <p>
                We strive to create enduring value for our clients, communities,
                and stakeholders through meticulous planning, innovative design,
                and impeccable craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our mission section */}
      <section className="our-mission">
        <div className="container">
          <span className="hr">
            <hr />
            <span className="logo-abbr"></span>
          </span>
          <div className="row">
            <div className="col-lg-8">
              <h2 className="text-secondary">Our Mission</h2>
              <p>
                At Sawant Builders, our mission is to redefine the standard of
                living through exceptional craftsmanship, innovative design, and
                unwavering commitment to quality.
              </p>
              <p>
                We aspire to create not just homes, but lifestyles that inspire
                and endure. Guided by integrity and a passion for excellence, we
                aim to exceed expectations, nurture lasting relationships, and
                contribute positively to the communities we serve.
              </p>
              <p>
                Our dedication to sustainable practices ensures that our
                developments are not only beautiful but also environmentally
                responsible. Together, we build futures, one home at a time.
              </p>
            </div>
            <div className="col-lg-4">
              <img
                src="/assets/content-images/banner5.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects section */}
      <section className="our-projects" id="our-projects">
        <div className="container">
          <span className="hr">
            <hr />
            <span className="logo-abbr"></span>
          </span>

          <h2 className="text-secondary mb-15">Our Projects</h2>
          <div className="row">
            <div className="col-lg-6">
              <div className="card project-card mb-25 mb-lg-0">
                <div className="card-img project-1"></div>

                <div className="card-img-overlay">
                  <h3 className="card-title text-white">Sawant Residency</h3>
                  <p className="card-text text-white pe-25">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer. This is a wider card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                  <h5 className="text-white mb-20">Status: In Progress</h5>

                  <a href="#" className="btn btn-primary">
                    View Details
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card project-card project-2">
                <div className="card-img project-2"></div>
                <div className="card-img-overlay">
                  <h3 className="card-title text-white">Sawant Vihar</h3>
                  <p className="card-text text-white pe-25">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer. This is a wider card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                  <h5 className="text-white mb-20">Status: In Progress</h5>
                  <a href="#" className="btn btn-primary">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href="" className="btn btn-primary mt-35">
              View All Projects
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials">
        <div className="container slider-container">
          <span className="hr">
            <hr />
            <span className="logo-abbr"></span>
          </span>
          <h2 className="text-secondary mb-15">Testimonials</h2>
          <Slider {...settings}>
            <div className="card">
              <div className="text-center">
                <i className="fa-solid fa-quote-left text-primary mb-10 fs-1"></i>
              </div>
              <h5 className="fst-italic fw-light mb-25">
                Building excellence is our hallmark at Sawant Builders. We
                guarantee superior construction standards and meticulous
                attention to detail in every endeavor.
              </h5>
              <h5 className="text-primary mb-0 text-uppercase">
                Mr. Anjali Desai
              </h5>
            </div>
            <div className="card">
              <div className="text-center">
                <i className="fa-solid fa-quote-left text-primary mb-10 fs-1"></i>
              </div>
              <h5 className="fst-italic fw-light mb-25">
                Building excellence is our hallmark at Sawant Builders. We
                guarantee superior construction standards and meticulous
                attention to detail in every endeavor.
              </h5>
              <h5 className="text-primary mb-0 text-uppercase">
                Mr. Anjali Desai 2
              </h5>
            </div>
            <div className="card">
              <div className="text-center">
                <i className="fa-solid fa-quote-left text-primary mb-10 fs-1"></i>
              </div>
              <h5 className="fst-italic fw-light mb-25">
                Building excellence is our hallmark at Sawant Builders. We
                guarantee superior construction standards and meticulous
                attention to detail in every endeavor.
              </h5>
              <h5 className="text-primary mb-0 text-uppercase">
                Mr. Anjali Desai 3
              </h5>
            </div>
            <div className="card">
              <div className="text-center">
                <i className="fa-solid fa-quote-left text-primary mb-10 fs-1"></i>
              </div>
              <h5 className="fst-italic fw-light mb-25">
                Building excellence is our hallmark at Sawant Builders. We
                guarantee superior construction standards and meticulous
                attention to detail in every endeavor.
              </h5>
              <h5 className="text-primary mb-0 text-uppercase">
                Mr. Anjali Desai 4
              </h5>
            </div>
            <div className="card">
              <div className="text-center">
                <i className="fa-solid fa-quote-left text-primary mb-10 fs-1"></i>
              </div>
              <h5 className="fst-italic fw-light mb-25">
                Building excellence is our hallmark at Sawant Builders. We
                guarantee superior construction standards and meticulous
                attention to detail in every endeavor.
              </h5>
              <h5 className="text-primary mb-0 text-uppercase">
                Mr. Anjali Desai 5
              </h5>
            </div>
          </Slider>
        </div>
      </section>

      {/* Contact Us */}
      <section className="contact-us" id="contact-us">
        <div className="container">
          <span className="hr">
            <hr />
            <span className="logo-abbr"></span>
          </span>

          <h2 className="text-secondary mb-15">Contact Us</h2>
          <p className="mb-20">
            For inquiry or to discuss your requirements, please contact us.
          </p>
          <div className="row">
            <div className="col-lg-6">
              <form class="row g-3 needs-validation">
                <div class="col-md-6">
                  <label for="validationCustom01" class="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom01"
                    // value="Mark"
                    required
                  />
                  <div class="valid-feedback">Looks good!</div>
                </div>
                <div class="col-md-6">
                  <label for="validationCustom02" class="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom02"
                    // value="Otto"
                    required
                  />
                  <div class="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-12">
                  <label for="validationCustom01" class="form-label">
                    Project
                  </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Select Project</option>
                    <option value="1">Sawant Residency</option>
                    <option value="2">Sawant Vihar</option>
                  </select>
                </div>
                {/* <div class="col-md-6"></div> */}
                <div class="col-md-6">
                  <label for="validationCustom01" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="validationCustom01"
                    // value="Mark"
                    required
                  />
                  <div class="valid-feedback">Looks good!</div>
                </div>
                <div class="col-md-6">
                  <label for="validationCustom02" class="form-label">
                    Phone No.
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom02"
                    // value="Otto"
                    required
                  />
                  <div class="valid-feedback">Looks good!</div>
                </div>
                <div className="col-12">
                  <div class="mb-5">
                    <label for="exampleFormControlTextarea1" class="form-label">
                      Comment
                    </label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
                <div class="col-12">
                  <button class="btn btn-primary mb-25" type="submit">
                    Submit form
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30744.159126575225!2d73.92690091425048!3d15.590586091360644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf966fcc6c3167%3A0x1d63cb9fcf98a43!2sDicholi%2C%20Goa!5e0!3m2!1sen!2sin!4v1719499303391!5m2!1sen!2sin"
                // style="border:0;"
                allowfullscreen=""
                className="map-iframe mb-20 mb-lg-0"
                loading="lazy"
                // referrerpolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* <iframe
                id="JotFormIFrame-241754979593476"
                title="Information Request Form"
                onload="window.parent.scrollTo(0,0)"
                allowtransparency="true"
                allow="geolocation; microphone; camera; fullscreen"
                src="https://form.jotform.com/241754979593476"
                frameborder="0"
                style={{
                  minWidth: "100%",
                  maxWidth: "100%",
                  height: "539px",
                  border: "none",
                }}
                scrolling="no"
              ></iframe>
              <script src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js"></script>
              <script>
                window.jotformEmbedHandler("iframe[id='JotFormIFrame-241754979593476']",
                "https://form.jotform.com/")
              </script> */}
            </div>
          </div>

          {/* <div className="text-center">
            <a href="" className="btn btn-primary mt-35">
              View All Projects
            </a>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Home;
