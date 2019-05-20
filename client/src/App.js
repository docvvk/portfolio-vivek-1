import React, { Component } from "react";
import { Layout, Content } from "react-mdl";
// import { Link } from "react-router-dom";
import Main from "./components/main";
import "./App.css";
import "./Animate.css";
import { Navbar } from "@front10/landing-page-book/dist/components";
// import { Hero, Navbar, Container, NavbarCollapse, NavbarBrand, NavbarLink, NavbarNav, Image, Icon, LanguageSwitcher } from "@front10/landing-page-book/dist/components";
import "bootstrap/dist/css/bootstrap.min.css";
import "@front10/landing-page-book/dist/themes/default/index.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testApi")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err => err);
  }
  componentDidMount() {
    this.callAPI();
  }
  
  render() {

    console.log(`${this.state.apiResponse}`);

    return (
      <div className="demo-big-content">
        <Layout>
          <Navbar
            // bgColor={'success'}
            expand="lg"
            transparent={false}
            className=""
            fixed={false}
            brandName="Vivek Malhan"
            brandTextColor="light"
            brandTextMonoSpace={true}
            brandLink="/"
            imageMarginLeft="0"
            imageRounded={true}
            brandLogo={`${process.env.REACT_APP_VM_URL}`}
            rightItems={[
              {
                title: " PROJECTS",
                href: "/projects",
                icon: "fa fa-tasks"
              },
              {
                title: " ABOUTME",
                href: "/aboutme",
                icon: "fa fa-user"
              }
            ]}
            leftItems={[
              {
                title: " GITHUB",
                href: "https://github.com/docvvk",
                target: "_blank",
                icon: "fa fa-github"
              },
              {
                title: " LINKEDIN",
                href: "https://www.linkedin.com/in/docvvk/",
                target: "_blank",
                icon: "fa fa-linkedin"
              },
              {
                title: " RESUME",
                href:
                  "https://docs.google.com/document/d/1LsOete1Seu7PTeXHAa-v_JaMqUUkt_RtSEMY8CDlys4/edit?usp=sharing",
                target: "_blank",
                icon: "fa fa-file"
              }
            ]}
          />
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
