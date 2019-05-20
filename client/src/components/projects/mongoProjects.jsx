import React, { Component } from "react";
import Slider from "react-slick";

import Project from "../project";

class MongoProjects extends Component {
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
      <div>
        <Slider {...settings}>
          <Project
            modaltitle={"MONGO NEWS SCRAPPER"}
            modalheader={'Node.js | Cheerio | Express | Mongoose | Request | Express-HandleBars | Body-Parser'}
            modaltext={
              "FUNCTIONALITY -- This website pulls scraped news from https://www.npr.org/sections/news/ You can get the latest news by clicking on the “Get New Articles” Button (Top-right). You also have the option to save your favourite article and comment on it as well…… Happy Scraping!"
            }
            cardBackgroundURL={
              "https://images.unsplash.com/photo-1529243856184-fd5465488984?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1669&q=80"
            }
            githubURL={"hhttps://github.com/docvvk/mongo-scrapper"}
            demoURL={"https://floating-anchorage-56997.herokuapp.com/"}
          />

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
              "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1631&q=80"
            }
            // githubURL={"https://github.com/docvvk/WordGuess-Cli"}
            // demoURL={"https://github.com/docvvk/WordGuess-Cli"}
          />
        </Slider>
      </div>
    );
  }
}

export default MongoProjects;
