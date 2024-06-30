import React from "react";

function Footer() {
  return (
    <footer id="footer">
      <div className="container mb-15 pt-5">
        <div className="row row-cols-1 row-cols-md-4">
          <div className="col col-md-2">
            <img
              src="src\assets\style-images\logo.png"
              alt="logo"
              className="mb-15 mb-md-0"
            />
          </div>
          <div className="col col-md-5">
            <h5>Address</h5>
            <p className="mb-5">
              Sawant Builders Pvt. Ltd. <br />
              123 Main Street, Cityville, Stateville 56789, Country
            </p>
            <p className="mb-5">
              <strong>Contact No:</strong>+0832-2957755
            </p>
            <p className="mb-15">
              <strong>Email:</strong>sawantbuilders@gmail.com
            </p>
          </div>

          <div className="col col-md-2">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-5">
                <a href="#">Home</a>
              </li>
              <li className="mb-5">
                <a href="#">Project</a>
              </li>
              <li className="mb-5">
                <a href="#">About Us</a>
              </li>
              <li className="mb-5">
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col col-md-3">
            <h5>Social Media</h5>
            <div className="d-flex">
              <a
                href="#"
                className="fa-brands fa-facebook-f fs-6 me-10 social-media-links"
                title="facebook"
              ></a>
              <a
                href="#"
                className="fa-brands fa-linkedin-in fs-6 me-10 social-media-links"
                title="linkedIn"
              ></a>
              <a
                href="#"
                className="fa-brands fa-instagram fs-6 social-media-links"
                title="instagram"
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
