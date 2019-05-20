import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class shillsIcons extends Component {
    render() { 
        return ( 
            <div>
                <Grid>
                <Cell className=" col={12} social-links fade-in embed-responsive">
              <h2 className="skills-text">Skills</h2>
              <div className="skills-div">
                <div className="d-flex first-row justify-content-around">
                  <div className="skills-container">
                    {/* <!-- Javascript --> */}
                    <i
                      className="devicon-javascript-plain colored skills-icons"
                    />
                  </div>
                  <div className="skills-container">
                    {/* <!-- HTML --> */}
                    <i class="devicon-html5-plain-wordmark colored skills-icons" />
                  </div>
                  <div className="skills-container">
                    {/* <!-- CSS --> */}
                    <i className="devicon-css3-plain-wordmark colored skills-icons" />
                  </div>
                  <div className="skills-container">
                    {/* <!-- Bootstrap --> */}
                    <i className="devicon-bootstrap-plain-wordmark colored skills-icons" />
                  </div>
                  <div className="skills-container">
                    {/* <!-- jQuery --> */}
                    <i className="devicon-jquery-plain-wordmark colored skills-icons" />
                  </div>
                </div>
                <div className="d-flex second-row justify-content-around">
                  <div className="skills-container">
                    {/* <!-- MySQL --> */}
                    <i className="devicon-mysql-plain colored skills-icons" />
                  </div>
                  <div className="skills-container">
                    {/* <!-- Node.js --> */}
                    <i className="devicon-nodejs-plain colored skills-icons" />
                  </div>
                  <div className="skills-container">
                    {/* <!-- MongoDB --> */}
                    <i className="devicon-mongodb-plain-wordmark colored skills-icons" />
                  </div>
                  <div className="skills-container">
                    {/* <!-- Meteor.js --> */}
                    <i className="devicon-meteor-plain colored skills-icons" />
                  </div>
                  <div className="skills-container">
                    {/* <!-- React.js --> */}
                    <i className="devicon-react-original-wordmark colored skills-icons" />
                  </div>
                </div>
                <div className="d-flex third-row justify-content-around">
                  <div className="skills-container">
                    {/* <!-- Sequelize --> */}
                    <i className="devicon-sequelize-plain colored" />
                  </div>
                  <div className="skills-container">
                    {/* <!-- Mac --> */}
                    <i className="devicon-apple-original skills-icons" />
                  </div>
                  <div className="skills-container">
                    {/* <!-- Trello --> */}
                    <i className="devicon-trello-plain colored skills-icons" />
                  </div>
                  <div className="skills-container">
                    {/* <!-- github --> */}
                    <i className="devicon-github-plain-wordmark colored skills-icons" />
                  </div>
                  <div className="skills-container">
                    {/* <!-- heroku --> */}
                    <i className="devicon-heroku-plain colored skills-icons" />
                  </div>
                </div>
              </div>
            </Cell>

                </Grid>
            </div>
         );
    }
}
 
export default shillsIcons;