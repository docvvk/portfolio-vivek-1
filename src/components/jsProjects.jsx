import React, { Component } from "react";
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

import Project from "./project";

class JSProjects extends Component {
  render() {
    const settings = {
      // className: "center",
      // centerMode: true,
      infinite: true,
      dots: true,
      // dotsClass: "slick-dots",
      // arrows: true,
      // centerPadding: "2rem",
      
      slidesToShow: 3,
      slidesToScroll: 1,
      
      // autoplay: true,
      speed: 500,
      // autoplaySpeed: 1000,
      // cssEase: "linear",
      appendDots: dots => (
        // <div
        //   style={{
        //     backgroundColor: "#fff",
        //     borderRadius: "20px",
        //     padding: "10px"
        //   }}
        // >
          <ul style={{ margin: "-1rem", borderRadius: "20px",
               padding: "10px" }}> {dots} </ul>
        // </div>
      ),
      customPaging: i => (
        <div
          style={{
            width: "30px",
            color: "black",
            border: "1px black solid"
          }}
        >
          {i + 1}
        </div>
      )
      // pauseOnHover: true,

      // customPaging: function() {
      //   return (
      //     <a href >
      //       <img src='https://picsum.photos/50' alt='project pic' />
      //     </a>
      //   );
      // },

    };

    return (
      // <div className="projects-grid">
      <div>
        <Slider {...settings}>
          <div>
          <Project
          modaltitle={"Soccer Trivia"}
          modalheader={"Technologies"}
          modaltext={
            "Single page React Web Game Trivia game created using JavaScript for the logic and jQuery to manipulate HTML 10 questions randomly generated with countdown timer for answer.Game gives correct answer with gif/image after user guess.After 10 questions, app will display score with the option to restart the game.Soccer theme used with soccer related gifs."
          }
          cardBackgroundURL={
            "https://uploads-ssl.webflow.com/5b6e27a9e5c31c6082c7e58e/5b7741cf4ce7f4467750181f_SoccerTrivia.png"
          }
          githubURL={"https://github.com/docvvk/react-mindgame"}
          demoURL={"https://thawing-shore-30878.herokuapp.com/"}
        />
          </div>
          <div>
          <Project
          modaltitle={"Soccer Trivia"}
          modalheader={"Technologies"}
          modaltext={
            "Single page React Web Game Trivia game created using JavaScript for the logic and jQuery to manipulate HTML 10 questions randomly generated with countdown timer for answer.Game gives correct answer with gif/image after user guess.After 10 questions, app will display score with the option to restart the game.Soccer theme used with soccer related gifs."
          }
          cardBackgroundURL={
            "https://uploads-ssl.webflow.com/5b6e27a9e5c31c6082c7e58e/5b7741cf4ce7f4467750181f_SoccerTrivia.png"
          }
          githubURL={"https://github.com/docvvk/react-mindgame"}
          demoURL={"https://thawing-shore-30878.herokuapp.com/"}
        />
          </div>
          <div>
          <Project
          modaltitle={"Soccer Trivia"}
          modalheader={"Technologies"}
          modaltext={
            "Single page React Web Game Trivia game created using JavaScript for the logic and jQuery to manipulate HTML 10 questions randomly generated with countdown timer for answer.Game gives correct answer with gif/image after user guess.After 10 questions, app will display score with the option to restart the game.Soccer theme used with soccer related gifs."
          }
          cardBackgroundURL={
            "https://uploads-ssl.webflow.com/5b6e27a9e5c31c6082c7e58e/5b7741cf4ce7f4467750181f_SoccerTrivia.png"
          }
          githubURL={"https://github.com/docvvk/react-mindgame"}
          demoURL={"https://thawing-shore-30878.herokuapp.com/"}
        />
          </div>
          <div>
          <Project
          modaltitle={"Soccer Trivia"}
          modalheader={"Technologies"}
          modaltext={
            "Single page React Web Game Trivia game created using JavaScript for the logic and jQuery to manipulate HTML 10 questions randomly generated with countdown timer for answer.Game gives correct answer with gif/image after user guess.After 10 questions, app will display score with the option to restart the game.Soccer theme used with soccer related gifs."
          }
          cardBackgroundURL={
            "https://uploads-ssl.webflow.com/5b6e27a9e5c31c6082c7e58e/5b7741cf4ce7f4467750181f_SoccerTrivia.png"
          }
          githubURL={"https://github.com/docvvk/react-mindgame"}
          demoURL={"https://thawing-shore-30878.herokuapp.com/"}
        />
          </div>
          <div>
          <Project
          modaltitle={"Soccer Trivia"}
          modalheader={"Technologies"}
          modaltext={
            "Single page React Web Game Trivia game created using JavaScript for the logic and jQuery to manipulate HTML 10 questions randomly generated with countdown timer for answer.Game gives correct answer with gif/image after user guess.After 10 questions, app will display score with the option to restart the game.Soccer theme used with soccer related gifs."
          }
          cardBackgroundURL={
            "https://uploads-ssl.webflow.com/5b6e27a9e5c31c6082c7e58e/5b7741cf4ce7f4467750181f_SoccerTrivia.png"
          }
          githubURL={"https://github.com/docvvk/react-mindgame"}
          demoURL={"https://thawing-shore-30878.herokuapp.com/"}
        />
          </div>
          <div>
          <Project
          modaltitle={"Soccer Trivia"}
          modalheader={"Technologies"}
          modaltext={
            "Single page React Web Game Trivia game created using JavaScript for the logic and jQuery to manipulate HTML 10 questions randomly generated with countdown timer for answer.Game gives correct answer with gif/image after user guess.After 10 questions, app will display score with the option to restart the game.Soccer theme used with soccer related gifs."
          }
          cardBackgroundURL={
            "https://uploads-ssl.webflow.com/5b6e27a9e5c31c6082c7e58e/5b7741cf4ce7f4467750181f_SoccerTrivia.png"
          }
          githubURL={"https://github.com/docvvk/react-mindgame"}
          demoURL={"https://thawing-shore-30878.herokuapp.com/"}
        />
          </div>
        </Slider>

        {/* PROJECT 1 */}

        {/* <Project
          modaltitle={"Soccer Trivia"}
          modalheader={"Technologies"}
          modaltext={
            "Single page React Web Game Trivia game created using JavaScript for the logic and jQuery to manipulate HTML 10 questions randomly generated with countdown timer for answer.Game gives correct answer with gif/image after user guess.After 10 questions, app will display score with the option to restart the game.Soccer theme used with soccer related gifs."
          }
          cardBackgroundURL={
            "https://uploads-ssl.webflow.com/5b6e27a9e5c31c6082c7e58e/5b7741cf4ce7f4467750181f_SoccerTrivia.png"
          }
          githubURL={"https://github.com/docvvk/react-mindgame"}
          demoURL={"https://thawing-shore-30878.herokuapp.com/"}
        />
        <Project
          modaltitle={"Soccer Trivia"}
          modalheader={"Technologies"}
          modaltext={
            "Single page React Web Game Trivia game created using JavaScript for the logic and jQuery to manipulate HTML 10 questions randomly generated with countdown timer for answer.Game gives correct answer with gif/image after user guess.After 10 questions, app will display score with the option to restart the game.Soccer theme used with soccer related gifs."
          }
          cardBackgroundURL={
            "https://uploads-ssl.webflow.com/5b6e27a9e5c31c6082c7e58e/5b7741cf4ce7f4467750181f_SoccerTrivia.png"
          }
          githubURL={"https://github.com/docvvk/react-mindgame"}
          demoURL={"https://thawing-shore-30878.herokuapp.com/"}
        />
        <Project
          modaltitle={"Soccer Trivia"}
          modalheader={"Technologies"}
          modaltext={
            "Single page React Web Game Trivia game created using JavaScript for the logic and jQuery to manipulate HTML 10 questions randomly generated with countdown timer for answer.Game gives correct answer with gif/image after user guess.After 10 questions, app will display score with the option to restart the game.Soccer theme used with soccer related gifs."
          }
          cardBackgroundURL={
            "https://uploads-ssl.webflow.com/5b6e27a9e5c31c6082c7e58e/5b7741cf4ce7f4467750181f_SoccerTrivia.png"
          }
          githubURL={"https://github.com/docvvk/react-mindgame"}
          demoURL={"https://thawing-shore-30878.herokuapp.com/"}
        /> */}
      </div>
    );
  }
}

export default JSProjects;
