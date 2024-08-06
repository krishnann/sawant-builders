import React from "react";
import { useLocation } from "react-router-dom";

function NavLinks({ toggleNavbar, handleNavClick, navItemsCollection }) {
  const location = useLocation();
  // Function to strip hash and query parameters from pathname
  const cleanPathname = (pathname) => {
    const currentPath = window.location.href;
      console.log(`pathname = ${location.pathname}`)
      return pathname.includes("#");
    };

  return (
    <div>
      {/*TODO:Make this a separate component*/}
      <ul className="navbar-nav ms-auto">
      {Array.isArray(navItemsCollection) && navItemsCollection.length > 0 ? (
          navItemsCollection.map((item) => {
            const isActive = cleanPathname(location.pathname) === item.slug;
            return (
              <li key={item.name} className="nav-item me-0 me-lg-15 p-15 p-lg-0">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.slug);
                  }}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                >
                  {item.name}
                </a>
              </li>
            );
          })
        ) : ("")}
      </ul>
    </div>
  );
}

export default NavLinks;
