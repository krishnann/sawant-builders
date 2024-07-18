// Project list data
export const projectList = [
    {
      projectID: "project1",
      projectName: "Sawant Residency",
      projectImages: [
        "/assets/content-images/banner1.jpg",
        "/assets/content-images/banner2.jpg",
      ],
      projectDetailsList: [
        {
          title: "Project Introduction",
          details: `<p><strong>'Sawant Residency'</strong> a Project by <strong>'SAWANT BUILDERS'</strong> a firm with its proprietory having more than 34 years experience in the Real Estate industry. Sawant Residency offers Luxurious, modern, affordable quality homes at a prime location with proximity to all the amenities like school, hospital, market, parks within a radius of 2km.</p>
            <p>Our motto is to provide quality homes, with afforbale prices and timely delivery</p>
            `,
        },
        {
          title: "Project Amenities & Specifications",
          details: `
          <div className="row row-cols-1 row-cols-md-2">
          <div className="col col-md-4">
          <h5 className="text-primary">Amenities</h5>
          <ul className="list">
          <li>Security</li>
          <li>Gated Complex</li>
          <li>Stilt Parking</li>
          <li>Elivators</li>
          </ul>
          </div> 
          <div className="col col-md-8">
           <h5 className="text-primary">Specifications</h5>
           <ul className="list">
          <li>R.C.C Framed structure</li>
          <li>Vitrified flooring</li>
          <li>Granite / Marble skills</li>
          <li>Designer tiles for bathrooms, Pastel shades sanitaryware</li>
          <li>Hot/cold Provision</li>
          <li>Kitchen platform with Stainless Steel Sink and Granite top</li>
          <li>Teak Wood pannelled main door with brass fittings, other dooes to be of teak wood frame with marine ply panel/moulded doors/windows/sliding Alluminium/UPVC</li>
          <li>Concealed electrical conduits with necessary lug/power/AC points & modular switches</li>
          <li>Cable T.V provision</li>
          <li>Interiors with acrylic distemper & Exteriors with weather protective Paints</li>
          <li>CPVC Rust-free plumbing</li>
          </ul>
          </div>
          </div>
          `,
        },
        {
          title: "Project Location",
          details: `
            <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7685.909244826108!2d73.80720603867644!3d15.594073140074448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sTF-8%2C%203rd%20Floor%2C%20MAPUSA%20HEIGHTS%2C%20Near%20Judicial%20Court%2C%20Alto%20Mapusa%2C%20Bardez%2C%20Goa.%20403507!5e0!3m2!1sen!2sin!4v1721300948500!5m2!1sen!2sin"
                  allowfullscreen=""
                  className="map-iframe mb-20"
                  loading="lazy"
                ></iframe>
  
                   <h5 class="text-decoration-underline fs-6">Address</h5>
                          <p className="mb-25">TF-8, 3rd Floor, MAPUSA HEIGHTS,
                          Near Judicial Court, Alto Mapusa, 
                          Bardez, Goa. 403507</p>
  
                          <h5 class="text-decoration-underline fs-6">Contact Details</h5>
                          <p><strong>Mobile:</strong> +91 9823016310 / 9284923037</p>
                          <p><strong>Telephone:</strong> +91 832 2910310</p>
                          <p className="mb-0"><strong>Email:</strong> sawantbuildersgoa@gmail.com</p>
                          
          `,
        },
      ],
      primeLocationsFromProject: [
        { location: "Bicholim City", distance: "3.5" },
        { location: "Mapusa City", distance: "18" },
        { location: "Thivim Train Station", distance: "12" },
      ],
      pdfs: [
        {
          pdfTitle: "Download Floor plan",
          pdfUrl: "/assets/pdfs/sawant-residency-bro.pdf",
        },
      ],
      status: "In Progress",
    },
    {
      projectID: "project2",
      projectName: "Sawant Vihar",
      projectImages: [
        "/assets/content-images/banner4.jpg",
        "/assets/content-images/banner5.jpg",
        "/assets/content-images/banner6.jpg",
        "/assets/content-images/banner3.jpg",
      ],
      projectDetailsList: [
        {
          title: "Project Introduction",
          details: `<p><strong>'Sawant Vihar'</strong> a Project by <strong>'SAWANT BUILDERS'</strong> offers '6' apartments with lift and individual stilted parking in a gated building complex. The project is located within walking distance from the market, bustand and all other amenities like schools hospital etc yet located in a quite and serene locality.</p>
            `,
        },
        {
          title: "Project Amenities & Specifications",
          details: `
          <div className="row row-cols-1 row-cols-md-2">
          <div className="col col-md-4">
          <h5 className="text-primary">Amenities</h5>
          <ul className="list">
          <li>Security</li>
          <li>Gated Complex</li>
          <li>Stilt Parking</li>
          <li>Elivators</li>
          </ul>
          </div> 
          <div className="col col-md-8">
           <h5 className="text-primary">Specifications</h5>
           <ul className="list">
          <li>R.C.C Framed structure</li>
          <li>Vitrified flooring</li>
          <li>Granite / Marble skills</li>
          <li>Designer tiles for bathrooms, Pastel shades sanitaryware</li>
          <li>Hot/cold Provision</li>
          <li>Kitchen platform with Stainless Steel Sink and Granite top</li>
          <li>Teak Wood pannelled main door with brass fittings, other dooes to be of teak wood frame with marine ply panel/moulded doors/windows/sliding Alluminium/UPVC</li>
          <li>Concealed electrical conduits with necessary lug/power/AC points & modular switches</li>
          <li>Cable T.V provision</li>
          <li>Interiors with acrylic distemper & Exteriors with weather protective Paints</li>
          <li>CPVC Rust-free plumbing</li>
          </ul>
          </div>
          </div>
          `,
        },
        {
          title: "Project Location",
          details: `
            <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30744.159126575225!2d73.92690091425048!3d15.590586091360644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf966fcc6c3167%3A0x1d63cb9fcf98a43!2sDicholi%2C%20Goa!5e0!3m2!1sen!2sin!4v1719499303391!5m2!1sen!2sin"
                  allowfullscreen=""
                  className="map-iframe mb-20"
                  loading="lazy"
                ></iframe>
  
                   <h5 class="text-decoration-underline fs-6">Address</h5>
                          <p className="mb-25">TF-8, 3rd Floor, MAPUSA HEIGHTS,
                          Near Judicial Court, Alto Mapusa, 
                          Bardez, Goa. 403507</p>
  
                          <h5 class="text-decoration-underline fs-6">Contact Details</h5>
                          <p><strong>Mobile:</strong> +91 9823016310 / 9284923037</p>
                          <p><strong>Telephone:</strong> +91 832 2910310</p>
                          <p className="mb-0"><strong>Email:</strong> sawantbuildersgoa@gmail.com</p>
                          
          `,
        },
      ],
      primeLocationsFromProject: [
        // { location: "Bicholim City", distance: "3.5" },
        // { location: "Mapusa City", distance: "18" },
        // { location: "Thivim Train Station", distance: "12" },
      ],
      pdfs: [
        {
          pdfTitle: "Download Floor plan",
          pdfUrl: "/assets/pdfs/sawant-vihar-bro.pdf",
        },
      ],
      status: "In Progress",
    },
  ];