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
          details: `<p><strong>'Sawant Residency'</strong> a Project by <strong>'SAWANT BUILDERS'</strong> a firm with its proprietor having more than 34 years experience in the Real Estate industry. Sawant Residency offers Luxurious, modern, affordable quality homes at a prime location with proximity to all the amenities like school, hospital, market, parks within a radius of 2km.</p>
            <p>Our motto is to provide quality homes, with affordable prices and timely delivery</p>
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
          <li>Teak Wood pannelled main door with brass fittings, other doors to be of teak wood frame with marine ply panel/moulded doors/windows/sliding Aluminium/UPVC</li>
          <li>Concealed electrical conduits with necessary plug/power/AC points & modular switches</li>
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
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3842.8331678151685!2d73.93787807512604!3d15.60055998501307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDM2JzAyLjAiTiA3M8KwNTYnMjUuNiJF!5e0!3m2!1sen!2sin!4v1722100567741!5m2!1sen!2sin"
                  allowfullscreen=""
                  className="map-iframe mb-20"
                  loading="lazy"
                ></iframe>
  
                   <h5 class="text-decoration-underline fs-6">Address</h5>
                          <p className="mb-25">Near ITI Bordem <span class="text-nowrap">Bicholim-Goa</span></p>
  
                          <h5 class="text-decoration-underline fs-6">Contact Details</h5>
                          <p><strong>Mobile:</strong> +91 <a href="tel:+919823016310" class="mobile-link link">9823016310</a> / <a href="tel:+91 9823016310" class="mobile-link link">9284923037</a></p>
                          <p><strong>Telephone:</strong> +91 <a href="tel:+919823016310" className="mobile-link link">832-2910310</a></p>
                          <p className="mb-0"><strong>Email:</strong> <a href="mailto:sawantbuildersgoa@gmail.com" className="link">
                          sawantbuildersgoa@gmail.com</a></p>
                          
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
          details: `<p><strong>'Sawant Vihar'</strong> a Project by <strong>'SAWANT BUILDERS'</strong> offers '6' apartments with lift and individual stilted parking in a gated building complex. The project is located within walking distance from the market, bustand and all other amenities like schools, hospital etc. yet located in a quite and serene locality.</p>
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
          <li>Teak Wood pannelled main door with brass fittings, other doors to be of teak wood frame with marine ply panel/moulded doors/windows/sliding Aluminium/UPVC</li>
          <li>Concealed electrical conduits with necessary plug/power/AC points & modular switches</li>
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
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3843.0451948775094!2d73.95050407512585!3d15.589233985022897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDM1JzIxLjIiTiA3M8KwNTcnMTEuMSJF!5e0!3m2!1sen!2sin!4v1722100717574!5m2!1sen!2sin"
                  allowfullscreen=""
                  className="map-iframe mb-20"
                  loading="lazy"
                ></iframe>
                      <h5 class="text-decoration-underline fs-6">Address</h5>
                          <p className="mb-25">Vasudev Nagar, <span class="text-nowrap">Bicholim-Goa</span></p>
  
                          <h5 class="text-decoration-underline fs-6">Contact Details</h5>
                          <p><strong>Mobile:</strong> +91 <a href="tel:+919823016310" class="mobile-link link">9823016310</a> / <a href="tel:+91 9823016310" class="mobile-link link">9284923037</a></p>
                          <p><strong>Telephone:</strong> +91 <a href="tel:+919823016310" className="mobile-link link">832-2910310</a></p>
                          <p className="mb-0"><strong>Email:</strong> <a href="mailto:sawantbuildersgoa@gmail.com" className="link">
                          sawantbuildersgoa@gmail.com</a></p>
                          
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