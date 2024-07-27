import React, { useState } from "react";
import ReactHtmlParser from "html-react-parser";

const Accordion = ({
  projectID,
  title,
  details,
  isActive,
  toggleAccordion,
}) => {

  const id = title.toLowerCase().replaceAll(" ", "");
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${id}${projectID}`}
          onClick={() => toggleAccordion}
          aria-expanded={isActive}
          aria-controls={id + "" + projectID}
        >
          {title} ({isActive ? "true" : "false"})
        </button>
      </h2>
      <div
        id={id + "" + projectID}
        data-bs-parent={`#${projectID}`}
        className={`accordion-collapse collapse ${isActive ? "show" : ""}`}
      >
        <div className="accordion-body">{ReactHtmlParser(details)}</div>
      </div>
    </div>
  );
};
export default Accordion;
