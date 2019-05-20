import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>
            <h2 style={{ padding: "2em" }}>Vivek Malhan</h2>
            <h4 style={{ colr: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Officiis, neque. Odit illo quasi sunt omnis dolore eaque earum,
              quas architecto dolorum, facilis ipsam blanditiis recusandae
              officia, minima officiis ducimus quibusdam.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Toronto, CA</p>
            <h5>Phone</h5>
            <p>647-327-4455</p>
            <h4>Email</h4>
            <p>vivek.malhan@yahoo.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>

          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={"May 2018"}
              endYear={"Nov 2018"}
              degree={"Full Stack Web Development Coding Bootcamp"}
              schoolName={"University of Toronto, Canada"}
            />
            <Education
              startYear={2003}
              endYear={2008}
              degree={"Bachelors in Dental Surgery"}
              schoolName={"HP University, Shimla, India"}
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>
            <Experience
              startYear={"Nov 2017"}
              endYear={"April 2018"}
              jobName={"Technical Customer Service Representative"}
              jobDescription={""}
            />
            <Experience
              startYear={"May 2018"}
              endYear={"Nov 2018"}
              jobName={"Full Stack Web Development Coding Bootcamp"}
              jobDescription={`Hands on experience in designing User Interface (UI) web applications using HTML5, HTML4, CSS3, CSS2, CSS, XHTML, Java Script, jQuery, jQuery Mobile, Node.js, ReactJS. AJAX, JSON, MVC. 
              \nStrong experience in SQL queries and data modelling. \nExperience in debugging and troubleshooting existing code using Chrome Developer Tools. \nExperience in all phases of Software Development Life Cycle (SDLC) including Analysis, Design, Development, Documentation, Testing, Deployment, Version Control and production support. \nDeep understanding and working experience in Object Oriented JavaScript programming and JavaScript Spring MVC frameworks.`}
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Skills</h2>
            <Skills
                skill={'HTML/CSS'}
                progress={90}
            />
            <Skills
                skill={'Javascript'}
                progress={80}
            />
            <Skills
                skill={'NodeJS'}
                progress={70}
            />
            <Skills
                skill={'React'}
                progress={80}
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
