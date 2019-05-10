import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './components/main';
import './App.css';
import './Animate.css';

class App extends Component {
  render() {
    return (
<div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white', fontFamily: 'Anton', fontSize: '1.7em',}} to="/">My Portfolio</Link>} scroll>
            <Navigation>
                <Link style={{fontSize: '1.5em', fontFamily: 'Anton'}} to="/resume">Resume</Link> 
                <Link style={{fontSize: '1.5em', fontFamily: 'Anton'}} to="/projects">Projects</Link>
                <Link style={{fontSize: '1.5em', fontFamily: 'Anton'}} to="/contact">Contact</Link>
                <Link style={{fontSize: '1.5em', fontFamily: 'Anton'}} to="/aboutme">About Me</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black', fontFamily: 'Anton'}} to="/">My Portfolio</Link>}>
            <Navigation>
            <Link style={{fontSize: '1.5em', fontFamily: 'Anton'}} to="/resume">Resume</Link> 
                <Link style={{fontSize: '1.5em', fontFamily: 'Anton'}} to="/projects">Projects</Link>
                <Link style={{fontSize: '1.5em', fontFamily: 'Anton'}} to="/contact">Contact</Link>
                <Link style={{fontSize: '1.5em', fontFamily: 'Anton'}} to="/aboutme">About Me</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main></Main>
        </Content>
    </Layout>
</div>      );
  }
}

export default App;
