import React, { Component } from "react";
import Slider from "react-slick";

import Project from "../project";

class MernProjects extends Component {
  render() {
    const settings = {
      infinite: true,
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      appendDots: dots => (
        <ul style={{ margin: "-2rem", borderRadius: "20px", padding: "10px" }}>
          {" "}
          {dots}{" "}
        </ul>
      ),
      customPaging: i => (
        <div
          style={{
            width: "30px",
            color: "black",
            border: "1px black solid"
          }}
        >
          P{i + 1}
        </div>
      )
    };

    return (
      // <div className="projects-grid">
      <div>
        <Slider {...settings}>
        <Project
            modaltitle={"MERN NEWS SCRAPPER"}
            modalheader={"MongoDB - NodeJS - Express - ReactJS - Heroku - MVC"}
            modaltext={
              "FUNCTIONALITY -- A single page MERN STACK application that searches for articles from the New York Times API. Searched articles can be saved as well as deleted. The app uses Node/Express for the server and routing, and mongoDB to save and retrieve articles from the database."
            }
            cardBackgroundURL={
              "https://images.unsplash.com/photo-1498286668407-428a063f9aff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2071&q=80"
            }
            githubURL={"https://github.com/docvvk/react-newsapp"}
            demoURL={"https://react-newsscrap.herokuapp.com/"}
          />

<Project
            modaltitle={"COMING SOON..."}
            modalheader={"LATEST WEB TECHNOLOGIES"}
            modaltext={
              "Working on building more meaningful projects and learning new web technologies."
            }
            cardBackgroundURL={
              "https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            }
            // githubURL={"https://github.com/docvvk/WordGuess-Cli"}
            // demoURL={"https://github.com/docvvk/WordGuess-Cli"}
          />

          <Project
            modaltitle={"COMING SOON..."}
            modalheader={"LATEST WEB TECHNOLOGIES"}
            modaltext={
              "Working on building more meaningful projects and learning new web technologies."
            }
            cardBackgroundURL={
              "https://images.pexels.com/photos/39349/teens-robot-future-science-39349.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            }
            // githubURL={"https://github.com/docvvk/WordGuess-Cli"}
            // demoURL={"https://github.com/docvvk/WordGuess-Cli"}
          />
        </Slider>
      </div>
    );
  }
}

export default MernProjects;
