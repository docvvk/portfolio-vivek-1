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
              "https://images.unsplash.com/photo-1528605105345-5344ea20e269?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            }
            githubURL={"https://github.com/docvvk/liri-node-app"}
            demoURL={"https://mctc.toastmastersclubs.org/"}
            // teckList={['HTML5','CSS3','JAVASCRIPT','jQuery']}
          />

          <Project
            modaltitle={"RESPONSIVE PORTFOLIO WEBSITE"}
            modalheader={"HTML5 - CSS3 - MEDIA QUERIES"}
            modaltext={
              "Fully Responsive Portfolio Website created using only HTML and CSS without any external library."
            }
            cardBackgroundURL={
              "https://images.unsplash.com/photo-1533630160910-65f5a1718c65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            }
            githubURL={"https://github.com/docvvk/Responsive-Portfolio"}
            demoURL={"https://docvvk.github.io/Responsive-Portfolio/"}
          />

          <Project
            modaltitle={"BOOTSTRAP PORTFOLIO WEBSITE"}
            modalheader={"HTML5 - CSS3 - BOOTSTRAP - MEDIA QUIRIES"}
            modaltext={
              "Fully Responsive Portfolio Website created using Bootstrap, HTML and CSS."
            }
            cardBackgroundURL={
              "https://images.unsplash.com/photo-1467444606224-8254b013a046?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1649&q=80"
            }
            githubURL={"https://github.com/docvvk/BootstrapPortfolio"}
            demoURL={"https://docvvk.github.io/BootstrapPortfolio/"}
          />
        </Slider>
      </div>
    );
  }
}

export default WebProjects;
