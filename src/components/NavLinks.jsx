import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function NavLinks({ toggleNavbar }) {
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

  const scrollToSection = (targetId) => {
    const targetElement = document.getElementById(targetId);
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
      scrollToSection(targetId);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  const handleNavigation = (slugVal) => {
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

  return (
    <div>
      {/*TODO:Make this a separate component*/}
      <ul className="navbar-nav ms-auto">
        {navItems.map((item) =>
          item.active ? (
            <li key={item.name} className="nav-item me-0 me-lg-15 p-15 p-lg-0">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(item.slug);
                }}
                className="nav-link"
              >
                {item.name}
              </a>
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
}

export default NavLinks;
