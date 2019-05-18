import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import { Hero } from "@front10/landing-page-book/dist/components";
import "bootstrap/dist/css/bootstrap.min.css";
import "@front10/landing-page-book/dist/themes/default/index.css";
import Maps from "./aboutMe/maps";
import Contact from "./aboutMe/contact";
import QuickMessage from "./aboutMe/quickMessage";


class AboutMe extends Component {
  render() {
    return (
      <div className="App">
        {/* <Hero
          opacity={1}
          overlayColor="black"
        //   subHeader="React components to build!"
          particlesSugar="crazyStars"
          height="100%"
        /> */}
              <Hero
          opacity={1}
          overlayColor="#373D45"
          particlesSugar="crazyStars"
          height="100%"
        >
        <div style={ { width:"80%", margin: "4rem auto", height: "20rem" } }>
        <Grid className="aboutMe-components">
          <Cell className="locationTab col={4} text-center typewriter">
            <h4 className="tabHeading typewriter-text">YOU CAN SEE ME HERE</h4>
            <Maps />
          </Cell>
          <Cell className="contact-info locationTab col={4}">
            <h4 className="tabHeading typewriter-text">CONTACT INFORMATION</h4>
            <Contact />
          </Cell>
          <Cell className="locationTab col={4} text-center">
            <h4 className="tabHeading typewriter-text">SEND A QUICK MESSAGE</h4>
            <QuickMessage />
          </Cell>
        </Grid>
        </div>
        </Hero>
        
        {/* </Hero> */}
      </div>
    );
  }
}

export default AboutMe;
