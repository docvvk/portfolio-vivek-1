import React, { Component } from "react";
import Slider from "react-slick";

import Project from "../project";

class JSProjects extends Component {
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
            modaltitle={"SOCCER TRIVIA"}
            modalheader={'HTML5 - CSS3 - JavaScript - jQuery'}
            modaltext={
              "Single page React Web Game Trivia game created using JavaScript for the logic and jQuery to manipulate HTML 10 questions randomly generated with countdown timer for answer.Game gives correct answer with gif/image after user guess.After 10 questions, app will display score with the option to restart the game.Soccer theme used with soccer related gifs."
            }
            cardBackgroundURL={
              "https://uploads-ssl.webflow.com/5b6e27a9e5c31c6082c7e58e/5cbe9ec5ffa34dccb4c75d6f_SoccerTrivia.png"
            }
            githubURL={"https://github.com/docvvk/TriviaGame"}
            demoURL={"https://docvvk.github.io/TriviaGame/"}
            techList={['HTML5','CSS3','JAVASCRIPT','jQuery']}
          />

          <Project
            modaltitle={"JS-SOUNDBOX"}
            modalheader={'HTML5 - CSS3 - Vanilla JavaScript'}
            modaltext={
              "Web based application playing different sounds by pressing keys ! \nPress the keys shown on the webpage to play different sounds. \nRotate with slider to rotate the keys."
            }
            cardBackgroundURL={
              "https://uploads-ssl.webflow.com/5b6e27a9e5c31c6082c7e58e/5cbe9e62ffa34d268ec75b41_jsSoundbox.png"
            }
            githubURL={"https://github.com/docvvk/js-drumkit-1"}
            demoURL={"https://docvvk.github.io/js-drumkit-1/"}
          />

          <Project
            modaltitle={"STARWARS RPG"}
            modalheader={"HTML5 - CSS3 - Vanilla JavaScript"}
            modaltext={
              "Game LogicWhen the game starts, the player will choose a character by clicking on the fighter's picture. The player will fight as that character for the rest of the game.The player must then defeat all of the remaining fighters. Enemies should be moved to a different area of the screen.The player chooses an opponent by clicking on an enemy's picture.Once the player selects an opponent, that enemy is moved to a defender area.The player will now be able to click the attack button.Whenever the player clicks attack, their character damages the defender. The opponent will lose HP (health points). These points are displayed at the bottom of the defender's picture.The opponent character will instantly counter the attack. When that happens, the player's character will lose some of their HP. These points are shown at the bottom of the player character's picture.The player will keep hitting the attack button in an effort to defeat their opponent.The player wins the game by defeating all enemy characters. The player loses the game the game if their character's HP falls to zero or below."
            }
            cardBackgroundURL={
              "https://uploads-ssl.webflow.com/5b6e27a9e5c31c6082c7e58e/5cbe9f1aae2b884418061170_StarWarsRPG.png"
            }
            githubURL={"https://github.com/docvvk/Star-Wars-RPG-Game"}
            demoURL={"https://docvvk.github.io/Star-Wars-RPG-Game/"}
          />

          <Project
            modaltitle={"WORD GUESS GAME"}
            modalheader={"Technologies"}
            modaltext={
              "INSTRUCTIONS \nPress any key to start the game.\nYou have to guess a random word chosen by computer.\nYou can choose a letter between 'a' to 'z'.\nYou have 10 lives to guess the word or you will be hanged (in the game!)."
            }
            cardBackgroundURL={
              "https://uploads-ssl.webflow.com/5b6e27a9e5c31c6082c7e58e/5cbe9bb68edd987fccd321d3_WordGuessGame.png"
            }
            githubURL={"https://github.com/docvvk/Word-Guess-Game"}
            demoURL={"https://docvvk.github.io/Word-Guess-Game/"}
          />

          <Project
            modaltitle={"ROCK PAPER SCISSORS"}
            modalheader={"HTML5 - CSS3 - JavaScript - Bootstrap - Firebase - JQuery"}
            modaltext={
              "Web based multiplayer game with chat functionality. INSTRUCTIONS -- Rock Paper Scissors multiplayer with chat using firebase.This application allows two users with separate sessions to play against one another. The game follows straightforward rock paper scissors rules. Users' stats, choices, and chat messages are tracked and updated in realtime via Firebase."
            }
            cardBackgroundURL={
              "https://uploads-ssl.webflow.com/5b6e27a9e5c31c6082c7e58e/5cbea13acf61ecbaf60076cc_RPS.png"
            }
            githubURL={"https://github.com/docvvk/RPS-Multiplayer"}
            demoURL={"https://docvvk.github.io/RPS-Multiplayer/"}
          />

          <Project
            modaltitle={"CRYSTAL COLLECTOR"}
            modalheader={"HTML5 - CSS3 - JavaScript - BootStrap"}
            modaltext={
              "GAME INSTRUCTIONS -- This is a guessing game using numbers where the player will guess with numbers.There will be four crystals displayed as buttons on the page.The player will be shown a random number at the start of the game.When the player clicks on a crystal it will add a specific amount of points to the player's total score.The player wins the game if their total score matches the random number and the player loses the game if their total score goes above the random number.The amount of points each crystal adds is not shown to the player, but their total score is displayed and updated after each crystal is clicked.The number of games won and lost will be displayed.If the player successfully matches their total score to the random number they get 1 win, if the player's total score is above the random number the player get 1 loss, either way the game restarts.When the game is restarted, the player will be shown a new random number, all the crystals will now have 4 different hidden values, and the player's total score is reset to 0."
            }
            cardBackgroundURL={
              "https://uploads-ssl.webflow.com/5b6e27a9e5c31c6082c7e58e/5cbeaf35ffa34d1f81c79978_CrystalCollecter.png"
            }
            githubURL={"https://github.com/docvvk/unit-4-game"}
            demoURL={"https://docvvk.github.io/unit-4-game/"}
          />

<Project
            modaltitle={"INFO APPLICATION"}
            modalheader={"HTML5 - CSS3 - JavaScript - BootStrap - jQuery - API - Ajax - json"}
            modaltext={
              "LEARNING POINTS -- Web application made using Giphy API, The New York Times API, Google Maps API and Weather API. Dynamic web page that populates with gifs when you enter your query in the query box and click submit.Apply ajax call to get API data from different APIs.Create data attribute as a class to store dataUse javascript along with jQuery to add or change the desired behaviour of web page.Use jQuery click event to trigger data display."
            }
            cardBackgroundURL={
              "https://uploads-ssl.webflow.com/5b6e27a9e5c31c6082c7e58e/5cc25af40a7b496bfd0059f5_InfoApp.png"
            }
            githubURL={"https://github.com/docvvk/GifTastic"}
            demoURL={"https://docvvk.github.io/GifTastic/"}
          />
        </Slider>
      </div>
    );
  }
}

export default JSProjects;
