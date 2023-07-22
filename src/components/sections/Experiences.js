import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "Specialized Institute Of Applied Technology NTIC",
    years: "Oct 2020 - Aug 2022",
    content:
      "Computer Programming/Programmer, Computer Programming/Programmer, General",
  },
  {
    id: 2,
    title: "Meta Back-End Developer Specialization",
    years: "March 2023",
    content: ""
  },
  {
    id: 3,
    title: "Meta Front-End Developer Specialization",
    years: "March 2023",
    content: ""
  }
];

const experienceData = [
  {
    id: 1,
    title: "Internship MERN stack developer",
    years: "March 2022",
    content: "build application with React.js and Node.js + Express and JWT",
  }, {
    id: 2,
    title: "Internship Web developer",
    years: "March 2022 - Present",
    content: "creation of a web application that manages requests and storage of diplomas. The admin panel manages degree status and student information, it helps to manage degree storage by creating a unique number referencing the location of degree to users.",
  },
  {
    id: 3,
    title: "Software developer",
    years: "March 2022 - Present",
    content: "Creation of desktop and web applications . Implementation of the OpenAi API to create articles from a keyword",
  }
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experience" />
        <div className="row">
          <div className="col-md-6">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
