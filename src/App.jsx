import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import { Outlet } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import React, { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "About Us",
      slug: "/about-us",
      active: true,
    },
    {
      name: "Our Projects",
      slug: "/our-projects",
      active: true,
    },
    {
      name: "Testimonials",
      slug: "/testimonials",
      active: true,
    },
    {
      name: "Contact Us",
      slug: "/contact-us",
      active: true,
    },
  ];

  const toggleNavbar = () => {
    document.getElementById("navbarToggler").click();
  }

  const handleNavigation = (slugVal) => {
    console.log(`slugVal ${slugVal}`);
    if (slugVal === "/" || slugVal === "/our-projects") {
      navigate(slugVal);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const targetId = slugVal.replace("/", "");
      navigate(`/#${targetId}`);
    }

    if(window.screen.width < 992){
      toggleNavbar();
    }
  };

  const scrollToSection = (targetId) => {
    const targetElement = document.getElementById(targetId);
    console.log(`targetElement ${targetElement}`);
    if (targetElement) {
      const targetTop =
        targetElement.getBoundingClientRect().top + window.pageYOffset - 40;
      window.scrollTo({
        top: targetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const { hash } = location;
    if (hash) {
      const targetId = hash.substring(1); // Remove the '#' from hash
      console.log(`targetId = ${targetId}`);
      scrollToSection(targetId);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Header handleClick={handleNavigation} navItemsList={navItems} />
      <main id="main">
        <Outlet />
      </main>
      <Footer handleClick={handleNavigation} navItemsList={navItems}  />
      <BackToTop />
    </>
  );
}

export default App;
