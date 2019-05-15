import React, { Component } from "react";
import JSProjects from "./projects/jsProjects";
import NodeProjects from "./projects/nodeProjects";
import WebProjects from "./projects/webProjects";
import ReactProjects from "./projects/reactProjects";
import MernProjects from "./projects/mernProjects";
import K8Projects from "./projects/k8Projects";
import MongoProjects from "./projects/mongoProjects";
import {
  Tabs,
  Tab,
  Grid,
  Cell
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div>
          <ReactProjects />
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <NodeProjects />
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
          <MongoProjects />
        </div>
      );
    } else if (this.state.activeTab === 4) {
      return (
        <div>
          <WebProjects />
        </div>
      );
    } else if (this.state.activeTab === 5) {
      return (
        <div>
          <MernProjects />
          </div>
      );
    } else if (this.state.activeTab === 6) {
      return (
        <div>
          <K8Projects />
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
          <Tab>Web-Projects</Tab>
          <Tab>Mern-Stack</Tab>
          <Tab>Google-Cloud / Kubernetes</Tab>
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
