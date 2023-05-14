import React, { useState, useEffect } from "react";
import Pagetitle from "../elements/Pagetitle";
import Portfolio from "../elements/Portfolio";

import Doob from '../../assets/works/Doob.png'
import github from "../../assets/works/github.png";
import Leon from "../../assets/works/Leon.png";

import Nubis from "../../assets/works/Nubis.png";
import todo from "../../assets/works/todo.png";
import ecomapp from "../../assets/works/ecom-app.png";
import eStudentRent from "../../assets/works/e-student-rent.png"
import findYourpet from "../../assets/works/find-your-pet.png"
import certificateManager from "../../assets/works/certificate-manager.png"

// import Doob from "images/works/doob.png";

// const filters = [
//   {
//     id: 1,
//     text: "Everything",
//   },
//   {
//     id: 2,
//     text: "creative",
//   },
//   {
//     id: 3,
//     text: "art",
//   },
//   {
//     id: 4,
//     text: "design",
//   },
//   {
//     id: 5,
//     text: "branding",
//   },
// ];

const allData = [
  {
    id: 9,
    title: "Certificate manager",
    link: "https://shark-app-v9rkw.ondigitalocean.app/",
    repos: "https://github.com/abdrahmanES1",
    image: certificateManager,
    tools: ['Python', "Django ", "Css3 ", "Bootstrap", "PostgreSQL"],
  },
  {
    id: 8,
    title: "Find your pet",
    link: "https://find-your-pet.vercel.app/",
    repos: "https://github.com/abdrahmanES1",
    image: findYourpet,
    tools: ["Html5 ", "Css3 ", "Tailwind.css", "React.js", "Django", "Django Rest Framwork", "PostgreSQL"],
  },
  {
    id: 7,
    title: "e student Rent",
    link: "https://e-student-rent.vercel.app/",
    repos: "https://github.com/abdrahmanES1/PFE-client",
    image: eStudentRent,
    tools: ["Html5 ", "Css3 ", "Tailwind.css", "Next.js ", "Node.js", "express.js", "MongoDb"],
  },
  {
    id: 1,
    title: "Leon-Template",
    link: "https://abdrahmanes1.github.io/Leon-Template/",
    repos: "https://github.com/abdrahmanES1/Leon-Template",
    image: Leon,
    tools: ["Html5 ", "Css3 "],
  },
  {
    id: 2,
    title: "Doob-Template",
    link: "https://abdrahmanes1.github.io/Doob-Template/",
    repos: "https://github.com/abdrahmanES1/Doob-Template",
    image: Doob,
    tools: ["Html5 ", "Css3 ", "Vanilla Javascript "],
  },
  {
    id: 3,
    title: "Nubis-template",
    link: "https://nubis.netlify.app/",
    repos: "https://github.com/abdrahmanES1/Nubis_template",
    image: Nubis,
    tools: ["Html5 ", "Css3 ", "Vanilla Javascript "],
  },
  {
    id: 4,
    title: "Todo-App",
    link: "https://abdrahmanes1.github.io/todo-app/",
    repos: "https://github.com/abdrahmanES1/todo-app",
    image: todo,
    tools: ["Html5 ", "Css3 ", "Bootstrap ", "react.js "],
  },
  {
    id: 5,
    title: "Find github user",
    link: "https://abdrahmanes1.github.io/git-users/",
    repos: "https://github.com/abdrahmanES1/git-users",
    image: github,
    tools: ["Html5 ", "Css3 ", "Bootstrap ", "react.js "],
  },
  {
    id: 6,
    title: "ecom app",
    link: "https://ecom-app1.netlify.app/",
    repos: "https://github.com/abdrahmanES1/ecom-app",
    image: ecomapp,
    tools: ["Html5 ", "Css3 ", "Bootstrap ", "react.js "],
  }
];

function Works() {
  const [getAllItems] = useState(allData);
  // const [dataVisibleCount, setDataVisibleCount] = useState(6);
  // const [dataIncrement] = useState(3);
  // const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  // const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    // setActiveFilter(filters[0].text.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= 9));
  }, [getAllItems]);

  // handle filter Change
  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setActiveFilter(e.target.textContent.toLowerCase());
  //   let tempData;
  //   if (e.target.textContent.toLowerCase() === filters[0].text.toLowerCase()) {
  //     tempData = getAllItems.filter((data) => data.id <= dataVisibleCount);
  //   } else {
  //     tempData = getAllItems.filter(
  //       (data) =>
  //         data.category === e.target.textContent.toLowerCase() &&
  //         data.id <= dataVisibleCount
  //     );
  //   }
  //   setVisibleItems(tempData);
  // };


  return (
    <section id="works">
      <div className="container">
        <Pagetitle title="Recent Works" />
        {/* Start Portfolio Filters */}
        {/* <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeInOut"
          animateOnce={true}
        >
          <ul className="portfolio-filter list-inline">
            {filters.map((filter) => (
              <li className="list-inline-item" key={filter.id}>
                <button
                  onClick={handleChange}
                  className={
                    filter.text.toLowerCase() === activeFilter
                      ? "text-capitalize current"
                      : "text-capitalize"
                  }
                >
                  {filter.text}
                </button>
              </li>
            ))}
          </ul>
        </ScrollAnimation> */}
        {/* End Portfolio Filters */}

        {/* Start Portfolio Items */}
        <div className="row portfolio-wrapper">
          {visibleItems.map((item) => (
            <div className="col-md-4 col-sm-6 grid-item h-full" key={item.id}>
              <Portfolio portfolio={item} />
            </div>
          ))}
        </div>
        {/* End Portfolio Items */}
      </div>
    </section>
  );
}

export default Works;
