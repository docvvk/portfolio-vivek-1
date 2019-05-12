import React, { Component } from "react";
import Slider from "react-slick";

import Project from "../project";

class WebProjects extends Component {
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
            modaltitle={"MALTON COMMUNITY TOASTMASTERS WEBSITE"}
            modalheader={'Website Administrator for Malton Community Toastmasters Club !'}
            modaltext={
              "TECHNOLOGIES USED -- FreeToastHost 3 and its inbuilt functions for custom CSS and editing.FreeToastHost is a web-host specifically for Toastmasters clubs and districts anywhere in the world. Each website comes with easy-to-use web-based software ideal for any Toastmasters club. Providing your club is listed on Toastmasters.org, there is no-cost for this service! FreeToastHost was created by a Toastmaster, and is maintained and supported by a group of Toastmasters, with the cooperation of Toastmasters International. FreeToastHost websites use the domain names ToastmastersClubs.org and ToastmastersDistricts.org for the club and district websites, respectively."
            }
            cardBackgroundURL={
              "https://uploads-ssl.webflow.com/5b6e27a9e5c31c6082c7e58e/5cc2f751a34976998395c9d1_MCTC.png"
            }
            githubURL={"https://github.com/docvvk/liri-node-app"}
            demoURL={"https://mctc.toastmastersclubs.org/"}
            // teckList={['HTML5','CSS3','JAVASCRIPT','jQuery']}
          />

          <Project
            modaltitle={"CLI WORD GUESS GAME"}
            modalheader={"JavaScript - NodeJS - Inquirer - Chalk - Chalk Animation"}
            modaltext={
              "APP INSTRUCTIONS -- The index.js runs the actual game with a dependency on the constructor, word.js, which also has a dependency on the letter.js constructor. When the game is run in node, the user is prompted to enter a letter to try to guess the word, which starts with blanks. If the letter is in the word, the word/underscore representation is shown with the letter revealed. If the letter is not in the word, the user is told 'Sorry...' and given another chance to guess, with a total of 8 wrong guesses possible."
            }
            cardBackgroundURL={
              "https://uploads-ssl.webflow.com/5b6e27a9e5c31c6082c7e58e/5b779f0444c0e7e626dc7086_WordGuessCLI.jpg"
            }
            githubURL={"https://github.com/docvvk/WordGuess-Cli"}
            demoURL={"https://github.com/docvvk/WordGuess-Cli"}
          />

          <Project
            modaltitle={"SOCIAL NETWORK APP"}
            modalheader={"JavaScript - NodeJS - Express - jQuery - Bootstrap - Heroku - MVC"}
            modaltext={
              "FUNCTIONALITY -- Web application created by Express and Node and deployed on Heroku! To use our web service, simply go to our homepage and take our state-of-the-art survey. Immediately after submitting the survey, your perfect best friend will pop up. We also have an API you can access to the network's users and their personalised information for research purposes."
            }
            cardBackgroundURL={
              "https://uploads-ssl.webflow.com/5b6e27a9e5c31c6082c7e58e/5cc2f03cffd30f8c2abb8291_DisneySocialApp.png"
            }
            githubURL={"https://github.com/docvvk/FriendFinder"}
            demoURL={"https://desolate-stream-21303.herokuapp.com/"}
          />
        </Slider>
      </div>
    );
  }
}

export default WebProjects;
