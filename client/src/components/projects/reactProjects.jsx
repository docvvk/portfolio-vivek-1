import React, { Component } from "react";
import Slider from "react-slick";

import Project from "../project";

class ReactProjects  extends Component {
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
            modaltitle={"REACT MIND GAME"}
            modalheader={'React - Fbemitter - Lodash - Heroku'}
            modaltext={
              "FUNCTIONALITY -- Test your memory skills with this Single Page React Web Game. Match similar cards and the matched cards disappear. Clear the board and You Win !!"
            }
            cardBackgroundURL={
              "https://uploads-ssl.webflow.com/5b6e27a9e5c31c6082c7e58e/5cda0b9eb7756672d6933826_ReactMindGame.png"
            }
            githubURL={"https://github.com/docvvk/react-mindgame"}
            demoURL={"https://arcane-shelf-25894.herokuapp.com"}
            // teckList={['HTML5','CSS3','JAVASCRIPT','jQuery']}
          />

          <Project
            modaltitle={"REACT IMAGE FINDER"}
            modalheader={"Material-UI - Axios - Express - React - Webpack - GH-PAGES - Pixalbay API"}
            modaltext={
              "FUNCTIONALITY -- React & Material UI Image finder app created using Pixabay API and deployed on Github environment. Click to enlarge the Image and Right Click to download !"
            }
            cardBackgroundURL={
              "https://images.unsplash.com/photo-1515342724109-4653eccad95f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            }
            githubURL={"https://github.com/docvvk/react-image-finder"}
            demoURL={"https://docvvk.github.io/react-image-finder/"}
          />
          <Project
            modaltitle={"REACT NEWS SCRAPPER"}
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
        </Slider>
      </div>
    );
  }
}

export default ReactProjects ;
