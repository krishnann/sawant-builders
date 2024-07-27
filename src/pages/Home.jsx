import React, { useState } from "react";
import Slider from "react-slick";
import { useForm } from "react-hook-form";
import ReactHtmlParser from "html-react-parser";
import { Link } from "react-router-dom";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Home = ({ projects }) => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // You can handle form data submission here
    const config = {
      SecureToken: "2AD84815AD9C38CB812AFE947CF28D2CF4FF",
      Port: 2525,
      To: "testmailkd@yopmail.com",
      From: "knaik0901@gmail.com",
      Subject: "Guest is interested in project",
      Body: "And this is the body",
    };

    if (window.Email) {
      window.Email.send(config)
        .then((message) => {
          if (message === "OK") {
            setIsFormSubmitted(true); // Update state or perform other actions
          } else {
            alert("Failed to submit: " + message); // Show error message
          }
        })
        .catch((error) => {
          console.error("Error sending email:", error); // Log any errors
          alert("Failed to submit: " + error); // Show error message
        });
    } else {
      alert("SMTPJS library not loaded."); // Handle case where SMTPJS is not loaded
    }
  };

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

  return (
    <>
      <section>
        <div id="bannerCarousel" className="carousel slide banner-carousel">
          <div className="carousel-inner">
            <div className="carousel-item banner-1 active">
              <div className="carousel-caption">
                <h1 className="text-white mb-25 fst-italic">
                  <q className="quote-text">
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
                    <div className="flex-grow-1 ms-10 ms-lg-5 ms-xl-10">
                      <p className="mb-0">
                        TF-8, 3rd Floor, MAPUSA HEIGHTS, Near Judicial Court,
                        Alto Mapusa, Bardez, Goa. 403507
                      </p>
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
                    <div className="flex-grow-1 ms-10 ms-lg-5 ms-xl-10">
                      <p className="mb-5 text-nowrap">
                        <strong>M: </strong>
                        +91 <a href="tel:+91 9823016310" className="mobile-link link">9823016310</a> / <a href="tel:+91 9823016310" className="mobile-link link">9284923037</a>
                      </p>
                      <p className="mb-5 text-nowrap">
                        <strong>T: </strong>
                        +91 <a href="tel:+91 9823016310" className="mobile-link link">832-2910310</a>
                      </p>
                      <p className="mb-0 text-nowrap">
                        <strong>E: </strong>
                        <a
                          href="mailto:sawantbuildersgoa@gmail.com"
                          className="link"
                        >
                          sawantbuildersgoa@gmail.com
                        </a>
                      </p>
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
                    <div className="flex-grow-1 ms-10 ms-lg-5 ms-xl-10">
                      <p className="mb-0">
                        Monday To Friday <br />
                        9:00am To 5:00pm
                      </p>
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
                <div
                  className="card-img "
                  style={{
                    background: `center 0 /cover url("${projects[0].projectImages[0]}") no-repeat`,
                  }}
                ></div>

                <div className="card-img-overlay">
                  <h3 className="card-title text-white">
                    {projects[0].projectName}
                  </h3>
                  <div className="card-text pe-25 custom-scrollbar-primary">
                    {ReactHtmlParser(projects[0].projectDetailsList[0].details)}
                  </div>
                  <h5 className="text-white mt-5 mb-20">
                    Status: {projects[0].status}
                  </h5>

                  <a href="#" className="btn btn-primary">
                    View Details
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card project-card project-2">
                <div
                  className="card-img"
                  style={{
                    background: `center 0 /cover url("${projects[1].projectImages[0]}") no-repeat`,
                  }}
                ></div>
                <div className="card-img-overlay">
                  <h3 className="card-title text-white">
                    {projects[1].projectName}
                  </h3>
                  <p className="card-text text-white pe-25 custom-scrollbar">
                    {ReactHtmlParser(projects[1].projectDetailsList[0].details)}
                  </p>
                  <h5 className="text-white mb-20">
                    Status: {projects[1].status}
                  </h5>
                  <Link to="/our-projects" className="btn btn-primary">View Details</Link>
                  {/* <a href="#" className="btn btn-primary">
                    View Details
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link to="/our-projects" className="btn btn-primary mt-35">View All Projects</Link>
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
              {isFormSubmitted === false ? (
                <form
                  className="row g-3 needs-validation"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="col-md-6">
                    <label htmlFor="validationCustom01" className="form-label">
                      First name
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.firstName ? "is-invalid" : ""
                      }`}
                      id="validationCustom01"
                      {...register("firstName", {
                        required: "First name is required",
                      })}
                    />
                    {errors.firstName && (
                      <div className="invalid-feedback">
                        {errors.firstName.message}
                      </div>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="validationCustom02" className="form-label">
                      Last name
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.lastName ? "is-invalid" : ""
                      }`}
                      id="validationCustom02"
                      {...register("lastName", {
                        required: "Last name is required",
                      })}
                    />
                    {errors.lastName && (
                      <div className="invalid-feedback">
                        {errors.lastName.message}
                      </div>
                    )}
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="validationCustom03" className="form-label">
                      Project
                    </label>
                    <select
                      className={`form-select ${
                        errors.projectName ? "is-invalid" : ""
                      }`}
                      {...register("projectName", {
                        required: "Please select a project",
                      })}
                      aria-label="Default select example"
                    >
                      <option value="">Select Project</option>
                      <option value="Sawant Residency">Sawant Residency</option>
                      <option value="Sawant Vihar">Sawant Vihar</option>
                    </select>
                    {errors.projectName && (
                      <div className="invalid-feedback">
                        {errors.projectName.message}
                      </div>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="validationCustom04" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      id="validationCustom04"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">
                        {errors.email.message}
                      </div>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="validationCustom05" className="form-label">
                      Phone No.
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.phno ? "is-invalid" : ""
                      }`}
                      id="validationCustom05"
                      {...register("phno", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Invalid phone number (10 digits)",
                        },
                      })}
                    />
                    {errors.phno && (
                      <div className="invalid-feedback">
                        {errors.phno.message}
                      </div>
                    )}
                  </div>
                  <div className="col-12">
                    <div className="mb-5">
                      <label
                        htmlFor="exampleFormControlTextarea1"
                        className="form-label"
                      >
                        Comment
                      </label>
                      <textarea
                        className={`form-control ${
                          errors.message ? "is-invalid" : ""
                        }`}
                        {...register("message")}
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                      {errors.message && (
                        <div className="invalid-feedback">
                          Please enter a comment
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary mb-25" type="submit">
                      Submit form
                    </button>
                  </div>
                </form>
              ) : (
                <div className="form-submission-success">
                  <h4>Thank you!</h4>
                  <p>
                    Your request is submitted. We will get back to you soon!
                  </p>
                </div>
              )}
            </div>
            <div className="col-lg-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7685.909244826108!2d73.80720603867644!3d15.594073140074448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sTF-8%2C%203rd%20Floor%2C%20MAPUSA%20HEIGHTS%2C%20Near%20Judicial%20Court%2C%20Alto%20Mapusa%2C%20Bardez%2C%20Goa.%20403507!5e0!3m2!1sen!2sin!4v1721300948500!5m2!1sen!2sin"
                allowfullscreen=""
                className="map-iframe mb-20 mb-lg-0"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
