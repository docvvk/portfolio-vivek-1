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
          <Cell className="locationTab col={4} text-center">
            <h3 className="tabHeading">YOU CAN SEE ME HERE</h3>
            <Maps />
          </Cell>
          <Cell className="contact-info locationTab col={4}">
            <h3 className="tabHeading">CONTACT INFORMATION</h3>
            <Contact />
          </Cell>
          <Cell className="locationTab col={4} text-center">
            <h3 className="tabHeading">SEND A QUICK MESSAGE</h3>
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
