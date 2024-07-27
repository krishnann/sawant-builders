import React, { useEffect, useState } from "react";
import NavLinks from "./NavLinks";

function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  function toggleHamburgerIcon() {
    if (screen.width < 992) {
      setIsNavbarOpen(!isNavbarOpen);
      document.body.classList.toggle("overflow-hidden");
      document
        .getElementsByClassName("custom-scrollbar")[0]
        .classList.toggle("overflow-hidden");
    }
  }

  const setMainPadding = () => {
    const headerElement = document.getElementById("navbar");
    const footerElement = document.getElementById("footer");

    if (headerElement && footerElement) {
      const headerHeight = headerElement.clientHeight;
      const footerHeight = footerElement.clientHeight + 50; // Adjust as necessary

      document.body.style.paddingTop = `${headerHeight}px`;
      document.body.style.paddingBottom = `${footerHeight}px`;
      document.getElementById("navbarNav").style.top = `${headerHeight}px`;
    }
  };

  const toggleCollapsibleNavbar = () => {
    document.querySelector(".navbar-toggler").click();
  };

  useEffect(() => {
    setMainPadding();
    setTimeout(function () {
      setMainPadding();
    }, 1);
    // Wait for the page to fully load before calling setMainPadding
    // window.addEventListener("load", setMainPadding);
    window.addEventListener("resize", setMainPadding);

    // Function to handle smooth scrolling
    // const smoothScroll = (e) => {
    //   e.preventDefault();

    //   const targetId = e.currentTarget.getAttribute("href").substring(1); // Remove the '#'
    //   const targetElement = document.getElementById(targetId);

    //   if (targetElement) {
    //     const targetTop =
    //       targetElement.getBoundingClientRect().top + window.pageYOffset - 40;
    //     window.scrollTo({
    //       top: targetTop,
    //       behavior: "smooth",
    //     });
    //   }
    // };

    // // Add event listeners for smooth scrolling
    // document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    //   anchor.addEventListener("click", smoothScroll);
    // });

    // // Clean up event listeners on component unmount
    // return () => {
    //   document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    //     anchor.removeEventListener("click", smoothScroll);
    //   });
    // };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-white fixed-top" id="navbar">
      <div className="container">
        <a className="navbar-brand p-0" href="#">
          <img src="/assets/style-images/logo.png" />
        </a>
        <button
          className={`navbar-toggler p-0 mt-10 collapsed ${
            isNavbarOpen ? "open" : ""
          }`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          id="navbarToggler"
          aria-label="Toggle navigation"
          onClick={() => toggleHamburgerIcon()}
        >
          <div className="hamburger-box position-relative d-inline-block">
            <div className="hamburger-inner"></div>
          </div>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <NavLinks toggleNavbar={toggleCollapsibleNavbar} />
        </div>
      </div>
    </nav>
  );
}

export default Header;
