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
    this.state = { apiResponse: "" }
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
            brandLogo="data:image/jpeg;base64,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"
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
                href: "https://docs.google.com/document/d/1LsOete1Seu7PTeXHAa-v_JaMqUUkt_RtSEMY8CDlys4/edit?usp=sharing",
                target: "_blank",
                icon: "fa fa-file"
              },
              {
                title: `${this.state.apiResponse}`
              }
            ]}
          >
            {/* <Container>
          <NavbarCollapse>
          <NavbarLink href="/">
                  <Image className="mr-2" rounded width="30" alt="profile pic" src="data:image/jpeg;base64,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"/>
                      Vivek Malhan
              </NavbarLink>
              <NavbarNav alignItems="right">
                  <NavbarLink href="/resume">Resume</NavbarLink>
                  <NavbarLink href="/projects">Projects</NavbarLink>
                  <NavbarLink href="/contact">Contact</NavbarLink>
                  <NavbarLink href="/aboutme">About Me</NavbarLink>
                  <NavbarLink><Icon icon="fa fa-search" /></NavbarLink>
                  <NavbarLink><Icon icon="fa fa-github" /></NavbarLink>
                  <LanguageSwitcher showArrow={false} selectedLanguage="US" />
              </NavbarNav>
          </NavbarCollapse>
      </Container> */}
          </Navbar>

          {/* <Layout> */}
          {/* <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white', fontFamily: 'Anton', fontSize: '1.7em',}} to="/">My Portfolio</Link>} scroll>
            <Navigation>
                <Link style={{fontSize: '1.5em', fontFamily: 'Anton'}} to="/resume">Resume</Link> 
                <Link style={{fontSize: '1.5em', fontFamily: 'Anton'}} to="/projects">Projects</Link>
                <Link style={{fontSize: '1.5em', fontFamily: 'Anton'}} to="/contact">Contact</Link>
                <Link style={{fontSize: '1.5em', fontFamily: 'Anton'}} to="/aboutme">About Me</Link>
            </Navigation>
        </Header> */}
          {/* <Drawer title={<Link style={{textDecoration: 'none', color: 'black', fontFamily: 'Anton'}} to="/">My Portfolio</Link>}>
            <Navigation>
            <Link style={{fontSize: '1.5em', fontFamily: 'Anton'}} to="/resume">Resume</Link> 
                <Link style={{fontSize: '1.5em', fontFamily: 'Anton'}} to="/projects">Projects</Link>
                <Link style={{fontSize: '1.5em', fontFamily: 'Anton'}} to="/contact">Contact</Link>
                <Link style={{fontSize: '1.5em', fontFamily: 'Anton'}} to="/aboutme">About Me</Link>
            </Navigation>
        </Drawer> */}
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
