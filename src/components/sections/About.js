import React from "react";
import TrackVisibility from "react-on-screen";
// import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";

// const aboutContent = {
//   name: "Bolby",
//   avatarImage: "/images/avatar-2.svg",
//   content:
//     `A front-end developer living in Marrakech, Morocco I'm passionate about creating and developing clean, unique, elegant products. I specialize in building Websites for small to medium size business. I keep my code clean, readable, modular and well refactored. I enjoy working with complex user interfaces
//     \n
//   Skills/Knowledge possessed as follows:

//   • XHTML/HTML/HTML5 , Templating Engine ( Jade/Pug etc.)
//   • CSS/CSS3 (incl. Grid, Flexbox), OOCSS/SMACSS, Bootstrap 3+, Taiwind Css, SASS/SCSS
//   • Responsive Design
//   • JavaScript Core (incl. AJAX, JSON, OOP, ES6/7), TypeScript
//   • React (incl. Router, Hooks, Redux/Thunk, Formik)  Firebase
//   • Git, GulpJs
//   • Knowledge About API Integration with various CMS/Backend environment context such as NodeJs / Strapi (Head less CMS)
      
//     `};

const progressData = [
  {
    id: 1,
    title: "Html 5",
    percantage: 90,
    progressColor: "#FF5733",
  },
  {
    id: 2,
    title: "Css 3",
    percantage: 80,
    progressColor: "#4579AE",
  },
  {
    id: 3,
    title: "JavaScript",
    percantage: 70,
    progressColor: "#FFD15C",
  },
  {
    id: 4,
    title: "React js",
    percantage: 80,
    progressColor: "#4579AE",
  },
  {
    id: 5,
    title: "Tailwind Css",
    percantage: 70,
    progressColor: "#86E7F3",
  },
  {
    id: 6,
    title: "Node.js & express.js",
    percantage: 70,
    progressColor: "#77C66E",
  },
  {
    id: 7,
    title: "TypeScript",
    percantage: 70,
    progressColor: "#21638B",
  },
];

// const counterData = [
//   {
//     id: 1,
//     title: "Projects completed",
//     count: 198,
//     icon: "icon-fire",
//   },
//   {
//     id: 2,
//     title: "Cup of coffee",
//     count: 5670,
//     icon: "icon-cup",
//   },
//   {
//     id: 3,
//     title: "Satisfied clients",
//     count: 427,
//     icon: "icon-people",
//   },
//   {
//     id: 4,
//     title: "Nominees winner",
//     count: 35,
//     icon: "icon-badge",
//   },
// ];

function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="About Me" />
        <div className="row">
        
          <div className="col  triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row">
                <div className="col-md-6">
                  <p className="mt-md-5">
                    A Mern Stack developer living in Marrakech, Morocco I'm passionate about creating and developing clean, unique, elegant products. I keep my code clean, readable, modular and well refactored. I enjoy working with complex user interfaces        <br/><br />
                    Skills/Knowledge possessed as follows:
                    <br /><br />
                    • XHTML/HTML/HTML5 , Templating Engine ( Jade/Pug etc.)
                    <br />
                    • CSS/CSS3 (incl. Grid, Flexbox), Bootstrap 3+, Taiwind Css, SASS/SCSS  
                    <br />
                    • Responsive Design
                    <br />
                    • JavaScript Core (incl. AJAX, JSON, OOP, ES6/7), TypeScript
                    <br />
                    • React (incl. Router, Hooks, Redux/Thunk)  Firebase
                    <br />
                    • Git, GulpJs
                    <br />
                    • MongoDB/mongoose
                    <br/>
                    • Knowledge About API Integration with various CMS/Backend environment context such as NodeJs / Strapi (Head less CMS)
                  </p>
                  <div className="mt-3">
                    <a href="/pdf/Abderrahman_Essebyity.pdf" className="btn btn-default" >
                      Download CV
                    </a>
                  </div>
                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                  ></div>
                </div>
                <div className="col-md-6">
                  {progressData.map((progress) => (
                    <TrackVisibility
                      once
                      key={progress.id}
                      className="progress-wrapper"
                    >
                      <Skill progress={progress} />
                    </TrackVisibility>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="spacer" data-height="70"></div>
        <div className="row fix-spacing">
          {counterData.map((counter) => (
            <div key={counter.id} className="col-md-3 col-sm-6">
              <TrackVisibility once>
                <Counter counterItem={counter} />
              </TrackVisibility>
            </div>
          ))}
        </div> */}

      </div>
    </section>
  );
}

export default About;
