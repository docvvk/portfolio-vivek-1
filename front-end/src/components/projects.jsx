import React, { Component } from "react";
import JSProjects from './jsProjects';
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                fontFamily: 'Anton',
                color: "#fff",
                height: "176px",
                background:
                  "url(https://steamcdn-a.akamaihd.net/steam/apps/448560/header.jpg?t=1531926512) center / cover"
              }}
            >
              React Mindgame
            </CardTitle>
            <CardText>Single page React Web Game</CardText>
            <CardActions border>
              <a
                href="https://github.com/docvvk/react-mindgame"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button colored>Github</Button>
              </a>
              {/* <Button colored>Code</Button> */}
              <a
                href="https://thawing-shore-30878.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button colored>LiveDemo</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project #2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://media.istockphoto.com/photos/search-button-on-virtual-screen-pressed-with-finger-picture-id492960182?k=6&m=492960182&s=612x612&w=0&h=ctN3RjwibhZEu2oV94SQF78TgLX0N9w12sabP4pizls=) center / cover"
              }}
            >
              React Image Finder
            </CardTitle>
            <CardText>
              <p>Image finder web app created using Material UI and Create-React-App</p>
               Search
              images of your choice
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/docvvk/react-image-finder"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button colored>Github</Button>
              </a>
              <a
                href="https://docvvk.github.io/react-image-finder/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button colored>LiveDemo</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project #3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://cdn-images-1.medium.com/max/2600/1*Dr33-2Wgz8lYZxZsJUFIog.jpeg) center / cover"
              }}
            >
              React Project #3
            </CardTitle>
            <CardText>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi ut
              deserunt tempore quibusdam! Numquam nam perspiciatis id laudantium
              quos consequuntur obcaecati impedit quibusdam qui, ducimus
              dignissimos? Magni, adipisci. Blanditiis, ipsa?
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Code</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is NodeJS</h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <JSProjects />
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is MongoDB</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>NodeJS</Tab>
          <Tab>Javascript</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
