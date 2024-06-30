import React from "react";

function NavLinks() {
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

  //   const navigateToThePage = (slugVal) => {
  //     navigate(slugVal);
  //     toggleNavbar();
  //   };

  return (
    <div>
      {/*TODO:Make this a separate component*/}
      <ul className="navbar-nav ms-auto">
        {navItems.map((item) =>
          item.active ? (
            <li key={item.name} className="nav-item me-0 me-lg-15 p-15 p-lg-0">
              <a
                href={`#${item.slug.replace("/", "")}`}
                // onClick={() => navigateToThePage(item.slug)}
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
