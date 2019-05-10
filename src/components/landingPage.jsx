import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", height: "100%", margin: "auto", overflow: "auto"}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1466&q=80"
              alt="My Avatar"
              className="avatar-img jello-horizontal"
            />

            <div className="banner-text">
              <h1 className='text-flicker-in-glow'>FULL STACK WEB DEVELOPER</h1>

              <hr />
              <p className='tracking-in-expand'>
                HTML/CSS | Bootstrap | JavaScript | React | Redux | NodeJS |
                Express | MongoDB
              </p>

              <div className="social-links fade-in">
                {/* LinkedIn */}
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className=" fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/* Github */}
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className=" fa fa-github-square" aria-hidden="true" />
                </a>
                {/* Freecodecamp */}
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className=" fa fa-free-code-camp" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
