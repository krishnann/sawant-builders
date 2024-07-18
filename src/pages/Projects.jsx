import React, { useState } from "react";
import Accordion from "../components/Accordion";
import Slider from "react-slick";
function Projects({ projects }) {
  const [activeAccordionId, setActiveAccordionId] = useState(
    "projectintroduction"
  );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const toggleAccordion = (accordionId) => {
    setActiveAccordionId(
      activeAccordionId === accordionId ? null : accordionId
    );
  };

  return (
    <div className="container">
      <div className="internal-banner-img banner-1">
        <h1 className="internal-banner-title">Our Projects</h1>
      </div>
      <section className="mt-30">
        {projects.map((project, index) => (
          <>
            <h2>{project.projectName}</h2>
            <div className="row row-cols-lg-2">
              <div className="col">
                <div className="slider-container project-slider mb-20">
                  <Slider {...settings}>
                    {project.projectImages.map((projectImagePath) => (
                      <div>
                        <div
                          className="project-img"
                          title={projectImagePath}
                          style={{
                            background: `center 0 /cover url("${projectImagePath}") no-repeat`,
                          }}
                        ></div>
                      </div>
                    ))}
                  </Slider>
                  <p className="fw-bold mt-15">
                    Status:
                    <span class="badge text-bg-primary ms-5">
                      {project.status}
                    </span>
                  </p>
                </div>
                {project.primeLocationsFromProject.length > 1 && (
                  <>
                    <h5>Major location distance from project</h5>
                    <div class="table-responsive">
                      <table class="table align-middle table-bordered">
                        <thead>
                          <tr>
                            <th>Location</th>
                            <th>Distance</th>
                          </tr>
                        </thead>
                        <tbody>
                          {project.primeLocationsFromProject.map((location) => (
                            <tr>
                              <td>{location.location}</td>
                              <td>{location.distance} Kms</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </>
                )}

                {project.pdfs.map((pdf) => (
                  <a
                    href={`${pdf.pdfUrl}`}
                    target="_blank"
                    className="download-link"
                  >
                    {pdf.pdfTitle}
                  </a>
                ))}
              </div>
              <div className="col">
                <div className="accordion mt-15 mt-lg-0" id={project.projectID}>
                  {project.projectDetailsList.map((accordion, index) => (
                    <Accordion
                      key={index}
                      projectID={project.projectID}
                      title={accordion.title}
                      details={accordion.details}
                      isActive={
                        activeAccordionId ===
                        accordion.title.toLowerCase().replaceAll(" ", "")
                      }
                      toggleAccordion={toggleAccordion}
                    />
                  ))}
                </div>
              </div>
            </div>
            {index !== projects.length - 1 && ( // Conditionally render <hr> except for the last project
              <span className="hr">
                <hr />
                <span className="logo-abbr"></span>
              </span>
            )}
          </>
        ))}
      </section>
      {/* {projects.length > 1 ? (
        <span className="hr">
          <hr />
          <span className="logo-abbr"></span>
        </span>
      ) : (
        ""
      )} */}
    </div>
  );
}

export default Projects;
