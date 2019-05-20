import React, { Component } from "react";
import Slider from "react-slick";

import Project from "../project";

class NodeProjects extends Component {
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
            modaltitle={"LIRI NODE APP"}
            modalheader={'JavaScript - NodeJS - TwitterAPI - SpotifyAPI - ODMB API - Dotenv - Chalk - Chalk Animation'}
            modaltext={
              "APP INSTRUCTIONS -- The app accesses Twitter, Spotify and OMBD through their APIs to receive different levels of information. The Twitter API provides 20 of the user's most recent tweets. The Spotify API allows the user to search for a song by title or title and band name; it provides multiple responses. OMBD provides selected information about the title of the film searched. Twitter and Spotify require any potential users to provide their own .env file with keys to the different APIs. OMBD has an access key built into the code but it would work more reliably if you provided your personal key. Default searches are provided for both OMBD and Spotify.There is no user interface for this application, it is recommend you either fork the code to your own system."
            }
            cardBackgroundURL={
              "https://images.unsplash.com/photo-1512446733611-9099a758e5e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            }
            githubURL={"https://github.com/docvvk/liri-node-app"}
            demoURL={"https://github.com/docvvk/liri-node-app"}
            // teckList={['HTML5','CSS3','JAVASCRIPT','jQuery']}
          />

          <Project
            modaltitle={"CLI WORD GUESS GAME"}
            modalheader={"JavaScript - NodeJS - Inquirer - Chalk - Chalk Animation"}
            modaltext={
              "APP INSTRUCTIONS -- The index.js runs the actual game with a dependency on the constructor, word.js, which also has a dependency on the letter.js constructor. When the game is run in node, the user is prompted to enter a letter to try to guess the word, which starts with blanks. If the letter is in the word, the word/underscore representation is shown with the letter revealed. If the letter is not in the word, the user is told 'Sorry...' and given another chance to guess, with a total of 8 wrong guesses possible."
            }
            cardBackgroundURL={
              "https://images.unsplash.com/photo-1498435999018-6803de1f1c1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1653&q=80"
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
              "https://images.unsplash.com/photo-1548705085-101177834f47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
            }
            githubURL={"https://github.com/docvvk/FriendFinder"}
            demoURL={"https://desolate-stream-21303.herokuapp.com/"}
          />
        </Slider>
      </div>
    );
  }
}

export default NodeProjects;
