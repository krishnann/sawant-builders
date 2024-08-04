import React from "react";
import NavLinks from "./NavLinks";

function Footer() {
  return (
    <footer id="footer">
      <div className="container mb-15 pt-5">
        <div className="row row-cols-1">
          <div className="col col-md-2">
            <img
              src="/assets/style-images/logo.png"
              alt="logo"
              className="mb-15 mb-md-0"
            />
          </div>
          <div className="col col-md-4 col-lg-5">
            <h5>Address</h5>
            <p className="mb-15">
              Sawant Builders<br />
              TF-8, 3rd Floor, MAPUSA HEIGHTS, <br/>Near Judicial Court, Alto Mapusa, Bardez, Goa. 403507
            </p>
            <p className="mb-10">
              <strong>Contact details:</strong>
            </p>
            <p className="mb-5">
              <strong>M: </strong>
              +91 <a href="tel:+919823016310" className="mobile-link link">9823016310</a> / <a href="tel:+91 9823016310" className="mobile-link link">9284923037</a>
            </p>
            <p className="mb-15 text-nowrap">
              <strong>T: </strong>
              +91 <a href="tel:+919823016310" className="mobile-link link">832-2910310</a>
            </p>
            <p className="mb-20">
              <strong>Email:</strong>{" "}
              <a href="mailto:sawantbuilders@gmail.com" className="link-secondary">
                sawantbuilders@gmail.com
              </a>
            </p>
          </div>

          <div className="col col-md-3 col-lg-2 footer-nav-links mb-15 mb-md-0">
            <h5>Quick Links</h5>
            <NavLinks/>
          </div>
          <div className="col col-md-3 col-lg-3 text-md-start">
            <h5>Social Media</h5>
            <div className="d-flex">
              <a
                href="#"
                className="fa-brands fa-facebook-f fs-6 me-10 social-media-links"
                title="facebook"
                target="_blank"
              ></a>
              <a
                href="https://www.instagram.com/sawantbuildersgoa/?igsh=MW9mbmpqY2x5MWl1NA%3D%3D&utm_source=qr"
                className="fa-brands fa-instagram fs-6 social-media-links"
                title="instagram"
                target="_blank"
              ></a>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-content p-10">
        <div className="container">
          <p className="text-white m-0">
            Copyright &copy; 2024 - Sawant Builders.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
